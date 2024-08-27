const container = document.querySelectorAll('.card')
container.forEach(function (card) {
    card.addEventListener('click', function () {
        newCard = document.createElement('div');
        newCard.classList.add('insideCard')
        newCard.innerHTML = ` <div class="card">
            <i id="icon" class="fa-solid fa-xmark"></i>
            <img src=${card.firstElementChild.src} alt="">
            <h2>How to choose the furniture 
                right of your home</h2>
            <p>The barn house captivates with its blend of 
                rustic charm and modern.</p>
            <button class="rinterio-btn-2">Read More</button>`
    document.querySelector('body').appendChild(newCard);
    const icon = document.getElementById(' ')
    icon.addEventListener("click",function () {
        newCard.remove()
    })
    })
})