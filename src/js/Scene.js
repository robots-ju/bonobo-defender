import Phaser from 'phaser';

export default class Scene extends Phaser.Scene {
    constructor(game) {
        super();

        this.bonobo = null;
        this.cursors = null;
        this.banana = null;
        this.peutTirer = true;
        this.score = 0;
        this.grassTree = null;

    }

    preload() {
        this.load.image('bonobo', 'img/Image_Flat/Personnages/Bonobo/Bonobo.png');
        this.load.image('banana', 'img/Image_Flat/Personnages/Bonobo/Banana.png')
        this.load.image('banana_charged', 'img/Image_Flat/Personnages/Bonobo/ChargedBanana.png')
        this.load.image('tree', 'img/Image_Flat/Vegeatation/Tree.png');
        this.load.image('grass-simple', 'img/Image_Flat/Grass/Grass_Simple.png');
        this.load.image('grass-tree', 'img/Image_Flat/Grass/Grass_Tree.png');
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
        
        /*
        pour descendre d'une case : y = y + 128
        pour monter d'une case : y = y - 128
        pour aller a droite d'une case: x = x + 128
        pour aller a gauche d'une case: x = x - 128
        
        pour placer un arbre: caseDeArbre = CaseDeGrassTree - 64*/
        
        this.grassTree = this.physics.add.sprite(64, 64, 'grass-tree')
        /*Génération: */
        
        
        /*1er Ligne*/
        this.add.image(64, 64, 'grass-simple');
        this.add.image(192, 64, 'grass-simple');
        this.add.image(320, 64, 'grass-simple');
        this.add.image(448, 64, 'grass-simple');
        this.add.image(576, 64, 'grass-simple');
        this.add.image(704, 64, 'grass-simple');
        this.add.image(832, 64, 'grass-simple');
        this.add.image(960, 64, 'grass-simple');
        this.add.image(1088, 64, 'grass-simple');
        this.add.image(1216, 64, 'grass-simple');
        this.add.image(1344, 64, 'grass-simple');
        this.add.image(1472, 64, 'grass-simple');
        this.add.image(1600, 64, 'grass-simple');
        this.add.image(1728, 64, 'grass-simple');
        this.add.image(1856, 64, 'grass-simple');
        this.add.image(1984, 64, 'grass-simple');
        
        /*2eme Ligne*/
        this.add.image(64, 192, 'grass-simple');
        this.add.image(192, 192, 'grass-simple');
        this.add.image(320, 192, 'grass-simple');
        this.add.image(448, 192, 'grass-simple');
        this.add.image(576, 192, 'grass-simple');
        this.add.image(704, 192, 'grass-simple');
        this.add.image(832, 192, 'grass-simple');
        this.add.image(960, 192, 'grass-simple');
        this.add.image(1088, 192, 'grass-simple');
        this.add.image(1216, 192, 'grass-simple');
        this.add.image(1344, 192, 'grass-simple');
        this.add.image(1472, 192, 'grass-simple');
        this.add.image(1600, 192, 'grass-simple');
        this.add.image(1728, 192, 'grass-simple');
        this.add.image(1856, 192, 'grass-simple');
        this.add.image(1984, 192, 'grass-simple');
        
        /*3eme Ligne*/
        this.add.image(64, 320, 'grass-simple');
        this.add.image(192, 320, 'grass-simple');
        this.add.image(320, 320, 'grass-simple');
        this.add.image(448, 320, 'grass-simple');
        this.add.image(576, 320, 'grass-simple');
        this.add.image(704, 320, 'grass-simple');
        this.add.image(832, 320, 'grass-simple');
        this.add.image(960, 320, 'grass-simple');
        this.add.image(1088, 320, 'grass-simple');
        this.add.image(1216, 320, 'grass-simple');
        this.add.image(1344, 320, 'grass-simple');
        this.add.image(1472, 320, 'grass-simple');
        this.add.image(1600, 320, 'grass-simple');
        this.add.image(1728, 320, 'grass-simple');
        this.add.image(1856, 320, 'grass-simple');
        this.add.image(1984, 320, 'grass-simple');
        
        /*4eme Ligne*/
        this.add.image(64, 448, 'grass-simple');
        this.add.image(192, 448, 'grass-simple');
        this.add.image(320, 448, 'grass-simple');
        this.add.image(448, 448, 'grass-simple');
        this.add.image(576, 448, 'grass-simple');
        this.add.image(704, 448, 'grass-simple');
        this.add.image(832, 448, 'grass-simple');
        this.add.image(960, 448, 'grass-simple');
        this.add.image(1088, 448, 'grass-simple');
        this.add.image(1216, 448, 'grass-simple');
        this.add.image(1344, 448, 'grass-simple');
        this.add.image(1472, 448, 'grass-simple');
        this.add.image(1600, 448, 'grass-simple');
        this.add.image(1728, 448, 'grass-simple');
        this.add.image(1856, 448, 'grass-simple');
        this.add.image(1984, 448, 'grass-simple');
        
        /*5eme Ligne*/
        this.add.image(64, 576, 'grass-simple');
        this.add.image(192, 576, 'grass-simple');
        this.add.image(320, 576, 'grass-simple');
        this.add.image(448, 576, 'grass-simple');
        this.add.image(576, 576, 'grass-simple');
        this.add.image(704, 576, 'grass-simple');
        this.add.image(832, 576, 'grass-simple');
        this.add.image(960, 576, 'grass-simple');
        this.add.image(1088, 576, 'grass-simple');
        this.add.image(1216, 576, 'grass-simple');
        this.add.image(1344, 576, 'grass-simple');
        this.add.image(1472, 576, 'grass-simple');
        this.add.image(1600, 576, 'grass-simple');
        this.add.image(1728, 576, 'grass-simple');
        this.add.image(1856, 576, 'grass-simple');
        this.add.image(1984, 576, 'grass-simple');
        
        /*6eme Ligne*/
        this.add.image(64, 704, 'grass-simple');
        this.add.image(192, 704, 'grass-simple');
        this.add.image(320, 704, 'grass-simple');
        this.add.image(448, 704, 'grass-simple');
        this.add.image(576, 704, 'grass-simple');
        this.add.image(704, 704, 'grass-simple');
        this.add.image(832, 704, 'grass-simple');
        this.add.image(960, 704, 'grass-simple');
        this.add.image(1088, 704, 'grass-simple');
        this.add.image(1216, 704, 'grass-simple');
        this.add.image(1344, 704, 'grass-simple');
        this.add.image(1472, 704, 'grass-simple');
        this.add.image(1600, 704, 'grass-simple');
        this.add.image(1728, 704, 'grass-simple');
        this.add.image(1856, 704, 'grass-simple');
        this.add.image(1984, 704, 'grass-simple');
        
        /*7eme Ligne*/
        this.add.image(64, 832, 'grass-simple');
        this.add.image(192, 832, 'grass-simple');
        this.add.image(320, 832, 'grass-simple');
        this.add.image(448, 832, 'grass-simple');
        this.add.image(576, 832, 'grass-simple');
        this.add.image(704, 832, 'grass-simple');
        this.add.image(832, 832, 'grass-simple');
        this.add.image(960, 832, 'grass-simple');
        this.add.image(1088, 832, 'grass-simple');
        this.add.image(1216, 832, 'grass-simple');
        this.add.image(1344, 832, 'grass-simple');
        this.add.image(1472, 832, 'grass-simple');
        this.add.image(1600, 832, 'grass-simple');
        this.add.image(1728, 832, 'grass-simple');
        this.add.image(1856, 832, 'grass-simple');
        this.add.image(1984, 832, 'grass-simple');
        
        /*8eme Ligne*/
        this.add.image(64, 960, 'grass-simple');
        this.add.image(192, 960, 'grass-simple');
        this.add.image(320, 960, 'grass-simple');
        this.add.image(448, 960, 'grass-simple');
        this.add.image(576, 960, 'grass-simple');
        this.add.image(704, 960, 'grass-simple');
        this.add.image(832, 960, 'grass-simple');
        this.add.image(960, 960, 'grass-simple');
        this.add.image(1088, 960, 'grass-simple');
        this.add.image(1216, 960, 'grass-simple');
        this.add.image(1344, 960, 'grass-simple');
        this.add.image(1472, 960, 'grass-simple');
        this.add.image(1600, 960, 'grass-simple');
        this.add.image(1728, 960, 'grass-simple');
        this.add.image(1856, 960, 'grass-simple');
        this.add.image(1984, 960, 'grass-simple');
        
        /*9eme Ligne*/
        this.add.image(64, 1088, 'grass-tree');
        this.add.image(192, 1088, 'grass-tree');
        this.add.image(320, 1088, 'grass-tree');
        this.add.image(448, 1088, 'grass-tree');
        this.add.image(576, 1088, 'grass-tree');
        this.add.image(704, 1088, 'grass-tree');
        this.add.image(832, 1088, 'grass-tree');
        this.add.image(960, 1088, 'grass-tree');
        this.add.image(1088, 1088, 'grass-tree');
        this.add.image(1216, 1088, 'grass-tree');
        this.add.image(1344, 1088, 'grass-tree');
        this.add.image(1472, 1088, 'grass-tree');
        this.add.image(1600, 1088, 'grass-tree');
        this.add.image(1728, 1088, 'grass-tree');
        this.add.image(1856, 1088, 'grass-tree');
        this.add.image(1984, 1088, 'grass-tree');
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


            }
         if (Phaser.Geom.Intersects.RectangleToRectangle(this.banana.getBounds(), this.grassTree.getBounds())) {
            console.log('Touché !!');
        }    
    }
}
