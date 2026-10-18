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

class Base extends Phaser.Scene {
    constructor(key) {
        super(key);
    }

    preload() {

    }

    create() {
        this.graphics = this.add.graphics();

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
        this.drawPlane(this.graphics, 0x7a2f6e, this.floorCoords);

        //draw back wall
       this.drawPlane(this.graphics, 0xf6bff0, this.backWallCoords);

        //Create and store 2d points of ceiling
        this.ceilingCoords = [];
        this.ceilingCoords.push(this.backWallCoords[0]); // bottom left = top left of back wall
        this.ceilingCoords.push(this.backWallCoords[1]); // bottom right = top right of back wall
        this.ceilingCoords.push(project(ROOM.width / 2, ROOM.height / 2, ROOM.nearZ, this.camX)); // top right 
        this.ceilingCoords.push(project(0 - ROOM.width / 2, ROOM.height / 2, ROOM.nearZ, this.camX)); // top left

        //draw ceiling
        this.drawPlane(this.graphics, 0xd98acb, this.ceilingCoords);

        //Create and store 2d points of left wall
        this.leftWallCoords = [];
        this.leftWallCoords.push(this.backWallCoords[0]); // top right = top left of back wall
        this.leftWallCoords.push(this.backWallCoords[3]); // bottom right = bottom left of back wall
        this.leftWallCoords.push(project(0 - ROOM.width / 2, 0 - ROOM.height / 2, ROOM.nearZ, this.camX)); // bottom left
        this.leftWallCoords.push(project(0 - ROOM.width/ 2, ROOM.height / 2, ROOM.nearZ, this.camX)); // top left

        //draw left wall
        this.drawPlane(this.graphics, 0xb553a7, this.leftWallCoords);

        //Create and store 2d points of right wall
        this.rightWallCoords = [];
        this.rightWallCoords.push(this.backWallCoords[1]); // top left = top right of back wall
        this.rightWallCoords.push(this.backWallCoords[2]); // bottom left = bottom right of back wall
        this.rightWallCoords.push(project(ROOM.width / 2, 0 - ROOM.height / 2, ROOM.nearZ, this.camX)); // bottom right
        this.rightWallCoords.push(project(ROOM.width / 2, ROOM.height / 2, ROOM.nearZ, this.camX)); // top right

        //draw right wall
        this.drawPlane(this.graphics, 0xa8479a, this.rightWallCoords);
    }

    update() {

    }

    drawPlane(graphics, color, ptsList) {
        graphics.fillStyle(color);
        graphics.fillPoints(ptsList, true);
    }
}

class Level1 extends Base {
    constructor() {
        super('level1');
    }

    preload() {

    }

    create() {
        super.create();
    }

    update() {

    }
}

class Level2 extends Base {
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

class Level3 extends Base {
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