let config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 576,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('grass-simple', 'img/Image Flat/Grass/GrassSimple.png');


}


function create () {
    this.add.image(0,0,'grass-simple');

}


function update ()
{
}

