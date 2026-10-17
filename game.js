const ROOM = {
    width: 400,
    height: 300,
    depth: 1000,
    focalLength: 500,
    eyeHeight: 0
};

class Menu extends Phaser.Scene {
    constructor() {
        super('menu');
    }

    preload() {

    }

    create() {

    }

    update() {

    }
}

class Level1 extends Phaser.Scene {
    constructor() {
        super('level1');
    }

    preload() {

    }

    create() {
        this.add.text(100, 100, 'Hi');
    }

    update() {

    }
}

class Level2 extends Phaser.Scene {
    constructor() {
        super('level2');
    }

    preload() {

    }

    create() {

    }

    update() {

    }
}

class Level3 extends Phaser.Scene {
    constructor() {
        super('level3');
    }

    preload() {

    }

    create() {

    }

    update() {

    }
}

class Victory extends Phaser.Scene {
    constructor() {
        super('victory');
    }

    preload() {

    }

    create() {

    }

    update() {

    }
}

const game = new Phaser.Game({
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 0
            },
            debug: true
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1280,
        height: 720,
    },
    backgroundColor: '#e399f8',
    scene: [Level1],
    title: '2.5D Shooter Game'
});