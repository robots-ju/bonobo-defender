import Phaser from 'phaser';

export default class EnemySquad extends Phaser.GameObjects.Group {
    constructor(scene) {
        super(scene, []);
    }

    addPhysics(object) {
        this.add(object, true);

        this.scene.physics.world.enableBody(object, /*CONST.DYNAMIC_BODY*/ 0);
    }

    sceneUpdate(bonobo, partie) {
        this.getChildren().forEach(enemy => {
            if (Phaser.Geom.Intersects.RectangleToRectangle(bonobo.getBounds(), enemy.getBounds())) {
                this.remove(enemy, true, true);

                partie.aTueEnemy();

                return;
            }

            enemy.dirigeVers(bonobo);
        });
    }
}
