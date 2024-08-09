const colorGenerator = function colorGenerator() {
    red = Math.floor(Math.random()*255)
    green = Math.floor(Math.random()*255)
    blue = Math.floor(Math.random()*255)

    return `rgb(${red},${green},${blue})`
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



// const colorGenerator = function colorGenerator() {
//     red = Math.floor(Math.random()*255)
//     green = Math.floor(Math.random()*255)
//     blue = Math.floor(Math.random()*255)

//     return `rgb(${red},${green},${blue})`
// }

// onload = () => {
//     main()
// }
// function main() {
//     let container = document.querySelector('.container')    
//     let changeBtn = document.querySelector('.change-btn')

// changeBtn.addEventListener('click',() => {
//     let bgColor = colorGenerator();
//     container.style.backgroundColor = bgColor;
// })
// }