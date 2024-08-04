const generateRgbColor = () =>{
    let r =Math.floor(Math.random() * 255)
    let g =Math.floor(Math.random() * 255)
    let b =Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}
const updateColor=()=>{
    let color = generateRgbColor()
    let colorBox = document.querySelector('.colorBox')
    colorBox.style.backgroundColor = color;
    let colorCode = document.querySelector('.colorCode');
    colorCode.innerText = color;
}
const copyColorCode = () => {
    let copyColorCode = document.querySelector('.colorCode');
    let inputTag = document.createElement('input');
    document.body.appendChild(inputTag)
    inputTag.value = copyColorCode.innerText;

    inputTag.select();
    document.execCommand('copy');
    document.body.removeChild(inputTag)
    alert('Color copy to clipboard')
}
document.querySelector('.copyBtn').addEventListener('click',()=>{
    copyColorCode()
})


generator = () =>{
    updateColor()

}