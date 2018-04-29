import Phaser from 'phaser';
import Partie from './Partie';
import Interface from './Interface';
import Bonobo from './sprites/Bonobo';
import ChasseurSquad from './groups/ChasseurSquad';
import Environnement from './groups/Environnement';

export default class Scene extends Phaser.Scene {
    constructor(game) {
        super();

        this.bonobo = null;
        this.cursors = null;
        this.chasseurs = null;

        this.partieEnCours = new Partie();
        this.interface = new Interface(this.partieEnCours, this);
    }

    preload() {
        this.load.image('bonobo', 'img/Image_Flat/Personnages/Bonobo/Bonobo.png');
        this.load.image('banana', 'img/Image_Flat/Personnages/Bonobo/Banana.png');
        this.load.image('banana_charged', 'img/Image_Flat/Personnages/Bonobo/ChargedBanana.png');
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
        this.load.image('heart', 'img/heart.png');
        this.load.image('bucheron', 'img/Image_Flat/Personnages/Bucheron/Bucheron.png');
        this.load.image('chasseur', 'img/Image_Flat/Personnages/Chasseur/Chasseur.png');
    }

    addPhysicsSprite(sprite) {
        this.sys.displayList.add(sprite);
        this.sys.updateList.add(sprite);

        this.physics.world.enableBody(sprite, /*CONST.DYNAMIC_BODY*/ 0);

        return sprite;
    }

    create() {
        this.cursors = this.sys.game.input.keyboard.createCursorKeys();
        this.bonobo = this.addPhysicsSprite(new Bonobo(this)).setPosition(64, 64);

        this.chasseurs = new ChasseurSquad(this);
        this.sys.updateList.add(this.chasseurs);

        this.sys.updateList.add(new Environnement(this));
    }

    update() {
        const BONOBO_SPEED_LEFT_RIGHT = 256;
        const BONOBO_SPEED_UP_DOWN = 256;

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

<<<<<<< HEAD

            if (this.cursors.space.isDown && this.peutTirer) {
            this.banana = this.physics.add.sprite(this.bonobo.x, this.bonobo.y, 'banana').setVelocityY(-512);
            this.peutTirer = false;
            /*if (Phaser.Geom.Intersects.RectangleToRectangle(this.banana.getBounds(), this.grassTree.getBounds())) {
                console.log('Touché !!');*/
            window.setTimeout( () => {
                this.peutTirer = true;
              }, 1000);



         }
        
    }    
}
=======
        if (this.cursors.space.isDown && this.partieEnCours.peutAttaquerLanceBananes()) {
            this.banana = this.physics.add.sprite(this.bonobo.x, this.bonobo.y, 'banana').setVelocityY(-512);
            this.partieEnCours.aUtiliseLanceBananes();
        }

        this.chasseurs.sceneUpdate(this.bonobo, this.partieEnCours);
        this.interface.afficherInterface();
    }
}

>>>>>>> c48c58483d430c35a943c77cc0e925e1c626977a
