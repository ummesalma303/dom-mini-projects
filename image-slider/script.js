let currentIndex = 0;

function showSlide(index) {
    let imageContainer = document.querySelector('.img-container')
    const totalSlide = imageContainer.children.length;
    if (index >= totalSlide) {
        currentIndex = 0;
    }
    else if (index < 0) {
        currentIndex = totalSlide - 1;
    }
    else{
        currentIndex = index;
    }
    imageContainer.style.transform = `translate( ${-currentIndex*100}%)`;
}

function perviousSlide() {
    
    showSlide(currentIndex + 1)
    // console.log(showSlide);
    
}
// perviousSlide()
function nextSlide() {
    showSlide(currentIndex - 1)

    
}
