const canvas = document.getElementById("Canvas");
const rangeText = document.getElementById("rangeText");
const pixelsRange = document.getElementById("pixelsRange");

let btn = document.getElementById("btn");
let pixelQuantity;
let pixel;

btn.addEventListener('click',()=>{
    console.log(color.value)
})

pixelsRange.addEventListener('input',()=>{
    console.log(pixelsRange.value)
    pixelQuantity= pixelsRange.value * pixelsRange.value;
    remove(canvas)
    for(i=0; i < pixelQuantity; i++){
        pixel = document.createElement("div");
        pixel.classList.add('pixels')

        canvas.style.gridTemplateColumns = `repeat(${pixelsRange.value},auto)`
        canvas.appendChild(pixel);

        pixel.addEventListener('mouseover',(e)=>{
            let color = document.getElementById("color");
            e.target.style.background= `${color.value}`;
        })

        rangeText.innerHTML = `${pixelsRange.value}X${pixelsRange.value}`
    }
})

function remove(a){
    while (a.firstChild) {
        a.removeChild(a.firstChild);
}}