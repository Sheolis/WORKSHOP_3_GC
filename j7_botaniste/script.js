var config = {
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 300},
			debug: false

		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);
var score = 0;




function init(){
	var platforms;
	var sol;
	var mur;
	var player;
	var playerj;
	var tard;
	var cursors;
	var gameOverText;
	var gameOverTextj;
	var fleurs
	var fleursV
	var fleursR
	var fleursB
	var fleursJ
}

function preload(){
	this.load.image('background','assets/bureau_2.png');
	this.load.image('platform', 'assets/botaniste_platform.png');
	this.load.image('mur', 'assets/botaniste_mur.jpg');
	this.load.image('sol', 'assets/botaniste_sol.png');
	this.load.spritesheet('persoj','assets/botaniste_Run.png', {frameWidth: 38, frameHeight: 26});
	this.load.spritesheet('perso','assets/botaniste_Run.png', {frameWidth: 40, frameHeight: 28});
	this.load.spritesheet('tard','assets/botaniste_Run.png', {frameWidth: 40, frameHeight: 28});
	this.load.spritesheet('idle','assets/botaniste_Idle.png', {frameWidth: 39, frameHeight: 28});
	this.load.image('fleurs','assets/botaniste_fleur.png');
	this.load.image('fleursJ','assets/botaniste_fleur.png');
	this.load.image('fleursR','assets/botaniste_fleur.png');
	this.load.image('fleursV','assets/botaniste_fleur.png');
	this.load.image('fleursB','assets/botaniste_fleur.png');

}

