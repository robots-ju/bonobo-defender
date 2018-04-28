export default class Partie {
    constructor() {
        this.vie = 8;
        this.attaqueCorpsACorpsPossible = true;
        this.attaqueLanceBananesPossible = true;
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
        this.vie -= 2;
    }

    recuCoupProjectile() {
        this.vie -= 1;
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
        }, 1000);
    }
}
