import Composite from './domain/shapes/composite.js';
import Shape from './domain/shapes/shape.js';
import Canvas from './domain/canvas.js';
import MoveableShapeAdapter from './domain/moveable.js';

const MIN_Y = 99;
const MAX_Y = 700;

var _canvas;
var _moveables = [];

main();

function main() {
    init();

    const moveableGLiteral = buildMoveableGLiteral(4);
    const moveableDLiteral = buildMoveableDLiteral(2);
    const moveableALiteral = buildMoveableALiteral(3);
    _moveables.push(moveableGLiteral, moveableDLiteral, moveableALiteral);

    setInterval(() => {
        _canvas.getContext().fillStyle = getRandomColor();
    }, 300);

    window.requestAnimationFrame(draw);
}

function init() {
    setupCanvasAndContext();
}

function draw() {
    _canvas.getContext().clearRect(0, 0, document.documentElement.clientWidth, document.documentElement.clientHeight);
    _moveables.forEach(m => {
        m.move(_canvas);
    });

    window.requestAnimationFrame(draw);
}

function setupCanvasAndContext() {
    const canvas = document.getElementById('canvas');
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    _canvas = new Canvas(canvas.getContext('2d'));
}

function buildMoveableGLiteral(ySpeed) {
    const topRect = new Shape(100, 100, 70, 10, 'rectangle');
    const leftRect = new Shape(100, 100, 10, 90, 'rectangle');

    const g = new Composite([topRect, leftRect]);

    const moveableG = new MoveableShapeAdapter(g, ySpeed, MIN_Y - 50, MAX_Y - 200);

    return moveableG;
}

function buildMoveableDLiteral(ySpeed) {
    const topRect = new Shape(190, 100, 50, 10, 'rectangle');
    const leftRect = new Shape(190, 100, 10, 70, 'rectangle');
    const rightRect = new Shape(240, 100, 10, 70, 'rectangle');
    const bottomRect = new Shape(180, 170, 80, 10, 'rectangle');
    const leftSerif = new Shape(180, 180, 10, 10, 'rectangle');
    const rightSerif = new Shape(250, 180, 10, 10, 'rectangle');

    const d = new Composite([topRect, leftRect, rightRect, bottomRect, leftSerif, rightSerif]);

    const moveableG = new MoveableShapeAdapter(d, ySpeed, MIN_Y - 90, MAX_Y + 100);

    return moveableG;
}

function buildMoveableALiteral(ySpeed) {
    const topRect = new Shape(280, 100, 50, 10, 'rectangle');
    const leftRect = new Shape(280, 100, 10, 90, 'rectangle');
    const rightRect = new Shape(330, 100, 10, 90, 'rectangle');
    const bottomRect = new Shape(280, 145, 50, 10, 'rectangle');

    const d = new Composite([topRect, leftRect, rightRect, bottomRect]);

    const moveableG = new MoveableShapeAdapter(d, ySpeed, MIN_Y - 20, MAX_Y + 69);

    return moveableG;
}

function getRandomColor() {
    var r = 255 * Math.random(),
        g = 255 * Math.random(),
        b = 255 * Math.random();
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}