var LivingCreature = require("./LivingCreature")
module.exports = class Water extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.life = 0;
    }

    mul() {
        waterHashiv++
        this.life++;
        var cells = this.chooseCell(0);
        var rand = Math.floor(Math.random() * cells.length)
        var newCell = cells[rand]
        if (newCell && this.life > 10) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
            let water = new Water(x, y);
            waterArr.push(water);
            this.life = 0;
        }
    }
    eat() {
        
        this.getNewDirections();
        var cells = this.chooseCell(1).concat(this.chooseCell(2)).concat(this.chooseCell(3)).concat(this.chooseCell(5));
        var rand = Math.floor(Math.random() * cells.length)
        var newCell = cells[rand]
        if (newCell) {
            this.energy += 20;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 4;
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
            } for (let index = 0; index < fireArr.length; index++) {
                if (fireArr[index].x == x && fireArr[index].y == y) {
                    fireArr.splice(index, 1)
                }
            }
            if (this.energy > 60) {
                this.mul()
            }
        }
    }
}