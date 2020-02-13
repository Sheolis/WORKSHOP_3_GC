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
var scorej = 0;
var vie = 3;
var viej = 3;

var saut = 2;
var sauveSaut = 1;

var sautplayerj = 2;
var sauveSautplayerj = 1;

var sauttard = 2;
var sauveSauttard = 1;

var sauttard1 = 2;
var sauveSauttard1 = 1;

var attack = 1;
var direction = 'right';
var boutonFeu;

function init(){
	var platforms;
	var sol;
	var player;
	var playerj;
	var tard;
	var cursors;
	var scoreText;
	var gameOverText;
	var scoreTextj;
	var gameOverTextj;
	var potions
	var text;
	var timedEvent;
}

function preload(){
	this.load.image('background','assets/back.png');
	this.load.image('platform', 'assets/platform.png');
	this.load.image('sol', 'assets/sol.png');
	this.load.spritesheet('persoj','assets/RunPig.png', {frameWidth: 38, frameHeight: 26});
	this.load.spritesheet('perso','assets/Run.png', {frameWidth: 40, frameHeight: 28});
	this.load.spritesheet('jump','assets/Jump.png', {frameWidth: 39, frameHeight: 28});
	this.load.spritesheet('idle','assets/Idle.png', {frameWidth: 39, frameHeight: 28});
	this.load.spritesheet('attack','assets/Attack.png', {frameWidth: 59, frameHeight: 55});
	this.load.image('potions','assets/potion.png');
	this.load.spritesheet('tard','assets/Run.png', {frameWidth: 40, frameHeight: 28});

}

