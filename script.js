var length = 20
var side = 20
var matrix = [];
var socket = io();

function setup() {
    createCanvas(length * side, length * side);
    background('grey');
    frameRate(5);
    noStroke()
}

socket.on("matrix", pahelmatrican)

function pahelmatrican(m) {
    matrix = m;
    
}

function draw() {
    
    
    for (let y = 0; y < matrix.length; y++) {
        const element = matrix[y];
        for (let x = 0; x < element.length; x++) {

            if (matrix[y][x] == 1) {
                fill('green')
            }
            else if (matrix[y][x] == 2) {
                fill('yellow')
            }
            else if (matrix[y][x] == 3) {
                fill('red')
            }
            else if (matrix[y][x] == 4) {
                fill("blue")
            }
            else if (matrix[y][x] == 5) {
                fill("orange")
            }
            else {
                fill('grey')
            }
            rect(x * side, y * side, side, side)
        }
    }

}


function boom(){
    console.log('js');
    
    socket.emit("boom");
}
function restartgame(){
    console.log("tt");
    
    socket.emit("noric");
}                           