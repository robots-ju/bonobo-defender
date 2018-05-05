export default class Partie {
    constructor() {
        this.vie = 8;
        this.attaqueCorpsACorpsPossible = true;
        this.attaqueLanceBananesPossible = true;
        this.prochaineVague = true;
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

    prochaineVaguePrete() {
        return this.prochaineVague;
    }

    aLanceVague() {
        this.prochaineVague = false;

        setTimeout(() => {
            this.prochaineVague = true;
        }, 1000);
    }

    aTueBucheron() {
        // TODO: ne fait rien pour l'instant

}


    aTueChasseur() {
        // TODO: ne fait rien pour l'instant

    }
}
