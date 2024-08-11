let div = null;

// onload handler
window.onload=()=>{
    main()
}

// Main or boot function, this function will take care of getting all the dom references 
function main() {
    const container = document.querySelector('.container')
    const changeBtn = document.querySelector('.change-btn')
    const input = document.querySelector('.input')
    const input2 = document.querySelector('.input-2')
    const copyBtn = document.querySelector('.copy-btn')
    const copyBtn2 = document.querySelector('.copy-btn-2')
    
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


    
    copyBtn2.addEventListener('click',function () {
        navigator.clipboard.writeText(input2.value);

        if (div !== null) {
            div.remove();
            div = null;
        }

        if (isValidHex(input.value)) {
        generateTostMessage(`${input2.value} copied`)
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
         input2.value = hexToRgb(color);
        } 
       }
    })
    
}


// event handlers


// dom functions
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

// utility's functions



/**
 * generate and returns an object of three color decimal values 
 * @param {object} msg 
 */



/**
 * 
 * @returns 
 */

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

/**
 * take a color object of three decimal values and return a hexadecimal color code
 * @param {object} color
 * @returns {string}
 */

function hexToRgb(hex) {
    const red = parseInt(hex.slice(0,2),16);
    const green = parseInt(hex.slice(2,4),16);
    const blue = parseInt( hex.slice(4),16);
    return `rgb(${red},${green},${blue})`
}

/**
 * take a color object of three decimal values and return a rgb color code
 * @param {object} color
 * @returns {string}
 */

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


/**
 * validate hex color code
 * @param {string} color 
 * @returns {boolean}
 */

function isValidHex(color) {
    if (color.length !== 6 ) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}





