let div = null;

window.onload=()=>{
    main()
}

function main() {
    const container = document.querySelector('.container')
    const changeBtn = document.querySelector('.change-btn')
    const input = document.querySelector('.input')
    const input2 = document.querySelector('.input-2')
    const copyBtn = document.querySelector('.copy-btn')
    
    changeBtn.addEventListener('click',()=>{
        let color = generatorColorDecimal()
        let hex = colorGenerator(color);
        let rgb = generateRgbColor(color);
        container.style.backgroundColor = rgb;
        input.value = hex.substring(1);
        input2.value = rgb;
    })

    copyBtn.addEventListener('click',function () {
        navigator.clipboard.writeText(input.value);

        if (div !== null) {
            div.remove();
            div = null;
        }

        if (isValidHex(input.value)) {
        generateTostMessage(`${input.value} copied`)
        }
        else{
            alert('Invalid color code')
        }
    });

    input.addEventListener('keyup',function(e) {
       const color = e.target.value;
       if (color) {
        input.value = color.toUpperCase()
        if (isValidHex(color)) {
         container.style.backgroundColor = `#${color}`;
        } 
       }
    })
    
}
function generateTostMessage(msg) {
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

/**
 * @param {string} color 
 */

function isValidHex(color) {
    if (color.length !== 6 ) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}



function generatorColorDecimal() {
    red = Math.floor(Math.random()*255);
    green = Math.floor(Math.random()*255);
    blue = Math.floor(Math.random()*255);

    return {
        red,
        green,
        blue
    }
}

function colorGenerator({red,green,blue}) {
    const getTwoCode =(value) =>{
        const hex = value.toString(16);
        return hex.length == 1 ?`0${hex}`:hex;
    }
    
    return`#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(blue)}`.toUpperCase();

}

function generateRgbColor({red,green,blue}) {
    return `rgb(${red},${green},${blue})`
}