const ROOM = {
    width: 400,
    height: 300,
    depth: 1000,
    focalLength: 500,
    eyeHeight: 0
};

const CENTER = {x: 640, y: 360};

/**
 * Turns a 3d world point into a 2d screen point
 * @param {number} worldX world x value
 * @param {number} worldY world y value
 * @param {number} worldZ world z value
 * @param {number} camX camera's x value
 */
function project(worldX, worldY, worldZ, camX) {
    if (worldZ <= 0) {
        return null;
    }

    //Calculates how much an item shrinks at a certain distance
    let screenScale = ROOM.focalLength / worldZ;

    let screenX = CENTER.x + (worldX - camX) * screenScale;
    let screenY = CENTER.y - (worldY - ROOM.eyeHeight) * screenScale;

    return {x: screenX, y: screenY, scale: screenScale}
}

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