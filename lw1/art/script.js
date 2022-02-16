var canvas;

main();

function main() {
    init();
    draw();
    setInterval(() => {
      draw();
    }, 120);
}

function init() {
    const sourceCanvas = document.getElementById('canvas');
    sourceCanvas.width = document.body.clientWidth;
    sourceCanvas.height = document.documentElement.clientHeight;
    canvas = document.getElementById('canvas').getContext('2d');
}

function draw() {
    drawSpace();
    drawStars(100);
    drawSpaceship();
}

function drawSpace() {
    canvas.beginPath();
    canvas.fillStyle = "r: 0, g: 0, b: 0";
    canvas.fillRect(0, 0, document.body.clientWidth, document.body.clientHeight);
    canvas.stroke();
}

function drawStars(count) {
    for (var i = 0; i < count; ++i) {
        const randomX = getRandomX();
        const randomY = getRandomY();

        canvas.beginPath();
        canvas.arc(randomX, randomY, 1, 0, 2 * Math.PI);
        canvas.strokeStyle = "#FFF";
        canvas.stroke();
    }
}

function drawSpaceship() {
    canvas.save()
    canvas.fillStyle = "white";
    canvas.rotate(120);
    canvas.fillRect(500, 0, 100, 150);
    canvas.restore();

    drawCapsule();
    drawPorthole();
    drawFire();
}

function drawCapsule() {
    canvas.save();
    canvas.rotate(120);
    canvas.beginPath();
    canvas.arc(550, 1, 49.5, Math.PI, 0);
    canvas.fillStyle = "#FFF";
    canvas.fill();
    canvas.stroke();
    canvas.restore();
}

function drawPorthole() {
    canvas.save();
    canvas.rotate(120);
    canvas.beginPath();
    canvas.strokeStyle = "blue";
    canvas.arc(550, 0, 15, 2 * Math.PI, 0);
    canvas.fillStyle = "blue";
    canvas.fill();
    canvas.stroke();
    canvas.restore();
}

function drawFire() {
    canvas.save();
    canvas.rotate(120);
    canvas.beginPath();
    canvas.strokeStyle = "orange";
    canvas.fillStyle = "orange";
    canvas.moveTo(500, 150);
    canvas.lineTo(510, 250);
    canvas.lineTo(525, 200);
    canvas.lineTo(535, 300);
    canvas.lineTo(550, 210);
    canvas.lineTo(560, 270);
    canvas.lineTo(575, 180);
    canvas.lineTo(590, 230);
    canvas.lineTo(600, 150);
    canvas.lineTo(500, 150);
    canvas.fill();
    canvas.stroke();
    canvas.restore();

    drawFireInsides();
}

function drawFireInsides() {
    canvas.save();
    canvas.rotate(120);
    canvas.beginPath();
    canvas.strokeStyle = "yellow";
    canvas.fillStyle = "yellow";
    canvas.moveTo(505, 150);
    canvas.lineTo(510, 230);
    canvas.lineTo(525, 190);
    canvas.lineTo(537, 270);
    canvas.lineTo(545, 210);
    canvas.lineTo(561, 250);
    canvas.lineTo(570, 170);
    canvas.lineTo(590, 210);
    canvas.lineTo(590, 150);
    canvas.lineTo(505, 150);
    canvas.fill();
    canvas.stroke();
    canvas.restore();
}

function getRandomX() {
    return Math.random() * document.body.clientWidth;
}

function getRandomY() {
    return Math.random() * document.documentElement.clientHeight;
}