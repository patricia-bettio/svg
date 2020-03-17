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

}
