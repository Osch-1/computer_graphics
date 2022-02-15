export default class Composite {
    #shapes;
    #type;

    constructor(shapes) {
        this.#shapes = shapes;
        this.#type = 'composite';
    }

    getX() {
        return this.#shapes.map(s => s.getX()).min();
    }

    setX(x) {
        const diff = x - this.getX();

        this.#shapes.forEach(shape => {
            const newX = shape.getX() + diff;
            shape.setX(newX);
        });
    }

    getY() {
        return this.#shapes.map(s => s.getY()).min();
    }

    setY(y) {
        const diff = y - this.getY();
        this.#shapes.forEach(shape => {
            const newY = shape.getY() + diff;
            shape.setY(newY);
        });
    }

    getType() {
        return this.#type;
    }

    addShape(shape) {
        this.#shapes.push(shape);
    }

    addShapes(shapes) {
        this.#shapes.push(shapes);
    }

    getShapes() {
        return this.#shapes;
    }
}

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};