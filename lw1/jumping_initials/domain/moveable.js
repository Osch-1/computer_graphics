export default class MoveableShapeAdapter {
    #shape;
    #ySpeed;

    #minY;
    #maxY;

    #direction;

    constructor(
        shape,
        ySpeed,
        minY,
        maxY
    ) {
        this.#shape = shape;
        this.#ySpeed = ySpeed;
        this.#minY = minY;
        this.#maxY = maxY;

        this.#direction = 'bottom';

        console.log(this);
    }

    //move and change state
    move(canvas) {
        canvas.drawShape(this.#shape);
        this.#changeShapeY();
    }

    #changeShapeY() {
        var currentY = this.#shape.getY();
        if (currentY <= this.#minY) {
            this.#ySpeed *= -1;
        }

        if (currentY >= this.#maxY) {
            this.#ySpeed *= -1;
        }

        this.#shape.setY(currentY + this.#ySpeed);
    }
}