    "use strict"

    document.addEventListener("DOMContentLoaded", start);

    let colorClass;

    async function start(){
        let response = await fetch("minicoloringbook.svg");
        let mySvgData = await response.text();
        document.querySelector("section").innerHTML = mySvgData;
        startManipulatingSvg();
    }

    function startManipulatingSvg(){
   
        document.querySelector("#colors").addEventListener("click", clickedColor);
        document.querySelector("#shapes").addEventListener("click", clickedShape);
    }
    

    function clickedShape(shape){
        console.log(shape.target)
        let shapeChoice = shape.target;
        console.log(shapeChoice)
        console.log(shapeChoice.classList)
        console.log(colorClass)
        shapeChoice.classList.value = colorClass;
    }

    function clickedColor(color){
        let colorChoice = color.target;
        console.log(colorChoice)
        colorClass = colorChoice.classList;
        console.log(colorClass)
    }