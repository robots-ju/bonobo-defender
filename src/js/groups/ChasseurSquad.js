import EnemySquad from './EnemySquad';
import Chasseur from '../sprites/Chasseur';

export default class ChasseurSquad extends EnemySquad {
    nouvelleVague() {
        const count = Math.floor(Math.random() * 4);

        for (let i = 0; i < count; i++) {
            this.addPhysics(new Chasseur(this.scene));
        }
    }

    sceneUpdate(scene) {
        super.sceneUpdate(scene);

        if (scene.partieEnCours.prochaineVaguePrete()) {
            this.nouvelleVague();

            scene.partieEnCours.aLanceVague();
        }
    }
}
