var LivingCreature = require("./LivingCreature")
module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = 30;
    }
    mul() {
        grassEaterHashiv++;
        var cells = this.chooseCell(0);
        var rand = Math.floor(Math.random() * cells.length)
        var newCell = cells[rand]
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 2;
            let grassEater = new GrassEater(x, y);
            grassEaterArr.push(grassEater);
            this.energy = 0;
        }
    }
    die() {
        grassEaterDie++
        matrix[this.y][this.x] = 0;
        for (let index = 0; index < grassEaterArr.length; index++) {
            if (grassEaterArr[index].x == this.x && grassEaterArr[index].y == this.y) {
                grassEaterArr.splice(index, 1)
            }
        }
    }
    eat() {
        // this.getNewDirections();
        var cells = this.chooseCell(1);
        var rand = Math.floor(Math.random() * cells.length)
        var newCell = cells[rand];
        
        
        if (newCell) {
            this.energy += 5;
            let x = newCell[0];
            let y = newCell[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;

            for (let index = 0; index < grassArr.length; index++) {
                if (grassArr[index].x == x && grassArr[index].y == y) {
                    grassArr.splice(index, 1)
                }
            }

            if (this.energy > 60) {
                this.mul()
            }
        }
        else { 
            this.move() 
        }
    }

    move() {
        this.energy--;
        var cells = this.chooseCell(0);
        var rand = Math.floor(Math.random() * cells.length)
        var newCell = cells[rand];

        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.y = y;
            this.x = x;
        }
        if (newCell && this.energy < 0) {
            this.die();
        }
        if (this.energy < 0) {
            this.die();
        }
    }
}