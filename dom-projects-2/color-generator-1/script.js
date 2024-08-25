const colorGenerator = function colorGenerator() {
    red = Math.floor(Math.random()*255)
    green = Math.floor(Math.random()*255)
    blue = Math.floor(Math.random()*255)

    return `rgb(${red},${green},${blue})`
}

window.onload =() =>{
    main()
}

function main() {
    
}
function updateColor() {
    let bgColor = colorGenerator();
    let container = document.querySelector('.container')
    container.style.backgroundColor = bgColor;
}

const changeBtn = document.querySelector('.change-btn');

changeBtn.addEventListener('click',()=>{
    updateColor()
})


