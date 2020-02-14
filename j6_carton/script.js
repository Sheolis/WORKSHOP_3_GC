var config = {
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 20},
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
var score_win;
var score_loose;

function init(){
	var platforms;
	var sol;
	var cote;
	var player;
	var cursors;
	var boits;

	var gameOverperduText;
	var gameOvergagnéText;

	var gameOverText;


}


function preload(){
	this.load.image('background','_graph/img/decors/camion_1.png');
	this.load.image('cote', '_graph/img/assets_jeu/carton_côté.png');
	this.load.image('cote1', '_graph/img/assets_jeu/carton_côté.png');
	this.load.image('sol', '_graph/img/assets_jeu/carton_sol.png');
	this.load.image('boits', '_graph/img/assets_jeu/carton_boite.jpg');
	this.load.image('perso','_graph/img/assets_jeu/carton_boxB.jpg');
	this.load.image('perso1','_graph/img/assets_jeu/carton_boxC.jpg');
	this.load.image('perso2','_graph/img/assets_jeu/carton_boxD.jpg');
	this.load.image('perso3','_graph/img/assets_jeu/carton_boxE.jpg');
	this.load.image('box','_graph/img/assets_jeu/carton_boxB.jpg');

}

function create(){
score_win = 1 + parseInt( $.session.get('score') );
score_loose = parseInt( $.session.get('score') - 2 );
// Player équivaut aux boites que l'on déplacera

	//Monde

	this.add.image(400,300,'background');

	cote1 = this.physics.add.staticGroup();
	cote1.create(36,250, 'cote1');
	cote1.create(552,250, 'cote1');
	cote1.setAlpha(0);


	sol = this.physics.add.staticGroup();
	sol.create(300,720, 'sol').setScale(2).refreshBody();
	sol.create(300,-30, 'sol').setScale(2).refreshBody();


	limite = this.physics.add.staticGroup();
	limite.create(288,270, 'sol').setScale(0.6,0.7).refreshBody();
	limite.setAlpha(0.5);

	cote = this.physics.add.staticGroup();
	cote.create(-10,300, 'cote');




	//Player 1

	player = this.physics.add.sprite(400,100,'perso');
	player.setCollideWorldBounds(true);
	player.setBounce(0);
	player.body.setGravityY(0);

	this.physics.add.collider(player,sol);
	this.physics.add.collider(player,cote);


	//Récupération des curseurs

	cursors = this.input.keyboard.createCursorKeys();



	//Animations Joueur 2

	player2 = this.physics.add.sprite(400,100,'perso1');
	player2.setCollideWorldBounds(true);
	player2.setBounce(0);
	player2.body.setGravityY(-20);

	this.physics.add.collider(player2,sol);
	this.physics.add.collider(player2,cote);




	//Animations Joueur 3

	player3 = this.physics.add.sprite(400,100,'perso2');
	player3.setCollideWorldBounds(true);
	player3.setBounce(0);
	player3.body.setGravityY(-20);

	this.physics.add.collider(player3,sol);
	this.physics.add.collider(player3,cote);




	//Animations Joueur 4

	player4 = this.physics.add.sprite(400,100,'perso3');
	player4.setCollideWorldBounds(true);
	player4.setBounce(0);
	player4.body.setGravityY(-20);

	this.physics.add.collider(player4,sol);
	this.physics.add.collider(player4,cote);



	//Animations Joueur 5

	player5 = this.physics.add.sprite(400,100,'perso2');
	player5.setCollideWorldBounds(true);
	player5.setBounce(0);
	player5.body.setGravityY(-20);

	this.physics.add.collider(player5,sol);
	this.physics.add.collider(player5,cote);




	//Animations Joueur 6

	player6 = this.physics.add.sprite(400,100,'perso');
	player6.setCollideWorldBounds(true);
	player6.setBounce(0);
	player6.body.setGravityY(-20);

	this.physics.add.collider(player6,sol);
	this.physics.add.collider(player6,cote);



	//Animations Joueur 6

	player7 = this.physics.add.sprite(400,100,'perso');
	player7.setCollideWorldBounds(true);
	player7.setBounce(0);
	player7.body.setGravityY(-20);

	this.physics.add.collider(player7,sol);
	this.physics.add.collider(player7,cote);



	//Animations Joueur 6

	player8 = this.physics.add.sprite(400,100,'perso');
	player8.setCollideWorldBounds(true);
	player8.setBounce(0);
	player8.body.setGravityY(-20);

	this.physics.add.collider(player8,sol);
	this.physics.add.collider(player8,cote);



	//Animations Joueur 6

	player9 = this.physics.add.sprite(400,100,'perso');
	player9.setCollideWorldBounds(true);
	player9.setBounce(0);
	player9.body.setGravityY(-20);

	this.physics.add.collider(player9,sol);
	this.physics.add.collider(player9,cote);




	//Animations Joueur 6

	playerA = this.physics.add.sprite(400,100,'perso');
	playerA.setCollideWorldBounds(true);
	playerA.setBounce(0);
	playerA.body.setGravityY(-20);

	this.physics.add.collider(playerA,sol);
	this.physics.add.collider(playerA,cote);



	//BOITES

	box = this.physics.add.staticGroup();
	box.create(472,492, 'box');
	boits = this.physics.add.staticGroup();
	boits.create(122,488, 'boits');
	boits.create(242,488, 'boits');
	boits.create(362,488, 'boits');


	/*boits.create(75,380, 'boits');
	boits.create(75,460, 'boits');
	boits.create(75,540, 'boits');
	boits.create(75,620, 'boits');
	boits.create(194,550, 'boits');
	boits.create(194,350, 'boits');
	boits.create(194,150, 'boits');
	boits.create(194,70, 'boits');*/



	this.physics.add.collider(boits,cote);
	this.physics.add.collider(boits,sol);




	this.physics.add.collider(player, player2);
	this.physics.add.collider(player, player3);
	this.physics.add.collider(player, player4);
	this.physics.add.collider(player, player5);
	this.physics.add.collider(player, player6);
	this.physics.add.collider(player, player7);
	this.physics.add.collider(player, player8);
	this.physics.add.collider(player, player9);
	this.physics.add.collider(player, playerA);




	this.physics.add.collider(player2, player3);
	this.physics.add.collider(player2, player4);
	this.physics.add.collider(player2, player5);
	this.physics.add.collider(player2, player6);
	this.physics.add.collider(player2, player7);
	this.physics.add.collider(player2, player8);
	this.physics.add.collider(player2, player9);
	this.physics.add.collider(player2, playerA);




	this.physics.add.collider(player3, player4);
	this.physics.add.collider(player3, player5);
	this.physics.add.collider(player3, player6);
	this.physics.add.collider(player3, player7);
	this.physics.add.collider(player3, player8);
	this.physics.add.collider(player3, player9);
	this.physics.add.collider(player3, playerA);




	this.physics.add.collider(player4, player5);
	this.physics.add.collider(player4, player6);
	this.physics.add.collider(player4, player7);
	this.physics.add.collider(player4, player8);
	this.physics.add.collider(player4, player9);
	this.physics.add.collider(player4, playerA);




	this.physics.add.collider(player5, player6);
	this.physics.add.collider(player5, player7);
	this.physics.add.collider(player5, player8);
	this.physics.add.collider(player5, player9);
	this.physics.add.collider(player5, playerA);




	this.physics.add.collider(player6, player7);
	this.physics.add.collider(player6, player8);
	this.physics.add.collider(player6, player9);
	this.physics.add.collider(player6, playerA);




	this.physics.add.collider(player7, player8);
	this.physics.add.collider(player7, player9);
	this.physics.add.collider(player7, playerA);




	this.physics.add.collider(player8, player9);
	this.physics.add.collider(player8, playerA);
	this.physics.add.collider(player9, playerA);




	this.physics.add.collider(player, boits);
	this.physics.add.collider(player2, boits);
	this.physics.add.collider(player3, boits);
	this.physics.add.collider(player4, boits);
	this.physics.add.collider(player5, boits);
	this.physics.add.collider(player6, boits);
	this.physics.add.collider(player7, boits);
	this.physics.add.collider(player8, boits);
	this.physics.add.collider(player9, boits);
	this.physics.add.collider(playerA, boits);

	this.physics.add.collider(boits, boits);




	this.physics.add.collider(player, box);
	this.physics.add.collider(player2, box);
	this.physics.add.collider(player3, box);
	this.physics.add.collider(player4, box);
	this.physics.add.collider(player5, box);
	this.physics.add.collider(player6, box);
	this.physics.add.collider(player7, box);
	this.physics.add.collider(player8, box);
	this.physics.add.collider(player9, box);
	this.physics.add.collider(playerA, box);




	this.physics.add.collider(player, cote1);
	this.physics.add.collider(player2, cote1);
	this.physics.add.collider(player3, cote1);
	this.physics.add.collider(player4, cote1);
	this.physics.add.collider(player5, cote1);
	this.physics.add.collider(player6, cote1);
	this.physics.add.collider(player7, cote1);
	this.physics.add.collider(player8, cote1);
	this.physics.add.collider(player9, cote1);
	this.physics.add.collider(playerA, cote1);

	//Texte


	gameOverperduText = this.add.text(600, 250, "IL RISQUE D'Y AVOIR DE LA CASSE", {fontsize: '128px', fill: '#000'});
	gameOverperduText.visible = false

	gameOvergagnéText = this.add.text(600, 250, "BRAVO LE CAMION EST PRET", {fontsize: '128px', fill: '#000'});
	gameOvergagnéText.visible = false

}


