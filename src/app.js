let config = {
    type: Phaser.AUTO,
    width: 2048,
    height: 1152,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let cursors = game.input.keyboard.createCursorKeys();
let bonobo;

function preload ()
{
    this.load.image('bonobo', 'img/Image_Flat/Personnages/Bonobo/Bonobo.png');
    this.load.image('three', 'img/Image_Flat/Grass/Grass_Tree.png');
    this.load.image('grass-simple', 'img/Image_Flat/Grass/Grass_Simple.png');
    this.load.image('grass-puddle-small', 'img/Image_Flat/Grass/Grass_puddle_small.png');
    this.load.image('grass-puddle-medium', 'img/Image_Flat/Grass/Grass_puddle_medium.png');
    this.load.image('grass-puddle-large', 'img/Image_Flat/Grass/Grass_puddle_large.png');
    this.load.image('grass-bush-medium', 'img/Image_Flat/Grass/Grass_bush_medium.png');
    this.load.image('grass-bush-small', 'img/Image_Flat/Grass/Grass_bush_small.png');
    this.load.image('grass-bush-large', 'img/Image_Flat/Grass/Grass_bush_large.png');
    this.load.image('grass-stone-large', 'img/Image_Flat/Grass/Grass_stone_large.png');
    this.load.image('grass-stone-medium', 'img/Image_Flat/Grass/Grass_stone_medium.png');
    this.load.image('grass-stone-small', 'img/Image_Flat/Grass/Grass_stone_small.png');

}

function create () {

    this.add.image(64,64,'three');
    this.add.image(192,64,'grass-simple');
    this.add.image(320,64,'grass-puddle-small');
    bonobo = this.add.sprite(64, 64, 'bonobo').setScale(0.125);
    /*game.physics.arcade.enable(bonobo);*/



}


function update (){
    let cursors = game.input.keyboard.createCursorKeys();

    if (cursors.left.isDown){
        bonobo.setPosition(64,0,0,0)
    }

    else if (cursors.right.isDown){
        bonobo.setPosition(-64,0,0,0);
    }

    else {
        bonobo.setVelocityX(0);
    }
    if (cursors.up.isDown && bonobo.body.touching.down) {
        bonobo.setVelocityY(-330);
    }
}



