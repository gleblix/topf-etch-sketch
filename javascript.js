const squaresPerSide = 48;
const container = document.querySelector('div');

const fixedWidth = "16px";
const fixedHeight = "16px";

for(let row = 1; row <= squaresPerSide; row++) {
    const rowDiv = document.createElement('div');
    rowDiv.style.display = "flex";

    for(let column = 1; column <= squaresPerSide; column++) {
        const div = document.createElement('div');
        div.style.width = fixedWidth;
        div.style.height = fixedHeight;
        randomizeBackgroundColor(div);
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