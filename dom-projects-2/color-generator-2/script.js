// let div = null;
let div = null;
function colorGenerator() {
    red = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);

    return`#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

window.onload=()=>{
    main()
}

function main() {
    const container = document.querySelector('.container')
    const changeBtn = document.querySelector('.change-btn')
    const input = document.querySelector('.input')
    const copyBtn = document.querySelector('.copy-btn')
    
    changeBtn.addEventListener('click',()=>{
        let bgColor = colorGenerator();
        container.style.backgroundColor = bgColor;
        input.value = bgColor;
    })

    copyBtn.addEventListener('click',function () {
        navigator.clipboard.writeText(input.value);

        if (div !== null) {
            div.remove();
            div = null;
        }
        generateTostMessage(`${input.value} copied`)
    })
    
}
function  generateTostMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.classList = "tost-message tost-message-in";
    document.body.append(div);

    div.addEventListener('click',function () {
        div.classList.remove('tost-message-in');
        div.classList.add('tost-message-out');

        div.addEventListener('animationend',function () {
            this.remove()
            div = null;
        })
    })
}












// function generateTostMessage(msg) {
//     div = document.createElement('div');
//     div.innerText = msg;
//     div.className = 'tost-message tost-message-in';
//     document.body.appendChild(div);
    

//     div.addEventListener('click',function () {
//         div.classList.add('tost-message-in');
//         div.classList.add('tost-message-out');

//         div.addEventListener('animationend', function () {
//             div.remove()

//             div = null;
//         })
//     })
// }
