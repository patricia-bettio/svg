"use strict"

document.addEventListener("DOMContentLoaded", start);

let colorClass;

async function start(){
    let response = await fetch("lego.svg");
    let mySvgData = await response.text();
    document.querySelector("section").innerHTML = mySvgData;
    startManipulatingSvg();
}

function startManipulatingSvg(){
    document.querySelector("#drawing").addEventListener("click", selectSpace);
    document.querySelector("#colors").addEventListener("click", selectColor);
}

function selectSpace(space){
    console.log(space)
    console.log(space.target)
    console.log(colorClass)
 let spaceSelected = space.target;
    spaceSelected.classList.value = colorClass 
}

function selectColor(color){
    console.log(color.target.className)
    console.log(color.target.classList)
    let colorChoice = color.target.classList;
    console.log(colorChoice.value)
    colorClass = colorChoice.value;
    console.log(color)
}