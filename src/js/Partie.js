import Bucheron from './sprites/Bucheron';
import Chasseur from './sprites/Chasseur';

export default class Partie {
    constructor() {
        this.vie = 8;
        this.attaqueCorpsACorpsPossible = true;
        this.attaqueLanceBananesPossible = true;
        this.prochaineVague = true;
        this.bananelance = 0;
    }

    joueurEstEnVie() {
        return this.vie > 0;
    }

    vieDuJoueur() {
        return this.vie;
    }

    peutAttaquerCorpsACorps() {
        return this.attaqueCorpsACorpsPossible;
    }

    peutAttaquerLanceBananes() {
        return this.attaqueLanceBananesPossible;
    }

    recuCoupCorps() {
        this.vieDuJoueur -= 2;
    }

    recuCoupProjectile() {
        this.vieDuJoueur -= 1;
    }

    aUtiliseCorpsACorps() {
        // TODO: appliquer cooldown
        this.attaqueCorpsACorpsPossible = false;
        window.setTimeout(() => {
            this.attaqueCorpsACorpsPossible = true;
        }, 1000);

    }

    aUtiliseLanceBananes() {
        // TODO: appliquer cooldown
        this.attaqueLanceBananesPossible = false;
        window.setTimeout(() => {
            this.attaqueLanceBananesPossible = true;
        }, 300);
        this.bananelance += 1;
    }

    prochaineVaguePrete() {
        return this.prochaineVague;
    }

    aLanceVague() {
        this.prochaineVague = false;

        setTimeout(() => {
            this.prochaineVague = true;
        }, 10000);
    }

    getScore() {
        return 0;
    }

    bananeCharged() {
        if (this.bananelance === 10) {
            return true;
        }else {
            return false;
        }
        
    }

    aTueEnemy(enemy, projectile) {
        if (enemy instanceof Bucheron) {
            console.log('bucheron');
        } else if (enemy instanceof Chasseur) {
            console.log('chasseur');
        }

        console.log(projectile.charged ? 'charged' : 'not charged');
    }
}
