import Phaser from 'phaser';

// Éléments disponibles pour leur terrain et probabilité d'apparition
const ELEMENTS_TERRAIN = {
    'grass-simple': 9,
    'grass-puddle-medium': 1,
    'grass-bush-small': 1,
    'grass-bush-medium': 1,
    'grass-stone-small': 1,
    'grass-stone-medium': 1,
};

export default class Environnement extends Phaser.GameObjects.Group {
    constructor(scene) {
        super(scene, []);

        let elementsPossibles = [];

        Object.keys(ELEMENTS_TERRAIN).map(key => {
            for (let i = 0; i < ELEMENTS_TERRAIN[key]; i++) {
                elementsPossibles.push(key);
            }
        });

        for (let x = 64; x < scene.sys.game.config.width; x += 128) {
            for (let y = 64; y < 960; y += 128) {
                const imageKey = elementsPossibles[Math.floor(Math.random() * elementsPossibles.length)];
                this.add(new Phaser.GameObjects.Image(scene, x, y, imageKey), true);
            }

            this.add(new Phaser.GameObjects.Image(scene, x, 960, 'grass-simple'), true);
            this.add(new Phaser.GameObjects.Image(scene, x, 1088, 'grass-tree'), true);
            this.add(new Phaser.GameObjects.Image(scene, x, 1024, 'tree'), true);
        }
    }
}
