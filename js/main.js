class Point {
    constructor() {
        this.x = 123;
        this.y = 234;
    }
}

class Point3D extends Point {

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