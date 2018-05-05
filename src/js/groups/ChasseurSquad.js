import EnemySquad from './EnemySquad';
import Chasseur from '../sprites/Chasseur';

export default class ChasseurSquad extends EnemySquad {
    nouvelleVague() {
        const count = Math.floor(Math.random() * 2);

        for (let i = 0; i < count; i++) {
            this.addPhysics(new Chasseur(this.scene));
        }
    }

    sceneUpdate(bonobo, partie) {
        super.sceneUpdate(bonobo, partie);

        if (partie.prochaineVaguePrete()) {
            this.nouvelleVague();

            partie.aLanceVague();
        }
    }
}
