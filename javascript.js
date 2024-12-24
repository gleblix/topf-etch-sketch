const squaresPerSide = 48;
const squareSize = 16; //in pixels
const rowLength = squaresPerSide * squareSize; //in pixels
const container = document.querySelector('div');
container.style.width = `${rowLength}px`;

for(let row = 1; row <= squaresPerSide; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.style.display = "flex";
    
    for(let column = 1; column <= squaresPerSide; column++) {
        const div = document.createElement('div');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.style.backgroundColor = 'black';
        div.style.opacity = 0.0;
        rowDiv.appendChild(div);
    }

    container.appendChild(rowDiv);
}

function randomizeBackgroundColor(element) {
    const R = randomIntFromRange(0, 255);
    const G = randomIntFromRange(0, 255);
    const B = randomIntFromRange(0, 255);
    element.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}

// Internal function
// Assume num1 < num2 and both num1 and num2 are integers
function randomIntFromRange(num1, num2) {
    return Math.floor(Math.random() * 256);
}

function increaseOpacity(element) {
    element.style.opacity = Math.min(parseFloat(element.style.opacity) + 0.1, 1);
}
    


container.addEventListener('mouseover', function(event) {
    //randomizeBackgroundColor(event.target);
    increaseOpacity(event.target);
});

// next item - create spacebar functionality to avoid changing opacity
// following item - create another key to be an eraser function