function create(){

	this.add.image(640,360,'background');

	murs = this.physics.add.staticGroup();
	

	murs.create(1146,666, 'mur').setScale(1,1);
	murs.create(1146,642, 'mur').setScale(1,1);
	murs.create(1146,546, 'mur').setScale(1,1);
	murs.create(1146,438, 'mur').setScale(1,1);
	murs.create(1146,350, 'mur').setScale(1,1);
	murs.create(1146,250, 'mur').setScale(1,1);
	murs.create(1146,160, 'mur').setScale(1,1);
	murs.create(1146,50, 'mur').setScale(1,1);


	/*murs.create(1146,666, 'mur').setScale(1,1);
	murs.create(1146,642, 'mur').setScale(1,1);
	murs.create(1146,546, 'mur').setScale(1,1);
	murs.create(1146,438, 'mur').setScale(1,1);*/

	murs.create(1052,256, 'mur').setScale(1,1);

	murs.create(910,256, 'mur').setScale(1,1);
	murs.create(910,160, 'mur').setScale(1,1);
	murs.create(890,50, 'mur').setScale(1,1);


	murs.create(858,356, 'mur').setScale(1,1);


	murs.create(796,256, 'mur').setScale(1,1);


	murs.create(764,552, 'mur').setScale(1,1);
	murs.create(764,456, 'mur').setScale(1,1);


	murs.create(586,546, 'mur').setScale(1,1);
	murs.create(586,450, 'mur').setScale(1,1);
	murs.create(586,350, 'mur').setScale(1,1);
	murs.create(586,256, 'mur').setScale(1,1);
	murs.create(586,160, 'mur').setScale(1,1);
	murs.create(586,50, 'mur').setScale(1,1);


	murs.create(396,350, 'mur').setScale(1,1);
	murs.create(396,250, 'mur').setScale(1,1);
	murs.create(396,150, 'mur').setScale(1,1);
	murs.create(396,50, 'mur').setScale(1,1);


	murs.create(220,450, 'mur').setScale(1,1);


	murs.create(124,666, 'mur').setScale(1,1);
	murs.create(124,642, 'mur').setScale(1,1);
	murs.create(124,546, 'mur').setScale(1,1);
	murs.create(124,438, 'mur').setScale(1,1);
	murs.create(124,350, 'mur').setScale(1,1);
	murs.create(124,250, 'mur').setScale(1,1);
	murs.create(124,150, 'mur').setScale(1,1);
	murs.create(124,50, 'mur').setScale(1,1);


	//Platforms

	platforms = this.physics.add.staticGroup();



	platforms.create(498,700, 'platform').setScale(1,1);
	platforms.create(774,700, 'platform').setScale(1,1);
	//platforms.create(156,600, 'platform').setScale(1,1).setAlpha(0);
	//platforms.create(156,600, 'platform').setScale(1,1).setAlpha(0);ç
	platforms.create(156,698, 'platform').setScale(1,1);
	platforms.create(156,668, 'platform').setScale(1,1);	
	platforms.create(156,200, 'platform').setScale(1,1);
	platforms.create(156,482, 'platform').setScale(1,1);


	platforms.create(252,700, 'platform').setScale(1,1);
	platforms.create(252,600, 'platform').setScale(1,1);
	platforms.create(252,400, 'platform').setScale(1,1);
	platforms.create(252,300, 'platform').setScale(1,1);
	platforms.create(252,100, 'platform').setScale(1,1);


	platforms.create(348,700, 'platform').setScale(1,1);
	platforms.create(348,600, 'platform').setScale(1,1);
	platforms.create(348,570, 'platform').setScale(1,1);
	platforms.create(348,300, 'platform').setScale(1,1);
	platforms.create(348,200, 'platform').setScale(1,1);
	platforms.create(348,100, 'platform').setScale(1,1);


	platforms.create(444,700, 'platform').setScale(1,1);
	platforms.create(444,600, 'platform').setScale(1,1);
	platforms.create(444,200, 'platform').setScale(1,1);


	//platforms.create(538,600, 'platform').setScale(1,1);
	platforms.create(538,600, 'platform').setScale(1,1);
	platforms.create(538,400, 'platform').setScale(1,1);
	platforms.create(538,300, 'platform').setScale(1,1);
	platforms.create(538,100, 'platform').setScale(1,1);


	platforms.create(636,500, 'platform').setScale(1,1);
	platforms.create(636,300, 'platform').setScale(1,1);
	platforms.create(636,270, 'platform').setScale(1,1);
	platforms.create(636,100, 'platform').setScale(1,1);


	platforms.create(732,600, 'platform').setScale(1,1);
	platforms.create(732,400, 'platform').setScale(1,1);
	platforms.create(732,100, 'platform').setScale(1,1);
	

	platforms.create(828,700, 'platform').setScale(1,1);
	platforms.create(828,600, 'platform').setScale(1,1);
	platforms.create(828,400, 'platform').setScale(1,1);
	platforms.create(828,300, 'platform').setScale(1,1);


	platforms.create(924,700, 'platform').setScale(1,1);
	platforms.create(924,600, 'platform').setScale(1,1);
	platforms.create(924,500, 'platform').setScale(1,1);
	platforms.create(924,300, 'platform').setScale(1,1);
	platforms.create(924,100, 'platform').setScale(1,1);


	platforms.create(1020,700, 'platform').setScale(1,1);
	platforms.create(1020,600, 'platform').setScale(1,1);
	platforms.create(1020,500, 'platform').setScale(1,1);
	platforms.create(1020,400, 'platform').setScale(1,1);
	platforms.create(1020,300, 'platform').setScale(1,1);


	platforms.create(1116,698, 'platform').setScale(1,1);
	platforms.create(1116,668, 'platform').setScale(1,1);
	platforms.create(1116,500, 'platform').setScale(1,1);
	platforms.create(1116,400, 'platform').setScale(1,1);
	platforms.create(1116,100, 'platform').setScale(1,1);
	





	//Plate-formes Jaunes
	platformsJ = this.physics.add.staticGroup();
	platformsJ.create(444,400, 'platform').setScale(1,1);
	platformsJ.create(444,300, 'platform').setScale(1,1);
	platformsJ.create(444,100, 'platform').setScale(1,1);
	platformsJ.setTint(0xffff00);


	//Plate-formes Rouges
	platformsR = this.physics.add.staticGroup();
	platformsR.create(1116,600, 'platform').setScale(1,1);
	platformsR.create(828,500, 'platform').setScale(1,1);
	platformsR.create(924,400, 'platform').setScale(1,1);
	platformsR.create(1116,300, 'platform').setScale(1,1);
	platformsR.create(1020,100, 'platform').setScale(1,1);
	platformsR.setTint(0xff0000);


	//Plate-formes Bleues
	platformsB = this.physics.add.staticGroup();
	platformsB.create(636,600, 'platform').setScale(1,1);
	platformsB.create(636,400, 'platform').setScale(1,1);
	platformsB.create(828,100, 'platform').setScale(1,1);
	platformsB.setTint(0x0000ff);



	//Plate-formes Vertes
	platformsV = this.physics.add.staticGroup();
	platformsV.create(156,100, 'platform').setScale(1,1);
	platformsV.create(156,300, 'platform').setScale(1,1);
	platformsV.create(348,400, 'platform').setScale(1,1);


	platformsV.setTint(0x00ff00);

	sol = this.physics.add.staticGroup();
	sol.create(632,720, 'sol').setScale(1,1);


	

	//Player 1

	player = this.physics.add.sprite(520,10,'perso');
	player.setCollideWorldBounds(true);
	player.setTint(0xffff00);
	player.setBounce(0.02);
	player.body.setGravityY(200);
	this.physics.add.collider(player,murs);
	this.physics.add.collider(player,platformsR);
	this.physics.add.collider(player,platformsV);
	this.physics.add.collider(player,platformsB);

	this.physics.add.collider(player,platforms);

	this.physics.add.collider(player,sol);


	//Récupération des curseurs
	keys = this.input.keyboard.addKeys('A,F,S,D');
	cursors = this.input.keyboard.createCursorKeys();


	//Animations Joueur 1

	this.anims.create({
		key: 'left',
		frames: this.anims.generateFrameNumbers('perso', {start: 0, end: 3}),
		frameRate: 5,
		repeat: -1
	});


	this.anims.create({
		key: 'pause',
		frames: this.anims.generateFrameNumbers('idle', {start: 0, end: 3}),
		frameRate: 8,
		repeat: -1
	});


	//Player 2


	playerj = this.physics.add.sprite(300,10,'persoj');
	playerj.setCollideWorldBounds(true);
	playerj.setTint(0x00ff00);
	playerj.setBounce(0.02);
	playerj.body.setGravityY(200);
	this.physics.add.collider(playerj,murs);
	this.physics.add.collider(playerj,platformsR);
	this.physics.add.collider(playerj,platformsJ);
	this.physics.add.collider(playerj,platformsB);
	this.physics.add.collider(playerj,platforms);
	this.physics.add.collider(playerj,sol);



	// Ennemis 
	
	tard = this.physics.add.sprite(1100,10,'tard');
	tard.setCollideWorldBounds(true);
	tard.setTint(0xff0000);
	tard.setBounce(0.02);
	tard.body.setGravityY(200);
	this.physics.add.collider(tard,murs);
	this.physics.add.collider(tard,platformsJ);
	this.physics.add.collider(tard,platformsV);
	this.physics.add.collider(tard,platformsB);
	this.physics.add.collider(tard,platforms);
	this.physics.add.collider(tard,sol);

	tard1 = this.physics.add.sprite(720,10,'tard');
	tard1.setCollideWorldBounds(true);
	tard1.setTint(0x0000ff);
	tard1.setBounce(0.02);
	tard1.body.setGravityY(200);
	this.physics.add.collider(tard1,murs);
	this.physics.add.collider(tard1,platformsJ);
	this.physics.add.collider(tard1,platformsV);
	this.physics.add.collider(tard1,platformsR);
	this.physics.add.collider(tard1,platforms);
	this.physics.add.collider(tard1,sol);
	
	
	this.anims.create({
		key: 'idle_tard',
		frames: this.anims.generateFrameNumbers('tard', {start: 0, end: 2}),
		frameRate: 5,
		repeat: -1
	});

	this.anims.create({
		key: 'mvt_tard',
		frames: this.anims.generateFrameNumbers('tard', {start: 3, end: 9}),
		frameRate: 5,
		repeat: -1
	});

	

	

	//Texte

	gameOverText = this.add.text(410, 350, "La fleur       est pollinisée", {'font':'38px Arial', fill: '#fff'});
	gameOverText.visible = false
	




	//Tirer

	boutonFeu = this.input.keyboard.addKey('F');

	//Fleur

	fleursR = this.physics.add.group({
		key: 'fleursR',
		repeat: 0,
		setXY: {x: 640, y: 600, stepX: 70}
	});

	this.physics.add.collider(fleursR, platforms);
	fleursR.setTint(0xff0000);
	this.physics.add.collider(fleursR, sol);
	this.physics.add.overlap(fleursR, tard, collectFleurR, null, this);


	fleursB = this.physics.add.group({
		key: 'fleursB',
		repeat: 0,
		setXY: {x: 640, y: 600, stepX: 70}
	});

	this.physics.add.collider(fleursB, sol)
	fleursB.setTint(0x0000ff);
	this.physics.add.collider(fleursB, platforms);
	this.physics.add.overlap(fleursB, tard1, collectFleurB, null, this);


	fleursJ = this.physics.add.group({
		key: 'fleursJ',
		repeat: 0,
		setXY: {x: 640, y: 600, stepX: 70}
	});

	this.physics.add.collider(fleursJ, sol);
	fleursJ.setTint(0xffff00);
	this.physics.add.collider(fleursJ, murs);
	this.physics.add.overlap(fleursJ, player, collectFleurJ, null, this);


	fleursV = this.physics.add.group({
		key: 'fleursV',
		repeat: 0,
		setXY: {x: 640, y: 600, stepX: 70}
	});
	
	this.physics.add.collider(fleursV, sol);
	fleursV.setTint(0x00ff00);
	this.physics.add.collider(fleursV, murs);
	this.physics.add.overlap(fleursV, playerj, collectFleurV, null, this);

	fleurs = this.physics.add.group({
		key: 'fleurs',
		repeat: 0,
		setXY: {x: 640, y: 600, stepX: 70}
	});


	this.physics.add.collider(fleurs, platforms);
	this.physics.add.collider(fleurs, sol);
	this.physics.add.collider(fleurs, murs);



}


