// Variables
const anchors = document.querySelectorAll("header nav a")

const parallaxDividers = document.querySelectorAll("div.image-divider-container")






// SMOOTH SCROLLING

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        const href = anchor.getAttribute('href')
        if (href.charAt(0) === '#') {
            event.preventDefault()
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            })
        }
    })
})


// PARALLAX IMAGE DIVIDER

parallaxDividers.forEach(divider => {

    window.addEventListener("scroll", function() {
        let offset = window.pageYOffset

        divider.style.backgroundPositionY = offset * 0.3 + "px"
    })

})