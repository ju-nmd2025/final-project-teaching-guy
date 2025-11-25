import character from "\\wsl.localhostUbuntu-22.04/home/linus/final-project-teaching-guy/character.js";

function setup() {
    createCanvas(400, 400);
}



let platform = {
    x: 250,
    y: 250,
    w: 80,
    h: 20,

    draw() {
		push();
        fill("blue");
        rect(this.x, this.y, this.w, this.h);
		pop();
    },
};

// Obstacle / Spike / Death
function drawObstacle() {
    push();
    fill("red");
    triangle(180, 300, 210, 240, 240, 300);
    pop();
}

function draw() {
    background(100, 100, 100);

    character.draw();
	platform.draw();

    // Floor
    line(0, 300, 400, 300);
}