//Fonction Fleur

function collectFleurJ(player, fleurJ){
	fleurJ.disableBody(true,true);
	score += 10;
}

function collectFleurV(playerj, fleurV){
	fleurV.disableBody(true,true);
	score += 10;
}

function collectFleurR(tard, fleurR){
	fleurR.disableBody(true,true);
	score += 10;
}

function collectFleurB(tard1, fleurB){
	fleurB.disableBody(true,true);
	score += 10;
}


function update() {

	//Déplacement du Joueur 1



	if (cursors.space.isDown){
		this.registry.destroy(); // destroy registry
		this.events.off();﻿ // disable all active events
		this.scene.restart();﻿﻿﻿﻿ // restart current scene
	}

	if (cursors.left.isDown){
		player.anims.play('left', true);
		player.setVelocityX(-200);
		player.setFlipX(true);
		player.direction = 'left';
	}
	else if (cursors.right.isDown){
		player.anims.play('left', true);
		player.setFlipX(false);
		player.setVelocityX(200);
		player.anims.play('right', true);
		player.direction = 'left';

	}

	else{
        player.anims.play('pause', true);
		player.setVelocityX(0);

	}


	

	if (keys.A.isUp){
		attack = 1;
	}

	
	if ( Phaser.Input.Keyboard.JustDown(boutonFeu)) {
		tirer(player, direction);
	}	
	

	//Déplacement du Joueur 2


    if (cursors.left.isDown){
		playerj.anims.play('left', true);
		playerj.setVelocityX(-200);
		playerj.setFlipX(true);
		playerj.direction = 'left';
	}
	else if (cursors.right.isDown){
		playerj.anims.play('left', true);
		playerj.setFlipX(false);
		playerj.setVelocityX(200);
		playerj.anims.play('right', true);
		playerj.direction = 'left';

	}
	else{
        playerj.anims.play('pause', true);
		playerj.setVelocityX(0);

	}




	

	if (cursors.left.isDown){
		tard.anims.play('left', true);
		tard.setVelocityX(-200);
		tard.setFlipX(true);
		tard.direction = 'left';
	}
	else if (cursors.right.isDown){
		tard.anims.play('left', true);
		tard.setFlipX(false);
		tard.setVelocityX(200);
		tard.anims.play('right', true);
		tard.direction = 'left';

	}

	else{
        tard.anims.play('pause', true);
		tard.setVelocityX(0);

	}


	if (cursors.left.isDown){
		tard1.anims.play('left', true);
		tard1.setVelocityX(-200);
		tard1.setFlipX(true);
		tard1.direction = 'left';
	}
	else if (cursors.right.isDown){
		tard1.anims.play('left', true);
		tard1.setFlipX(false);
		tard1.setVelocityX(200);
		tard1.anims.play('right', true);
		tard1.direction = 'left';

	}

	else{
        tard1.anims.play('pause', true);
		tard1.setVelocityX(0);

	}

	if (score == 40){
		gameOverText.visible = true;
		this.physics.pause();
	}

}