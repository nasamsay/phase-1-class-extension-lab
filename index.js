// Your code here

class Polygon {
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        const param =  this.arr.reduce((reducer, current) => reducer + current )
        return param
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3 && this.arr[0]+this.arr[1]> this.arr[2] && this.arr[1]+this.arr[2]> this.arr[0] && this.arr[0]+this.arr[2] > this.arr[1]) {
            return true
        }
        else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4 && this.arr[0]===this.arr[1] && this.arr[1]== this.arr[2] && this.arr[2]===this.arr[3]) {
            return true
        }
        else {
            return false
        }
    }
    get area() {
        return this.arr[0]*this.arr[0]
    }
}