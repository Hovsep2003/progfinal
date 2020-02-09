var LivingCreature = require("./LivingCreature")
module.exports = class Grass extends LivingCreature {
    mul() {
        this.life++;
        grassHashiv++
        var cells = this.chooseCell(0);
        var rand = Math.floor(Math.random()* cells.length)
        var newCell = cells[rand]
        if (newCell && this.life > 10) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 1;
            let grass = new Grass(x, y);
            grassArr.push(grass);
            this.life = 0;
        }
    }
}