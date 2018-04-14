let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background', 'img/herbe.png');

   /* this.load.image('ground', 'src/games/firstgame/assets/platform.png');
    this.load.image('star', 'src/games/firstgame/assets/star.png');
    this.load.image('bomb', 'src/games/firstgame/assets/bomb.png');
    this.load.spritesheet('dude',
        'src/games/firstgame/assets/dude.png',
        { frameWidth: 32, frameHeight: 48 }
    );*/
}this.bg= this.game.add.tileSprite(0, 0, game.stage.bounds.width, game.cache.getImage('background').height, 'background');
// Display the bird on the screen

function create () {
    //this.add.image(400, 300, 'background');
    this.bg= this.game.add.tileSprite(0, 0, game.stage.bounds.width, game.cache.getImage('background').height, 'background');
}
0, 300, 'background');
}

function update ()
{
}

