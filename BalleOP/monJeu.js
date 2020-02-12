var config = {
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
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
var score = 0;
var vie = 3;

function init() {
var player;
var cursors;
var scoreText;
var bomb;
var text;
var timedEvent;
}

function preload(){
	this.load.image('background','assets/cour.png');
	this.load.image('bomb','assets/bomb.png');
	this.load.image('mur','assets/mur.png');
	this.load.spritesheet('perso','assets/dudee.png',{frameWidth: 32, frameHeight: 32});
	this.load.image('life1','assets/vie1.png');
		this.load.image('life2','assets/vie2.png');
			this.load.image('life3','assets/vie3.png');
}



function create(){
	this.add.image(640,360,'background');
	life1 = this.add.image(400,300,'life1').setScale(0.25);
	life2 = this.add.image(400,300,'life2').setScale(0.25);
	life3 = this.add.image(400,300,'life3').setScale(0.25);

	platforms = this.physics.add.staticGroup();
	platforms.create(0,400,'mur').setScale(2).refreshBody();

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

	scoreText = this.add.text(16,16, 'score: 0', {fontSize: '32px', fill:'#000'});
	bombs = this.physics.add.group();
	this.physics.add.collider(bombs,platforms);
	this.physics.add.collider(player,bombs, hitBomb, null, this);
		
		
		text = this.add.text(32, 32);
	    timedEvent = this.time.addEvent({ delay: 2000, callback: setbomb, callbackScope: this, repeat: 5 });
}

function hitBomb(player, bomb){
	vie --;
	bomb.destroy(true);
}

function update(){

	if(cursors.left.isDown){
		player.anims.play('left', true);
		player.setVelocityX(-300);
		player.setFlipX(true);
	}else if(cursors.right.isDown){
		player.setVelocityX(300);
		player.anims.play('left', true);
		player.setFlipX(false);
	}else{
		player.anims.play('stop', true);
		player.setVelocityX(0);
	}
	if(cursors.up.isDown){
		player.anims.play('up', true);
		player.setVelocityY(-300);
		player.setFlipY(true);
	}else if(cursors.down.isDown){
		player.setVelocityY(300);
		player.anims.play('up', true);
		player.setFlipY(false);
	}else{
		player.anims.play('stop', true);
		player.setVelocityY(0);
	}




//Perte de Vie

	if (vie == 2){
		life3.destroy(true);
	}
	else if (vie == 1){
		life2.destroy(true);
	}
	else if (vie == 0){
		life1.destroy(true);
		this.physics.pause();
		player.setTint(0xff0000);
		player.anims.play('turn');
		gameOver = true;
		score = 0;
		vie = 3;
	}



	text.setText('Event.progress: ' + timedEvent.getProgress().toString().substr(0, 4) + '\nEvent.repeatCount: ' + timedEvent.repeatCount);
}



function setbomb (){

		var y = Phaser.Math.Between(10,710);
		var bomb = bombs.create(1200, y, 'bomb');
		bomb.setBounce(1);
		bomb.setCollideWorldBounds(false);
		bomb.setVelocity(Phaser.Math.Between(-600, -700), 100);
		bomb.setGravityY(-500);
		bomb.setGravityX(0);
	}