function update() {

	if (cursors.space.isDown){
		this.registry.destroy(); // destroy registry
		this.events.off();﻿ // disable all active events
		this.scene.restart();﻿﻿﻿﻿ // restart current scene
	}
	if(player.y<350){
		if (cursors.up.isDown){
			player.anims.play('left', true);
			player.setVelocityY(10);

		}
		else if (cursors.down.isDown){
			player.anims.play('left', true);
			player.setVelocityY(100);

		}

		else if (cursors.left.isDown){
			player.anims.play('left', true);
			player.setVelocityX(-100);

		}

		else if (cursors.right.isDown){
			player.anims.play('left', true);
			player.setVelocityX(100);

		}

		else{

			player.setVelocityX(0);

		}
	}

	//Joueur 1 arrêt, début Joueur 2
	if(player.y>380){
		player2.body.setGravityY(0);

		if(player2.y<320){
			if (cursors.up.isDown){
			player2.anims.play('left', true);
			player2.setVelocityY(10);

			}
			else if (cursors.down.isDown){
				player2.anims.play('left', true);
				player2.setVelocityY(100);

			}

			else if (cursors.left.isDown){
				player2.anims.play('left', true);
				player2.setVelocityX(-100);

			}

			else if (cursors.right.isDown){
				player2.anims.play('left', true);
				player2.setVelocityX(100);

			}

			else{

				player2.setVelocityX(0);

			}
		}

		//Joueur 2 arrêt, début Joueur 3
		if(player2.y>320){
			player3.body.setGravityY(0);

			if(player3.y<380){
				if (cursors.up.isDown){
				player3.anims.play('left', true);
				player3.setVelocityY(10);

				}
				else if (cursors.down.isDown){
					player3.anims.play('left', true);
					player3.setVelocityY(100);

				}

				else if (cursors.left.isDown){
					player3.anims.play('left', true);
					player3.setVelocityX(-100);

				}

				else if (cursors.right.isDown){
					player3.anims.play('left', true);
					player3.setVelocityX(100);

				}

				else{

					player3.setVelocityX(0);

				}
			}

			//Joueur 3 arrêt, début Joueur 4
			if(player3.y>380){
				player4.body.setGravityY(0);

				if(player4.y<320){
					if (cursors.up.isDown){
					player4.anims.play('left', true);
					player4.setVelocityY(10);

					}
					else if (cursors.down.isDown){
						player4.anims.play('left', true);
						player4.setVelocityY(100);

					}

					else if (cursors.left.isDown){
						player4.anims.play('left', true);
						player4.setVelocityX(-100);

					}

					else if (cursors.right.isDown){
						player4.anims.play('left', true);
						player4.setVelocityX(100);

					}

					else{

						player4.setVelocityX(0);

					}
				}

				if(player4.y>320){
					player5.body.setGravityY(0);

					if(player5.y<320){
						if (cursors.up.isDown){
						player5.anims.play('left', true);
						player5.setVelocityY(10);

						}

						else if (cursors.down.isDown){
							player5.anims.play('left', true);
							player5.setVelocityY(100);

						}

						else if (cursors.left.isDown){
							player5.anims.play('left', true);
							player5.setVelocityX(-100);

						}

						else if (cursors.right.isDown){
							player5.anims.play('left', true);
							player5.setVelocityX(100);

						}

						else{

							player5.setVelocityX(0);

						}
					}

					if(player5.y>320){
						player6.body.setGravityY(0);

						if(player6.y<320){
							if (cursors.up.isDown){
								player6.anims.play('left', true);
								player6.setVelocityY(10);

								}

							else if (cursors.down.isDown){
								player6.anims.play('left', true);
								player6.setVelocityY(100);

							}

							else if (cursors.left.isDown){
								player6.anims.play('left', true);
								player6.setVelocityX(-100);

							}

							else if (cursors.right.isDown){
								player6.anims.play('left', true);
								player6.setVelocityX(100);

							}

							else{

								player6.setVelocityX(0);

							}
						}

							if(player6.y>320){
								player7.body.setGravityY(0);

							if(player7.y<320){
								if (cursors.up.isDown){
									player6.anims.play('left', true);
									player6.setVelocityY(10);

									}

								else if (cursors.down.isDown){
									player7.anims.play('left', true);
									player7.setVelocityY(100);

								}

								else if (cursors.left.isDown){
									player7.anims.play('left', true);
									player7.setVelocityX(-100);

								}

								else if (cursors.right.isDown){
									player7.anims.play('left', true);
									player7.setVelocityX(100);

								}

								else{

									player7.setVelocityX(0);

								}
							}

							if(player7.y>320){
								player8.body.setGravityY(0);

								if(player8.y<280){
									if (cursors.up.isDown){
										player8.anims.play('left', true);
										player8.setVelocityY(10);

										}

									else if (cursors.down.isDown){
										player8.anims.play('left', true);
										player8.setVelocityY(100);

									}

									else if (cursors.left.isDown){
										player8.anims.play('left', true);
										player8.setVelocityX(-100);

									}

									else if (cursors.right.isDown){
										player8.anims.play('left', true);
										player8.setVelocityX(100);

									}

									else{

										player8.setVelocityX(0);

									}
								}

								if(player8.y>280){
									player9.body.setGravityY(0);

									if(player9.y<280){
										if (cursors.up.isDown){
											player9.anims.play('left', true);
											player9.setVelocityY(10);

											}

										else if (cursors.down.isDown){
											player9.anims.play('left', true);
											player9.setVelocityY(100);

										}

										else if (cursors.left.isDown){
											player9.anims.play('left', true);
											player9.setVelocityX(-100);

										}

										else if (cursors.right.isDown){
											player9.anims.play('left', true);
											player9.setVelocityX(100);

										}

										else{

											player9.setVelocityX(0);

										}
									}

									if(player9.y>280){
										playerA.body.setGravityY(0);

										if(playerA.y<260){
											if (cursors.up.isDown){
												playerA.anims.play('left', true);
												playerA.setVelocityY(10);

												}

											else if (cursors.down.isDown){
												playerA.anims.play('left', true);
												playerA.setVelocityY(100);

											}

											else if (cursors.left.isDown){
												playerA.anims.play('left', true);
												playerA.setVelocityX(-100);

											}

											else if (cursors.right.isDown){
												playerA.anims.play('left', true);
												playerA.setVelocityX(100);

											}

											else{

												playerA.setVelocityX(0);

											}
										}

										if(playerA.y < 280 && playerA.body.touching.down){
											gameOverperduText.visible = true;

											var score=$.session.get('score');
											score = score_loose;
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
										    document.location.href = '../d6_carton/indexD.html';
										  });
										}

										if(playerA.y>300){
											gameOvergagnéText.visible = true;
											this.physics.pause(true);

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
											$.session.set('score',score);
											$("body").fadeOut(1000,function(){
										    document.location.href = '../d6_carton/indexV.html';
										  });
										}
									}
								}
							}
						}
					}
				}

			}
		}
	}
}
