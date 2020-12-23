// Variables
const anchors = document.querySelectorAll("header nav a")

const parallaxDividers = document.querySelectorAll("div.image-divider-container")

const serviceOneTag = document.querySelector("div.service-one")
const serviceOneDescription = document.querySelector("div.s1-description")
const serviceTwoTag = document.querySelector("div.service-two")
const serviceTwoDescription = document.querySelector("div.s2-description")
const serviceThreeTag = document.querySelector("div.service-three")
const serviceThreeDescription = document.querySelector("div.s3-description")
const serviceFourTag = document.querySelector("div.service-four")
const serviceFourDescription = document.querySelector("div.s4-description")

const contactButton = document.querySelector("a.contact-button")
const modalContainer = document.querySelector("div.modal-container")
const modalClose = document.querySelector("div.modal img")

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

// SERVICE DESCRIPTION REVEAL

serviceOneTag.addEventListener("mouseover", function() {
    serviceOneDescription.style.opacity = "1"
})
serviceOneTag.addEventListener("mouseleave", function() {
    serviceOneDescription.style.opacity = "0"
})


serviceTwoTag.addEventListener("mouseover", function() {
    serviceTwoDescription.style.opacity = "1"
})
serviceTwoTag.addEventListener("mouseleave", function() {
    serviceTwoDescription.style.opacity = "0"
})

serviceThreeTag.addEventListener("mouseover", function() {
    serviceThreeDescription.style.opacity = "1"
})
serviceThreeTag.addEventListener("mouseleave", function() {
    serviceThreeDescription.style.opacity = "0"
})

serviceFourTag.addEventListener("mouseover", function() {
    serviceFourDescription.style.opacity = "1"
})
serviceFourTag.addEventListener("mouseleave", function() {
    serviceFourDescription.style.opacity = "0"
})

// MODAL LAUNCHER

contactButton.addEventListener("click", function() {
    modalContainer.style.opacity = "1"
    modalContainer.style.pointerEvents = "auto"
})

modalContainer.addEventListener("click", function() {
    modalContainer.style.opacity = "0"
    modalContainer.style.pointerEvents = "none"
})