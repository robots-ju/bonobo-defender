let config = {
    type: Phaser.AUTO,
    width: 2048,
    height: 1152,
    physics: {
        default: 'arcade',
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('tree', 'img/Image_Flat/Grass/Grass_Tree.png');
    this.load.image('grass-simple', 'img/Image_Flat/Grass/Grass_Simple.png');
    this.load.image('player', 'img/Image_Flat/Personnages/Bonobo/BONOBO.png');
    this.load.image('grass-puddle-small', 'img/Image_Flat/Grass/Grass_puddle_small.png');
}

function create () {
    this.add.image(64,64,'tree');
    this.add.image(64,64,'player').setScale(0.125);
    this.add.image(192,64,'grass-simple');
    this.add.image(320,64,'grass-puddle-small')
        /*let player = game.add.sprite(32, game.world.height - 150, 'player');

    //  We need to enable physics on the player
    game.physics.arcade.enable(player);

    //  Player physics properties. Give the little guy a slight bounce.
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    //  Our two animations, walking left and right.
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);*/

}


function update ()
{
}
