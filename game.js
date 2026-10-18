const ROOM = {
    width: 400,
    height: 300,
    depth: 1000,
    focalLength: 500,
    eyeHeight: 0,
    nearZ: 0.1 //z value of floor points closest to player POV
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

        this.camX = 0;

        //Create and store 2d points of back wall
        this.backWallCoords = [];
        this.backWallCoords.push(project(0 - ROOM.width / 2, ROOM.height / 2, ROOM.depth, this.camX)); //top left
        this.backWallCoords.push(project(ROOM.width / 2, ROOM.height / 2, ROOM.depth, this.camX)); // top right
        this.backWallCoords.push(project(ROOM.width / 2, 0 - ROOM.height / 2, ROOM.depth, this.camX)); //bottom right
        this.backWallCoords.push(project(0 - ROOM.width / 2, 0 - ROOM.height / 2, ROOM.depth, this.camX)); // bottom left

        //Create and store 2d points of floor
        this.floorCoords = [];
        this.floorCoords.push(this.backWallCoords[3]); // top left = bottom left of back wall
        this.floorCoords.push(this.backWallCoords[2]); // top right = bottom right of back wall
        this.floorCoords.push(project(ROOM.width / 2, 0 - ROOM.height / 2, ROOM.nearZ, this.camX)); // bottom right
        this.floorCoords.push(project(0 - ROOM.width / 2, 0 - ROOM.height / 2, ROOM.nearZ, this.camX)); // bottom left

        //draw floor
        this.graphics.fillStyle(0xcc49f0);
        this.floorPts = this.graphics.fillPoints(this.floorCoords, true);

        //draw back wall
        this.graphics.fillStyle(0xffffff);
        for (let i = 0; i < 4; i++) {
                this.backWallPts = this.graphics.fillCircle(this.backWallCoords[i].x, this.backWallCoords[i].y, 1);
        }
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