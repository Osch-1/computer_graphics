export default class Shape {
    #x;
    #y;
    #width;
    #height;
    #type;

    constructor(
        x,
        y,
        width,
        height,
        type
    ) {
        this.#x = x;
        this.#y = y;
        this.#width = width;
        this.#height = height;
        this.#type = type;
    }

    getX() {
        return this.#x;
    }

    setX(x) {
        if (x)
            this.#x = x;
    }

    getY() {
        return this.#y;
    }

    setY(y) {
        if (y)
            this.#y = y;
    }

    getWidth() {
        return this.#width;
    }

    getHeight() {
        return this.#height;
    }

    getType() {
        return this.#type;
    }
}