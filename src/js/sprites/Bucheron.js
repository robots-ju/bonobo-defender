import Enemy from './Enemy';

export default class Bucheron extends Enemy {
    constructor(scene) {
        // TODO: changer image
        super(scene, 'bucheron').setScale(0.125);
    }
}
