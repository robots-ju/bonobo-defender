import Phaser from 'phaser';

export default class Bonobo extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        super(scene, 0, 0, 'bonobo');

        this.setScale(0.125);
        this.setDepth(100);
    }
}
