import { Platform } from "platform";
import { Character } from "./character";

function setup() {
    createCanvas(canvasWidth, canvasHeight);
}

// Obstacle / Spike / Death
function drawObstacle() {
    push();
    fill("red");
    triangle(180, 300, 210, 240, 240, 300);
    pop();
}

let canvasWidth = 400;
let canvasHeight = 400;
let floor = 300;
let character = new Character(50, 50, 50, 50);
let platform = new Platform(200, 200, 100, 100);

let platforms = [
    new Platform(200, 200, 100, 100),
    new Platform(400, 200, 100, 100),
];

function draw() {
    background(100, 100, 100);

    character.draw();

    for (const platform of platforms) {
        platform.draw();
        platform.x -= 10;

        if (platform.x + platform.w < 0) {
            platform.x = 500;
        }
    }

    

    if (
        character.y + character.h < 300 &&
        !character.isColliding(character, platform)
    ) {
        character.y += 10;
    }

    // Floor
    line(0, floor, canvasWidth, floor);
}

function keyPressed() {
    if (
        character.y + character.h === floor ||
        character.isColliding(character, platform)
    ) {
        character.y -= 120;
    }
}
