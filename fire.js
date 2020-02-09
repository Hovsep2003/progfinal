var LivingCreature = require("./LivingCreature")
module.exports = class Fire extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 20;
    }

    mul() {
        fireHashiv++
        this.life++
        var cells = this.chooseCell(0).concat(this.chooseCell(1)).concat(this.chooseCell(2)).concat(this.chooseCell(3));
        var rand = Math.floor(Math.random() * cells.length)
        var newCell = cells[rand]
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            let fire = new Fire(x, y);
            fireArr.push(fire);
            this.energy = 0;
            for (let index = 0; index < grassArr.length; index++) {
                if (grassArr[index].x == x && grassArr[index].y == y) {
                    grassArr.splice(index, 1)
                }
            }
            for (let index = 0; index < grassEaterArr.length; index++) {
                if (grassEaterArr[index].x == x && grassEaterArr[index].y == y) {
                    grassEaterArr.splice(index, 1)
                }
            }
            for (let index = 0; index < predatorArr.length; index++) {
                if (predatorArr[index].x == x && predatorArr[index].y == y) {
                    predatorArr.splice(index, 1)
                }
            }
        }
    }
    die() {
        fireDie++
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < fireArr.length; index++) {
            if (fireArr[index].x == this.x && fireArr[index].y == this.y) {
                fireArr.splice(index, 1)
            }
        }
    }
    eat() {
        this.getNewDirections();
        var cells = this.chooseCell(1).concat(this.chooseCell(2)).concat(this.chooseCell(3));
        var rand = Math.floor(Math.random() * cells.length)
        var newCell = cells[rand]
        if (newCell) {
            this.energy += 20;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;

            for (let index = 0; index < grassArr.length; index++) {
                if (grassArr[index].x == x && grassArr[index].y == y) {
                    grassArr.splice(index, 1)
                }
            }
            for (let index = 0; index < grassEaterArr.length; index++) {
                if (grassEaterArr[index].x == x && grassEaterArr[index].y == y) {
                    grassEaterArr.splice(index, 1)
                }
            }
            for (let index = 0; index < predatorArr.length; index++) {
                if (predatorArr[index].x == x && predatorArr[index].y == y) {
                    predatorArr.splice(index, 1)
                }
            }

            if (this.energy > 60) {
                this.mul()
            }
        }
        else { this.move() }
    }
    move() {
        this.energy--;
        var cells = this.chooseCell(0).concat(this.chooseCell(1)).concat(this.chooseCell(2)).concat(this.chooseCell(3));
        var rand = Math.floor(Math.random() * cells.length)
        var newCell = cells[rand]
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
            for (let index = 0; index < grassArr.length; index++) {
                if (grassArr[index].x == x && grassArr[index].y == y) {
                    grassArr.splice(index, 1)
                }
            }
            for (let index = 0; index < grassEaterArr.length; index++) {
                if (grassEaterArr[index].x == x && grassEaterArr[index].y == y) {
                    grassEaterArr.splice(index, 1)
                }
            }
            for (let index = 0; index < predatorArr.length; index++) {
                if (predatorArr[index].x == x && predatorArr[index].y == y) {
                    predatorArr.splice(index, 1)
                }
            }
        }
        if (newCell && this.energy < 0) {
            this.die();
        }
        if (this.energy < 0) {
            this.die();
        }
    }
}