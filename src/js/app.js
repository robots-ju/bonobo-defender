import Phaser from 'phaser';
import Scene from './Scene';

const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 2048,
    height: 1152,
    physics: {
        default: 'arcade',
    },
    scene: [
        new Scene(),
    ],
});
