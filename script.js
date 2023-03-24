const canvas = document.getElementById("Canvas");
const rangeText = document.getElementById("rangeText");
const pixelsRange = document.getElementById("pixelsRange");

let pixelQuantity;
let pixel;

pixelsRange.addEventListener('input',()=>{
    console.log(pixelsRange.value)
    pixelQuantity= pixelsRange.value * pixelsRange.value;
    remove(canvas)
    for(i=0; i < pixelQuantity; i++){
        pixel = document.createElement("div");
        pixel.classList.add('pixels')

        canvas.style.gridTemplateColumns = `repeat(${pixelsRange.value},auto)`
        canvas.appendChild(pixel);

        rangeText.innerHTML = `${pixelsRange.value}X${pixelsRange.value}`
    }
})

function remove(a){
    while (a.firstChild) {
        a.removeChild(a.firstChild);
}}