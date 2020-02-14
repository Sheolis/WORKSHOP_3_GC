var config = {
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);
var vie = 2;
var score_win;

function init() {
var player;
var cursors;
var bomb;
var text;

var timedEvent;
}

function preload(){
	this.load.image('background','_graph/img/decors/recree_2.png');
	this.load.image('bomb','_graph/img/assets_jeu/recree_pangBall.png');
	this.load.image('mur','_graph/img/assets_jeu/recree_mur.png');
	this.load.image('barriere','_graph/img/assets_jeu/recree_barrieres.png')
	this.load.spritesheet('perso','_graph/img/assets_jeu/recree_perso2.png',{frameWidth: 64, frameHeight: 64});
	this.load.image('life1','_graph/img/assets_jeu/recree_life1.png');
	this.load.image('life2','_graph/img/assets_jeu/recree_life2.png');
}



function create(){
	score_win = 1 + parseInt( $.session.get('score') );
	alert(score_win);



	this.add.image(640,360,'background');
	life1 = this.add.image(400,300,'life1').setScale(0.25);
	life2 = this.add.image(400,300,'life2').setScale(0.25);


	platforms = this.physics.add.staticGroup();
	platforms.create(0,400,'mur').setScale(2).refreshBody();
	platforms.create(650,710,'barriere');
	platforms.create(650,10,'barriere');

	player = this.physics.add.sprite(100,450,'perso');
	player.setCollideWorldBounds(true);
	player.setBounce(0.2);
	player.body.setGravityY(-300);
	this.physics.add.collider(player,platforms);

	cursors = this.input.keyboard.createCursorKeys();

	this.anims.create({
		key:'left',
		frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 6}),
		frameRate: 10,
		repeat: -1
	});

	this.anims.create({
		key:'stop',
		frames: [{key: 'perso', frame:4}],
		frameRate: 20
	});

	this.physics.add.overlap(player,null,this);


	bombs = this.physics.add.group();
	this.physics.add.collider(bombs,platforms);
	this.physics.add.collider(player,bombs, hitBomb, null, this);


		text = this.add.text(32, 32);

	    timedEvent = this.time.addEvent({ delay: 800, callback: setbomb, callbackScope: this, repeat: 25 });











}

function hitBomb(player, bomb){
	vie --;
	bomb.destroy(true);
}

function update(){

	if(cursors.left.isDown){

		player.setVelocityX(-300);
	}else if(cursors.right.isDown){
		player.setVelocityX(300);
	}else{
		player.setVelocityX(0);
	}
	if(cursors.up.isDown){
		player.setVelocityY(-300);
	}else if(cursors.down.isDown){
		player.setVelocityY(300);
	}else{

		player.setVelocityY(0);
	}




//Perte de Vie


	if (vie == 1){
		life2.destroy(true);
	}
	else if (vie == 0){
		vie = -1 ;
		var score=$.session.get('score');
		score-=2;
		if (score>=1) {
			$.session.set('etat_jeu',2);
		}
		else if (score<2 && score>=(-2)) {
			$.session.set('etat_jeu',1);
		}
		else {
			$.session.set('etat_jeu',0);
		}
		$.session.set('score',score);
		$("body").fadeOut(1000,function(){
	    document.location.href = '../d3_recree/index.html';
	  });
	}
	else if (vie == -2){
		vie = -1 ;

	}



	text.setText('\nTemps restant: ' + timedEvent.repeatCount);

	if(timedEvent.repeatCount==0){
		var score=$.session.get('score');
		score = score_win;
		if (score>=1) {
			$.session.set('etat_jeu',2);
		}
		else if (score<2 && score>=(-2)) {
			$.session.set('etat_jeu',1);
		}
		else {
			$.session.set('etat_jeu',0);
		}
		$.session.set('score',score_win);
		$("body").fadeOut(1000,function(){
	    document.location.href = '../d3_recree/index.html';
	  });
	}
}



function setbomb (){

		var y = Phaser.Math.Between(10,710);
		var bomb = bombs.create(1200, y, 'bomb');
		var gravityY = Phaser.Math.Between(-100,-600);
		bomb.setBounce(1);
		bomb.setCollideWorldBounds(false);
		bomb.setVelocity(Phaser.Math.Between(-300, -700),  50);
		bomb.setGravityY(gravityY);
		bomb.setGravityX(0);
	}
