import Phaser from 'phaser';

export default class Scene extends Phaser.Scene {
    constructor(game) {
        super();

        this.bonobo = null;
        this.cursors = null;
        this.banana = null;
        this.peutTirer = true;
    }

    preload() {
        this.load.image('bonobo', 'img/Image_Flat/Personnages/Bonobo/Bonobo.png');
        this.load.image('banana', 'img/Image_Flat/Personnages/Bonobo/Banana.png')
        this.load.image('banana_charged', 'img/Image_Flat/Personnages/Bonobo/ChargedBanana.png')
        this.load.image('three', 'img/Image_Flat/Grass/Grass_Tree.png');
        this.load.image('grass-simple', 'img/Image_Flat/Grass/Grass_Simple.png');
        this.load.image('grass-puddle-small', 'img/Image_Flat/Grass/Grass_puddle_small.png');
        this.load.image('grass-puddle-medium', 'img/Image_Flat/Grass/Grass_puddle_medium.png');
        this.load.image('grass-puddle-large', 'img/Image_Flat/Grass/Grass_puddle_large.png');
        this.load.image('grass-bush-medium', 'img/Image_Flat/Grass/Grass_bush_medium.png');
        this.load.image('grass-bush-small', 'img/Image_Flat/Grass/Grass_bush_small.png');
        this.load.image('grass-bush-large', 'img/Image_Flat/Grass/Grass_bush_large.png');
        this.load.image('grass-stone-large', 'img/Image_Flat/Grass/Grass_stone_large.png');
        this.load.image('grass-stone-medium', 'img/Image_Flat/Grass/Grass_stone_medium.png');
        this.load.image('grass-stone-small', 'img/Image_Flat/Grass/Grass_stone_small.png');
    }

    create() {
        this.cursors = this.sys.game.input.keyboard.createCursorKeys();
        this.bonobo = this.physics.add.sprite(64, 64, 'bonobo').setScale(0.125).setDepth(100);
        this.add.image(64, 64, 'three');
        this.add.image(192, 64, 'grass-simple');
        this.add.image(320, 64, 'grass-puddle-small');
    }

    update() {
        const BONOBO_SPEED_LEFT_RIGHT =256;
        const BONOBO_SPEED_UP_DOWN =128;

        if (this.cursors.left.isDown) {
            this.bonobo.setVelocityX(-BONOBO_SPEED_LEFT_RIGHT);
        } else if (this.cursors.right.isDown) {
            this.bonobo.setVelocityX(BONOBO_SPEED_LEFT_RIGHT);
        } else {
            this.bonobo.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.bonobo.setVelocityY(-BONOBO_SPEED_UP_DOWN);
        } else if (this.cursors.down.isDown) {
            this.bonobo.setVelocityY(BONOBO_SPEED_UP_DOWN);
        } else {
            this.bonobo.setVelocityY(0);
        }

        if (this.cursors.space.isDown && this.peutTirer) {
            this.banana = this.physics.add.sprite(this.bonobo.x, this.bonobo.y, 'banana').setVelocityY(-512);
            this.peutTirer = false;
            window.setTimeout( () => {
                this.peutTirer = true;
              }, 1000);
        } else {}

    }
}
