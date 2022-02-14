export default class Gliff
{
    _currentX = 10;
    _currentY = 10;

    _content;

    constructor(content) {
        this._content = content;
    }

    Draw(canvas) {
        canvas.fillText(this._content, this._currentX, this._currentY);
    }
}