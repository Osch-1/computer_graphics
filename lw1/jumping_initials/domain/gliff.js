export default class Gliff {
    _counter = 0;

    _currentX = 20;
    _currentY = 20;

    _content;

    constructor(content, x, y) {
        this._content = content;
        this._currentX = x;
        this._currentY = y;
    }

    Draw(canvas) {
        this.printWithFormat(canvas)
        this._counter++;
    }

    printWithFormat(canvas) {
        canvas.fillText(this._content, this._currentX, this._currentY);
        this._currentY += 1;
    }
}