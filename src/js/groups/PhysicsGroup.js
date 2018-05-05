import Phaser from 'phaser';

export default class PhysicsGroup extends Phaser.GameObjects.Group {
    constructor(scene) {
        super(scene, []);
    }

    addPhysics(object) {
        this.add(object, true);

        this.scene.physics.world.enableBody(object, /*CONST.DYNAMIC_BODY*/ 0);
    }
}
