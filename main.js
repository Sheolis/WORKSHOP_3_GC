var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        init: init,
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y:2400,x:0},
            debug: true
        }
    }
}

var game = new Phaser.Game(config);

function init() {

}

function preload() {
    this.load.image('background_0','assets/backgrounds/purple_720p.png');
}

function create() {
    this.add.image(400,300,'background_0');
}

function update() {

}