function create(){

	//Monde
	
	this.add.image(500,300,'background');

	platforms = this.physics.add.staticGroup();
	platforms.create(650,250, 'platform').setScale(1,1);
	platforms.create(60,600, 'platform').setScale(1,1);
	platforms.create(156,600, 'platform').setScale(1,1);
	platforms.create(252,600, 'platform').setScale(1,1);
	platforms.create(348,600, 'platform').setScale(1,1);
	platforms.create(444,600, 'platform').setScale(1,1);
	platforms.create(538,600, 'platform').setScale(1,1);
	platforms.create(636,600, 'platform').setScale(1,1);
	platforms.create(732,600, 'platform').setScale(1,1);
	platforms.create(828,600, 'platform').setScale(1,1);
	platforms.create(924,600, 'platform').setScale(1,1);
	platforms.create(1020,600, 'platform').setScale(1,1);
	platforms.create(1116,600, 'platform').setScale(1,1);
	platforms.create(1212,600, 'platform').setScale(1,1);




	//Plate-formes Jaunes
	platformsJ = this.physics.add.staticGroup();
	platformsJ.create(50,250, 'platform').setScale(1,1);
	platformsJ.setTint(0xffff00);


	//Plate-formes Rouges
	platformsR = this.physics.add.staticGroup();
	platformsR.create(50,350, 'platform').setScale(1,1);
	platformsR.setTint(0xff0000);


	//Plate-formes Bleues
	platformsB = this.physics.add.staticGroup();
	platformsB.create(50,450, 'platform').setScale(1,1);
	platformsB.setTint(0x0000ff);



	//Plate-formes Vertes
	platformsV = this.physics.add.staticGroup();
	platformsV.create(350,250, 'platform').setScale(1,1);
	platformsV.setTint(0x00ff00);

	sol = this.physics.add.staticGroup();
	sol.create(960,720, 'sol').setScale(1,1);
	sol.create(460,720, 'sol').setScale(1,1);

	

	//Player 1

	player = this.physics.add.sprite(10,100,'perso');
	player.setCollideWorldBounds(true);
	player.setTint(0xffff00);
	player.setBounce(0.02);
	player.body.setGravityY(200);
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
		key: 'jump',
		frames: this.anims.generateFrameNumbers('jump', {start: 0, end: 1}),
		frameRate: 5,
		repeat: -1
	});

	this.anims.create({
		key: 'ground',
		frames: this.anims.generateFrameNumbers('jump', {start: 2, end: 2}),
		frameRate: 5,
		repeat: -1
	});

	this.anims.create({
		key: 'pause',
		frames: this.anims.generateFrameNumbers('idle', {start: 0, end: 10}),
		frameRate: 8,
		repeat: -1
	});


	this.anims.create({
		key: 'attack',
		frames: this.anims.generateFrameNumbers('attack', {start: 0, end: 2}),
		frameRate: 5,
	});
	//Player 2


	playerj = this.physics.add.sprite(400,10,'persoj');
	playerj.setCollideWorldBounds(true);
	playerj.setTint(0x00ff00);
	playerj.setBounce(0.02);
	playerj.body.setGravityY(200);
	this.physics.add.collider(playerj,platformsR);
	this.physics.add.collider(playerj,platformsJ);
	this.physics.add.collider(playerj,platformsB);
	this.physics.add.collider(playerj,platforms);
	this.physics.add.collider(playerj,sol);



	// Ennemis 
	
	tard = this.physics.add.sprite(10,270,'tard');
	tard.setCollideWorldBounds(true);
	tard.setTint(0xff0000);
	tard.setBounce(0.02);
	tard.body.setGravityY(200);
	this.physics.add.collider(tard,platformsJ);
	this.physics.add.collider(tard,platformsV);
	this.physics.add.collider(tard,platformsB);
	this.physics.add.collider(tard,platforms);
	this.physics.add.collider(tard,sol);

	tard1 = this.physics.add.sprite(10,380,'tard');
	tard1.setCollideWorldBounds(true);
	tard1.setTint(0x0000ff);
	tard1.setBounce(0.02);
	tard1.body.setGravityY(200);
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

	this.anims.create({
		key: 'attak_tard',
		frames: this.anims.generateFrameNumbers('tard', {start: 10, end: 12}),
		frameRate: 5,
		repeat: -1
	});

	

	//Texte

	scoreText = this.add.text(25,100, 'Score: 0', {fontsize: '32px', fill: '#000'});
	gameOverText = this.add.text(450, 250, "GAME OVER MAN", {fontsize: '128px', fill: '#000'});
	gameOverText.visible = false
	scoreTextj = this.add.text(900,100, 'Score: 0', {fontsize: '32px', fill: '#000'});
	gameOverTextj = this.add.text(450, 250, 'GAME OVER DIN DON', {fontsize: '128px', fill: '#000'});
	gameOverTextj.visible = false




	//Tirer

	boutonFeu = this.input.keyboard.addKey('F');

	//Potion

	potions = this.physics.add.group({
		key: 'potions',
		repeat: 0,
		setXY: {x: 750, y: 450, stepX: 70}
	});

	this.physics.add.collider(potions, platforms);
	this.physics.add.collider(potions, sol);
	this.physics.add.overlap(potions, player, collectPotion, null, this);
	this.physics.add.overlap(potions, playerj, collectPotionj, null, this);

	


	text = this.add.text(32, 32);
	timedEvent = this.time.addEvent({ delay: 800, callback: setbomb, callbackScope: this, repeat: 90 });


}


//Fonction potion

function collectPotion(player, potion){
	potion.disableBody(true,true);
	vie ++;
	score += 10;
	scoreText.setText('Score: '+ score);
	if (potions.countActive(true) === 0){
		potions.children.iterate(function(child){
			child.enableBody(true,child.x,0, true, true);
		});
	};
}

function collectPotionj(playerj, potion){
	potion.disableBody(true,true);
	scorej += 10;
	scoreTextj.setText('Score: '+ scorej);
	if (potions.countActive(true) === 0){
		potions.children.iterate(function(child){
			child.enableBody(true,child.x,0, true, true);
		});
	};
}


