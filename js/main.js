class Point {
    constructor() {
        this.x = 123;
        this.y = 234;
    }
}

class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z;
    }

    setX(x) {
        this.x = x;
    }

    getX() {
        return this.x;
    }
    setY(y) {
        this.y = y;
    }

    getY() {
        return this.y;
    }
}

let point1 = {
    x: 123,
    y: 234
}

console.log(point1);

let point2 = new Point();
console.log(point2);

let point3 = new Point3D(12, 23);
console.log(point3);