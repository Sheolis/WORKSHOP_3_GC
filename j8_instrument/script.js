var config = {
	type: Phaser.AUTO,
	width: 1000,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 300},
			debug: true

		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);



function init(){

	var player;
	var playerj;
	var tard;
	var cursors;
	var scoreText;
	var gameOverText;
	var gameOverTextSucces;
	var text;
	var timedEvent;
	var cote;
	
}

function preload(){
	this.load.image('background','assets/instrument_sheet.png');
	this.load.image('cote','assets/cote.png');
	this.load.image('persoj','assets/instrument_blanche.png');
	this.load.image('perso','assets/instrument_barre.png');
	this.load.image('tard','assets/instrument__croche.png');
	this.load.image('ard','assets/instrument_dblcroche.png');
	this.load.image('tard1','assets/instrument_doublecroche.png');



}

function create(){

	//Monde
	
	this.add.image(500,300,'background');


	cote = this.physics.add.staticGroup();
	cote.create(0,500, 'cote').setScale(1,2);

	//Player 1

	player = this.physics.add.sprite(100,450,'perso');
	player.setCollideWorldBounds(true);
	player.setBounce(0.02);
	player.body.setGravityY(-300);



	//Récupération des curseurs
	cursors = this.input.keyboard.createCursorKeys();


	// Ennemis 

	playerj = this.physics.add.sprite(1000,450,'persoj');
	playerj.setBounce(0.02);
	playerj.body.setGravityY(-300);

	
	
	tard = this.physics.add.sprite(1500,100,'tard');
	tard.setBounce(0.02);
	tard.body.setGravityY(-300);


	tard1 = this.physics.add.sprite(2000,380,'persoj');
	tard1.setBounce(0.02);
	tard1.body.setGravityY(-300);


	tard2 = this.physics.add.sprite(2500,180,'tard1');
	tard2.setBounce(0.02);
	tard2.body.setGravityY(-300);

	tard3 = this.physics.add.sprite(3000,150,'tard');
	tard3.setBounce(0.02);
	tard3.body.setGravityY(-300);

	tard4 = this.physics.add.sprite(3500,300,'persoj');
	tard4.setBounce(0.02);
	tard4.body.setGravityY(-300);
	

	tard5 = this.physics.add.sprite(4000,200,'tard1');
	tard5.setBounce(0.02);
	tard5.body.setGravityY(-300);


	tard6 = this.physics.add.sprite(6000,550,'tard1');
	tard6.setBounce(0.02);
	tard6.body.setGravityY(-300);


	tard8 = this.physics.add.sprite(5000,130,'tard');
	tard8.setBounce(0.02);
	tard8.body.setGravityY(-300);


	ard = this.physics.add.sprite(11000,430,'ard');
	ard.setBounce(0.02);
	ard.body.setGravityY(-300);


	ard1 = this.physics.add.sprite(10000,530,'ard');
	ard1.setBounce(0.02);
	ard1.body.setGravityY(-300);

	
	text = this.add.text(32, 32);
	timedEvent = this.time.addEvent({ delay: 800, callback: null, callbackScope: this, repeat: 30 });
	
	this.physics.add.overlap(player, playerj, collectNoteA, null, this);
	this.physics.add.overlap(player, tard, collectNoteB, null, this);
	this.physics.add.overlap(player, tard1, collectNoteC, null, this);
	this.physics.add.overlap(player, tard2, collectNoteD, null, this);
	this.physics.add.overlap(player, tard3, collectNoteE, null, this);
	this.physics.add.overlap(player, tard4, collectNoteF, null, this);
	this.physics.add.overlap(player, tard5, collectNoteG, null, this);
	this.physics.add.overlap(player, tard6, collectNoteH, null, this);
	this.physics.add.overlap(player, tard8, collectNoteJ, null, this);
	this.physics.add.overlap(player, ard, collectNote, null, this);
	this.physics.add.overlap(player, ard1, collectNote1, null, this);


	this.physics.add.collider(cote, playerj, touchj, null, this);
	this.physics.add.collider(cote, tard, touch1, null, this);
	this.physics.add.collider(cote, tard1, touch2, null, this);
	this.physics.add.collider(cote, tard2, touch3, null, this);
	this.physics.add.collider(cote, tard3, touch4, null, this);
	this.physics.add.collider(cote, tard4, touch5, null, this);
	this.physics.add.collider(cote, tard5, touch6, null, this);
	this.physics.add.collider(cote, tard6, touch7, null, this);
	this.physics.add.collider(cote, tard8, touch8, null, this);
	this.physics.add.collider(cote, ard, touch9, null, this);
	this.physics.add.collider(cote, ard1, touchA, null, this);



	function collectNoteA(player, playerj){
	playerj.destroy(true);
	}

	function collectNoteB(player, tard){
	tard.destroy(true);
	}

	function collectNoteC(player, tard1){
	tard1.destroy(true);
	}

	function collectNoteD(player, tard2){
	tard2.destroy(true);
	}

	function collectNoteE(player, tard3){
	tard3.destroy(true);
	}

	function collectNoteF(player, tard4){
	tard4.destroy(true);
	}

	function collectNoteG(player, tard5){
	tard5.destroy(true);
	}


	function collectNoteH(player, tard6){
	tard6.destroy(true);
	}


	function collectNoteJ(player, tard8){
	tard8.destroy(true);
	}
	

	function collectNote(player, ard){
	ard.destroy(true);
	}


	function collectNote1(player, ard1){
	ard1.destroy(true);
	}


	function touchj (cote, playerj){
		gameOverText.visible = true;
		this.physics.pause();	}

	function touch1 (cote, tard){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touch2 (cote, tard1){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touch3 (cote, tard2){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touch4 (cote, tard3){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touch5 (cote, tard4){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touch6 (cote, tard5){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touch7 (cote, tard6){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touch8 (cote, tard8){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touch9 (cote, ard){
		gameOverText.visible = true;
		this.physics.pause();
	}

	function touchA (cote, ard1){
		gameOverText.visible = true;
		this.physics.pause();
	}

	//Texte

	gameOverText = this.add.text(150, 250, "VOUS AVEZ FAIT UNE FAUSSE NOTE", {'font': '40px', fill: '#000'});
	gameOverText.visible = false


	gameOverTextSucces = this.add.text(270, 250, "QUELLE PERFECTION", {'font': '40px', fill: '#000'});
	gameOverTextSucces.visible = false

}



function update() {

	text.setText('Fin de la mélodie dans:' + timedEvent.repeatCount);



	//Déplacement du Joueur 1

	if (cursors.space.isDown){
		this.registry.destroy(); // destroy registry
		this.events.off();﻿ // disable all active events
		this.scene.restart();﻿﻿﻿﻿ // restart current scene
	}

	
	if (cursors.up.isDown){
			player.setVelocityY(-210);
			player.setFlipX(false);
	}


	else if (cursors.down.isDown){
			player.setVelocityY(210);
			player.setFlipX(false);
	}

	else{
		player.setVelocityX(0);
		player.setVelocityY(0);
	
	}


	
	

	//Déplacement du Joueur 2


	
	if (playerj.x >= 90){
		this.tweens.add({
	    	targets: playerj,
	   	 	
	   	 	x :-1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});
		


	}

	if (tard.x >= 90){
    	this.tweens.add({
	    	targets: tard,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});



	}


	if (tard1.x >= 90){
    	this.tweens.add({
	    	targets: tard1,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});



	}

	if (tard2.x >= 90){
    	this.tweens.add({
	    	targets: tard2,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});

		

	}

	if (tard3.x >= 90){
    	this.tweens.add({
	    	targets: tard3,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});

		

	}


	if (tard4.x >= 90){
    	this.tweens.add({
	    	targets: tard4,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});

		

	}

	if (tard5.x >= 90){
    	this.tweens.add({
	    	targets: tard5,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});

		

	}

	if (tard6.x >= 90){
    	this.tweens.add({
	    	targets: tard6,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});

		

	}

	if (tard8.x >= 90){
    	this.tweens.add({
	    	targets: tard8,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});

		

	}

	if (ard.x >= 90){
    	this.tweens.add({
	    	targets: ard,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 10000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});

		

	}

	if (ard1.x >= 90){
    	this.tweens.add({
	    	targets: ard1,
	   	 	
	   	 	x : -1000,
	    	// alpha: { start: 0, to: 1 },
	    	// alpha: 1,
	    	// alpha: '+=1',
	    	ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
	    	duration: 90000,
	    	repeat: 0,            // -1: infinity
	    	yoyo: false
		});

		

	}


	if (tard.y<=0 || tard1.y<=0 || tard2.y<=0 || tard3.y<=0 || tard4.y<=0 || tard5.y<=0 || tard6.y<=0 || tard8.y<=0 || ard.y<=0 || ard1.y<=0 || playerj.y<=0 ){
		gameOverTextSucces.visible = true;
		this.physics.pause();
	}

	if (timedEvent.repeatCount<=0){
		gameOverTextSucces.visible = true;
		this.physics.pause();
	}

}