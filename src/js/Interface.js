export default class Interface {

    constructor(partie,scene){
        this.partie = partie;
        this.scene = scene;
    }

    afficherInterface(){
        if(this.partie.joueurEstEnVie() === true) {
            this.scene.add.image(this.scene.sys.canvas.width-100,this.scene.sys.canvas.height-100,'heart').setScale(0.3);
        }
    }
}
