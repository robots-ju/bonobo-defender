import Phaser from 'phaser';

export default class Banane extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, charged = false) {
        super(scene, 0, 0, 'banana' + (charged ? '_charged' : ''));

        this.charged = charged;
        this.setDepth(130);
    }
}
