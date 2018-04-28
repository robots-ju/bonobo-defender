import Phaser from 'phaser';

export default class Enemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, key) {
        const x = Math.floor(Math.random() * scene.sys.game.config.width);
        const y = Math.floor(Math.random() * scene.sys.game.config.height);

        super(scene, x, y, key);

        this.setDepth(80);
    }

    dirigeVers(cible) {
        const ENEMY_SPEED = 200;
        const MIN_DISTANCE = 50;

        const distanceX = cible.x - this.x;

        if (Math.abs(distanceX) < MIN_DISTANCE) {
            this.setVelocityX(distanceX / MIN_DISTANCE * ENEMY_SPEED);
        } else if (distanceX > 0) {
            this.setVelocityX(ENEMY_SPEED);
        } else {
            this.setVelocityX(-ENEMY_SPEED);
        }

        const distanceY = cible.y - this.y;

        if (Math.abs(distanceY) < MIN_DISTANCE) {
            this.setVelocityY(distanceY / MIN_DISTANCE * ENEMY_SPEED);
        } else if (distanceY > 0) {
            this.setVelocityY(ENEMY_SPEED);
        } else {
            this.setVelocityY(-ENEMY_SPEED);
        }
    }
}
