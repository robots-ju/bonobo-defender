import Enemy from './Enemy';

export default class Chasseur extends Enemy {
    constructor(scene) {
        // TODO: changer image
        super(scene, 'chasseur').setScale(0.125);
    }
}
