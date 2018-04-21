import Phaser from 'phaser';

export default class Scene extends Phaser.Scene {
    constructor(game) {
        super();

        this.bonobo = null;
        this.cursors = null;
    }

    preload() {
        this.load.image('bonobo', 'img/Image_Flat/Personnages/Bonobo/Bonobo.png');
        this.load.image('grass-tree', 'img/Image_Flat/Grass/Grass_Tree.png');
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
        this.load.image('tree', 'img/Image_Flat/Vegeatation/Tree.png');
    }

    create() {
        this.cursors = this.sys.game.input.keyboard.createCursorKeys();
        this.bonobo = this.physics.add.sprite(64, 64, 'bonobo').setScale(0.125).setDepth(100);
        
        /*
        pour descendre d'une case : y = y + 128
        pour monter d'une case : y = y - 128
        pour aller a droite d'une case: x = x + 128
        pour aller a gauche d'une case: x = x - 128
        
        pour placer un arbre: caseDeArbre = CaseDeGrassTree - 64*/
        this.add.image(64, 64, 'grass-simple');
        this.add.image(192, 64, 'grass-simple');
        this.add.image(320, 64, 'grass-puddle-small');
        this.add.image(448, 64, 'grass-simple');
        this.add.image(576, 64, 'grass-simple');
        this.add.image(704, 64, 'grass-simple');
        
        this.add.image(64, 192, 'grass-tree');
        this.add.image(192, 192, 'grass-simple');
        this.add.image(320, 192, 'grass-simple');
        this.add.image(448, 192, 'grass-tree');
        this.add.image(576, 192, 'grass-simple');
        this.add.image(704, 192, 'grass-tree');
        
        this.add.image(64, 128, 'tree')
        this.add.image(448, 128, 'tree')
        this.add.image(704, 128, 'tree')
    }

    update() {
        const BONOBO_SPEED = 256;

        if (this.cursors.left.isDown) {
            this.bonobo.setVelocityX(-BONOBO_SPEED);
        } else if (this.cursors.right.isDown) {
            this.bonobo.setVelocityX(BONOBO_SPEED);
        } else {
            this.bonobo.setVelocityX(0);
        }

        if (this.cursors.up.isDown) {
            this.bonobo.setVelocityY(-BONOBO_SPEED);
        } else if (this.cursors.down.isDown) {
            this.bonobo.setVelocityY(BONOBO_SPEED);
        } else {
            this.bonobo.setVelocityY(0);
        }
    }
}
