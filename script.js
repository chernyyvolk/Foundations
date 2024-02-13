// Game Loop Variables and functions
let ticker = 0;
let population = 0;
let age = 0;

let dirt = 0;
let stone = 0;
let wood = 0;
let berries = 0;

setInterval(tick, 1000);

function tick() {
    document.getElementById("demo").innerHTML = ticker++;

    
}


