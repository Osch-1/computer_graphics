export default class Canvas {
    #context;

    constructor(context) {
        this.#context = context;
    }

    drawShape(shape) {
        const shapeType = shape.getType();

        switch (shapeType) {
            case 'rectangle':
                this.#context.fillRect(shape.getX(), shape.getY(), shape.getWidth(), shape.getHeight());
                break;
            case 'composite':
                shape.getShapes().forEach(shape => {
                    this.drawShape(shape);
                });
                break;
            default:
                throw new Error(`Unsupported shape type ${shape.type}`);
        }
    }

    getContext() {
        return this.#context;
    }
}