function update() {

	//Déplacement du Joueur 1

	if(player.body.deltaY() > 0 && player.body.onFloor()){
		if (!player.body.touching.down){        // while player's in the air
	        if (player.body.touching.down){     // when player hit the groud
	            player.setVelocityX(0);
	            player.anims.play('ground');      // play landing animation
	        }
	    }
	}

	if ((player.body.touching.down) && (cursors.up.isDown)){
		saut = 2;
	}

	if ((sauveSaut==1) && (saut > 0) && (cursors.up.isDown)){
		saut --;
		sauveSaut = 0;
		if (saut==1) {
			player.setVelocityY(-350);
			if (player.body.velocity.y < 0) {
				player.anims.play('jump', true);
			}
		}
		if (saut==0) {
			player.setVelocityY(-250);
			if (player.body.velocity.y < 0) {
				player.anims.play('jump', true);
			}
		}
	}

	if (cursors.up.isUp){
		sauveSaut = 1;
	}


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

	if(playerj.body.deltaY() > 0 && playerj.body.onFloor()){
		if (!playerj.body.touching.down){        // while player's in the air
	        if (playerj.body.touching.down){     // when player hit the groud
	            playerj.setVelocityX(0);
	            playerj.anims.play('ground');      // play landing animation
	        }
	    }
	}

	if ((playerj.body.touching.down) && (cursors.up.isDown)){
		sautplayerj = 2;
	}

	if ((sauveSautplayerj==1) && (sautplayerj > 0) && (cursors.up.isDown)){
		sautplayerj --;
		sauveSautplayerj = 0;
		if (sautplayerj==1) {
			playerj.setVelocityY(-350);
			if (playerj.body.velocity.y < 0) {
				playerj.anims.play('jump', true);
			}
		}
		if (sautplayerj==0) {
			playerj.setVelocityY(-250);
			if (playerj.body.velocity.y < 0) {
				playerj.anims.play('jump', true);
			}
		}
	}

	if (cursors.up.isUp){
		sauveSautplayerj = 1;
	}

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




	if(tard.body.deltaY() > 0 && tard.body.onFloor()){
		if (!tard.body.touching.down){        // while player's in the air
	        if (tard.body.touching.down){     // when player hit the groud
	            tard.setVelocityX(0);
	            tard.anims.play('ground');      // play landing animation
	        }
	    }
	}

	if ((tard.body.touching.down) && (cursors.up.isDown)){
		sauttard = 2;
	}

	if ((sauveSauttard==1) && (sauttard > 0) && (cursors.up.isDown)){
		sauttard --;
		sauveSauttard = 0;
		if (sauttard==1) {
			tard.setVelocityY(-350);
			if (tard.body.velocity.y < 0) {
				tard.anims.play('jump', true);
			}
		}
		if (sauttard==0) {
			tard.setVelocityY(-250);
			if (tard.body.velocity.y < 0) {
				tard.anims.play('jump', true);
			}
		}
	}

	if (cursors.up.isUp){
		sauveSauttard = 1;
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



	if(tard1.body.deltaY() > 0 && tard1.body.onFloor()){
		if (!tard1.body.touching.down){        // while player's in the air
	        if (tard1.body.touching.down){     // when player hit the groud
	            tard1.setVelocityX(0);
	            tard1.anims.play('ground');      // play landing animation
	        }
	    }
	}

	if ((tard1.body.touching.down) && (cursors.up.isDown)){
		sauttard1 = 2;
	}

	if ((sauveSauttard1==1) && (sauttard1 > 0) && (cursors.up.isDown)){
		sauttard1 --;
		sauveSauttard1 = 0;
		if (sauttard1==1) {
			tard1.setVelocityY(-350);
			if (tard1.body.velocity.y < 0) {
				tard1.anims.play('jump', true);
			}
		}
		if (sauttard1==0) {
			tard1.setVelocityY(-250);
			if (tard1.body.velocity.y < 0) {
				tard1.anims.play('jump', true);
			}
		}
	}

	if (cursors.up.isUp){
		sauveSauttard1 = 1;
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



	text.setText('\nTemps restant: ' + timedEvent.repeatCount);

	if(timedEvent.repeatCount==0){
		
	}
}