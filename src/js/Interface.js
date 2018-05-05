export default class Interface {

    constructor(partie, scene) {
        this.partie = partie;
        this.scene = scene;
    }

    afficherInterface() {
        if (this.partie.joueurEstEnVie() === true) {
            this.scene.add.image(this.scene.sys.canvas.width - 100, this.scene.sys.canvas.height - 100, 'heart').setScale(0.3);
        }
        this.scene.add.text(
            this.scene.sys.canvas.width - 110,
            this.scene.sys.canvas.height - 120,
            this.partie.vieDuJoueur(),
            {
                font: "32px Arial",
                fill: "#ffffff",
                align: "center",
                backgroundColor: "#ffffff00"
            }
        );

        if (this.partie.score() > 0){

        }

        if (this.partie.peutAttaquerLanceBananes === true) {

        }
        if (this.partie.peutAttaquerLanceBananes === true) {

        }
        if (this.partie.peutAttaquerCorpsACorps === true) {

        }
    }
}
