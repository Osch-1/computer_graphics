import Gliff from './domain/gliff.js';

const textParts = ['Г', 'Д', 'А'];

var canvasContext;

main();

function main()
{
    init();

    var gliff = new Gliff('Г');
    gliff.Draw(canvasContext);
}

function init()
{
    setupCanvasAndContext();
}

function setupCanvasAndContext()
{
    const canvas = document.getElementById('canvas');
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    console.log(document.documentElement.clientWidth,
        document.documentElement.clientHeight);

    canvasContext = canvas.getContext('2d');
}

function printWithFormat(text, format)
{
    canvasContext.font = `${format.size}px ${format.font}`;
    canvasContext.fillText(text, format.x, format.y);
}

