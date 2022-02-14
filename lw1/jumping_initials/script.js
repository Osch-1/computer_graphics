import Gliff from './domain/gliff.js';

const textParts = ['Г', 'Д', 'А'];

var canvasContext;
const gliff = new Gliff('Г', 100, 100);

main();

function main() {
    init();

    window.requestAnimationFrame(draw);
}

function draw() {
    canvasContext.clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    gliff.Draw(canvasContext);

    window.requestAnimationFrame(draw);
}

function init() {
    setupCanvasAndContext();
}

function setupCanvasAndContext() {
    const canvas = document.getElementById('canvas');
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    canvasContext = canvas.getContext('2d');
    canvasContext.font = '48px serif';
}
