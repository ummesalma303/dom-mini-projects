let count = 0;

const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const content = document.querySelector('.content');

const updateCount = (value) =>{
    count += value;
    content.textContent = count;
    
    if (count >= 10) {
        plusBtn.setAttribute('disabled',true);
    }
    else{
        plusBtn.removeAttribute('disabled',true);
    }

    // minus btn
    content.textContent = count;
    if (count <= 0) {
        minusBtn.setAttribute('disabled',true);
    }
    else{
        minusBtn.removeAttribute('disabled',true);
    }
}

plusBtn.addEventListener('click',()=>{
    updateCount(1)
})
minusBtn.addEventListener('click',()=>{
    updateCount(-1)
})