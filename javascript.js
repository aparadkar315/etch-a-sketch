const container = document.querySelector(".container");

function createSquares(a){
    const size = 900/a;
    const newHeightWidth = `${size}px`;
    for(let i = 0; i < a; i++){
    let div1 = document.createElement("div"); //create row of pixels
    div1.setAttribute("style","display: flex; margin: 0; padding: 0;");
    div1.style.height = newHeightWidth;
    container.appendChild(div1);

    for(let j = 0; j < a; j++){
    let div2 = document.createElement("div"); //create column of pixels
    div2.setAttribute("style","display: flex; margin: 0; padding: 0; flex-shrink: 0;");
    div2.classList.toggle("pixel");
    div2.style.height = newHeightWidth;
    div2.style.width = newHeightWidth;
    div1.appendChild(div2);
    console.log(div2.offsetHeight);
    }
}
colorSquares();
}

function colorSquares(){
const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter",() => {
    pixel.style.background = "blue";
    });
});
}


function noOfSquares(){
let squares = prompt("Enter number of squares you wish in a row or a column.","Maximum 100");
if(squares !== null && squares >= 1 && squares <=100){
createSquares(parseInt(squares));
}else{
    alert("Enter number between 1 to 100.");
}
}

const btn = document.querySelector("button");
btn.addEventListener("click", noOfSquares);
