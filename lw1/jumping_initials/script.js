var canvasContext;

function main()
{
    init();
    canvasContext.fillRect(10,10,100,100);
}

function init()
{
    canvas = document.getElementById("canvas");
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;

    canvasContext = canvas.getContext("2d");
}