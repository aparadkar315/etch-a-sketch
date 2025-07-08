const container = document.querySelector(".container");

for(let i = 0; i < 16; i++){
    let div1 = document.createElement("div"); //create row of pixels
    div1.setAttribute("style","display: flex; height: 56px; margin: 0; padding: 0;")
    container.appendChild(div1);

    for(let j = 0; j < 16; j++){
    let div2 = document.createElement("div"); //create column of pixels
    div2.setAttribute("style","display: flex; height: 56px; width: 56px; margin: 0; padding: 0; flex-shrink: 0;");
    div2.classList.toggle("pixel");
    div1.appendChild(div2);
    }
}

const pixels = document.querySelectorAll(".pixel");
pixels.forEach((pixel) => {
    pixel.addEventListener("mouseenter",() => {
    pixel.style.background = "blue";
    });
});