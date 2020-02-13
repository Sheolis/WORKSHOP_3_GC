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

function init() {
var player;
var cursors;

}

function preload(){
	this.load.image('background','../_graph/img/decors/recree_2.png');
	this.load.image('perso','../_graph/img/assets_jeu/recree_pangBall.png');
	this.load.image('mur','../_graph/img/assets_jeu/recree_mur.png');
	this.load.image('barriere','../_graph/img/assets_jeu/recree_barrieres.png');
}



function create(){





	this.add.image(640,360,'background');

	platforms = this.physics.add.staticGroup();
	platforms.create(0,400,'mur').setScale(2).refreshBody();
	platforms.create(650,710,'barriere');
	platforms.create(650,10,'barriere');

	player = this.physics.add.sprite(100,450,'perso');
	player.setCollideWorldBounds(true);
	player.body.setGravityY(-300);
	this.physics.add.collider(player,platforms);

	cursors = this.input.keyboard.createCursorKeys()

	this.physics.add.overlap(player,null,this);
	this.physics.add.collider(platforms);
	this.physics.add.collider(player,null, this);


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
}