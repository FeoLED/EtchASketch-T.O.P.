let advice = document.querySelector(".advice");
let sketchpad = document.querySelector(".container");
for(let i=0; i<16; i++){
  let row = document.createElement("div");
  for(let j=0; j<16; j++){
    let innerDiv = document.createElement("div");
    innerDiv.className = "innerDiv";
    row.appendChild(innerDiv);
  }
  row.className = "row";
  sketchpad.appendChild(row);
}

//function to generate rgb color
function rgbGenerator(){
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = `rgb(${r}, ${g}, ${b})`;
    return color
}

let squares = document.querySelectorAll(".innerDiv");
squares.forEach(div=>{
  div.addEventListener("mouseover", ()=>{
    div.style.backgroundColor = rgbGenerator();
  })
})


let sizeButton = document.querySelector(".sizeButton");
sizeButton.addEventListener("click", changeSize);

function changeSize(){
  advice.textContent = "Change the grid's size";
  advice.style.color = "silver";
  advice.style.textShadow = "1px 0px 2px cyan";
  let newSize = parseInt(document.querySelector(".newSizeInput").value);
  if((newSize>=2)&&(newSize<=100)){
    sketchpad.replaceChildren();
    for(let k=0; k<newSize; k++){
        let newRow = document.createElement("div");
        for(let l=0; l<newSize; l++){
            let newInnerDiv = document.createElement("div");
            newInnerDiv.className = "innerDiv";
            newRow.appendChild(newInnerDiv);
        }   
        newRow.className = "row";
        sketchpad.appendChild(newRow);
    }
    let squares = document.querySelectorAll(".innerDiv");
    squares.forEach(div=>{
        div.addEventListener("mouseover", ()=>{
            div.style.backgroundColor = rgbGenerator();
        })
    })
  }else{
    advice.style.color = "crimson";
    advice.style.textShadow = "1px 0px 6px red";
    advice.textContent = "Error: please enter a number between 2 and 100";
  }
}
