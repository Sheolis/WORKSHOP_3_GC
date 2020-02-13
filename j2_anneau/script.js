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
var flag;


}

function preload(){
	this.load.image('background','_graph/img/decors/chambre_2.png');
	this.load.image('fil','_graph/img/decors/Capture_fil.png');
	this.load.image('perso','_graph/img/assets_jeu/recree_pangBall.png');
	this.load.image('barriere','_graph/img/assets_jeu/recree_barrieres.png');
	this.load.image('barriere0','_graph/img/assets_jeu/recree_barrieres_0.png');
	this.load.image('barriere1','_graph/img/assets_jeu/recree_barrieres1.png');
	this.load.image('barriere1_1','_graph/img/assets_jeu/recree_barrieres1_1.png');
	this.load.image('barriere12','_graph/img/assets_jeu/recree_barrieres12.png');
	this.load.image('barriere13','_graph/img/assets_jeu/recree_barrieres13.png');
	this.load.image('barriere2_3','_graph/img/assets_jeu/recree_barrieres22.png');
	this.load.image('barriere_fin','_graph/img/assets_jeu/recree_barrieres_fin.png');
}



function create(){

	this.add.image(640,360,'background');
	this.add.image(640,360,'fil');
	this.add.image(1262,490,'barriere_fin');

	platforms = this.physics.add.staticGroup();

	platforms.create(80,150,'barriere12');
	platforms.create(80,200,'barriere12');

	platforms.create(240,150,'barriere12');
	platforms.create(240,200,'barriere12');

	platforms.create(290,150,'barriere12');

	platforms.create(363,230,'barriere2_3');
	platforms.create(313,280,'barriere2_3');

	platforms.create(363,360,'barriere2_3');
	platforms.create(313,410,'barriere2_3');

	platforms.create(436,440,'barriere12');
	platforms.create(386,490,'barriere12');

	platforms.create(596,440,'barriere12');
	platforms.create(546,490,'barriere12');

	platforms.create(619,570,'barriere2_3');
	platforms.create(669,520,'barriere2_3');

	platforms.create(700,643,'barriere12');
	platforms.create(703,593,'barriere13');

	platforms.create(788,570,'barriere2_3');
	platforms.create(738,520,'barriere2_3');

	platforms.create(788,410,'barriere2_3');
	platforms.create(738,360,'barriere2_3');

	platforms.create(788,270,'barriere2_3');
	platforms.create(738,218,'barriere2_3');

	platforms.create(821,195,'barriere13');
	platforms.create(821,145,'barriere12');

	platforms.create(855,270,'barriere2_3');
	platforms.create(905,218,'barriere2_3');

	platforms.create(855,430,'barriere2_3');
	platforms.create(905,378,'barriere2_3');

	platforms.create(978,466,'barriere12');
	platforms.create(928,516,'barriere12');

	platforms.create(1138,466,'barriere12');
	platforms.create(1088,516,'barriere12');

	platforms.create(1280,466,'barriere12');
	platforms.create(1250,516,'barriere12');


	player = this.physics.add.sprite(100,175,'perso');
	player.setCollideWorldBounds(true);
	player.body.setGravityY(-300);
	this.physics.add.collider(player,platforms);


	cursors = this.input.keyboard.createCursorKeys()


	flag = this.physics.add.group({
		key: 'barriere_fin',
		repeat:0,
		setXY: {x:1262,y:490,stepX:0}
	});

	this.physics.add.overlap(player,flag, fin, null, this);
	this.physics.add.collider(flag,platforms);

	platforms.setAlpha(0);



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

function fin(){
	$("body").fadeOut(1000,function(){
		document.location.href = '../d2_anneau/index.html';
	});
	}
