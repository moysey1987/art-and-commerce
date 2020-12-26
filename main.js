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
const mobileContactButton = document.querySelector("a.mobile-contact")
const modalContainer = document.querySelector("div.modal-container")
const modalClose = document.querySelector("div.modal img")

const growers = document.querySelectorAll("div.divider")

const bodyTag = document.querySelector("body")
const menuToggle = document.querySelector("a.mobile-menu-toggle")
const mobileNavItems = document.querySelectorAll("nav.mobile-nav a")


// PAGE LOAD ANIMATION

anime.timeline()
    .add({
        targets: '.hero-text h1, .logomark',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: 2100
    });
anime.timeline()
    .add({
        targets: '.hero-text ul, .location-subtitle',
        translateY: [150, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: 2500
    });

anime.timeline()
    .add({
        targets: '.intro-text',
        translateX: [-150, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: 2500
    });

TweenMax.to(".loader-wrapper", 1.75, {
    top: "-150%",
    ease: Expo.easeInOut,
    delay: 1
});

var tl = new TimelineMax();

tl.from(".loader", 2, {
    rotate: "-360deg",
    ease: Expo.easeInOut,
});

tl.to(".loader", 1.5, {
    top: "-100%",
    ease: Expo.easeInOut
}, 1);

TweenMax.to(".box", 1, {
    scaleY: "0",
    transformOrigin: "0% 0%",
    ease: Expo.easeInOut,
    delay: 1.5
});

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

        divider.style.backgroundPositionY = offset * 0.12 + "px"
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

mobileContactButton.addEventListener("click", function() {
    modalContainer.style.opacity = "1"
    modalContainer.style.pointerEvents = "auto"
})

modalClose.addEventListener("click", function() {
    modalContainer.style.opacity = "0"
    modalContainer.style.pointerEvents = "none"
})

// GROWING DIVIDER LINES
const growOptions = {
    threshold: 1
}
const growOnScroll = new IntersectionObserver(function(
        entries,
        growOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return
            } else {
                entry.target.classList.add('grow')
                growOnScroll.unobserve(entry.target)
            }
        });
    },
    growOptions)

growers.forEach(grower => {
    growOnScroll.observe(grower)
})

// MOBILE MENU

menuToggle.addEventListener("click", function() {
    bodyTag.classList.toggle("nav-open")

    if (bodyTag.classList.contains("nav-open")) {

        gsap.to(".burger-top", { rotation: 45, transformOrigin: "50% 50%", y: 8 })
        gsap.to(".burger-bottom", { rotation: -45, transformOrigin: "50% 50%", y: -8 })
        gsap.to(".burger-mid", { width: "0" })
    } else {

        gsap.to(".burger-top", { rotation: 0, y: 0 })
        gsap.to(".burger-bottom", { rotation: 0, y: 0 })
        gsap.to(".burger-mid", { width: 28 })
    }
})

// Prevent default link behaviour on mobile menu toggle
menuToggle.addEventListener('click', event => {
    event.preventDefault
})


// Close mobile menu when item selected

mobileNavItems.forEach(item => {
    item.addEventListener('click', event => {
        bodyTag.classList.toggle("nav-open")

        gsap.to(".burger-top", { rotation: 0, y: 0 })
        gsap.to(".burger-bottom", { rotation: 0, y: 0 })
        gsap.to(".burger-mid", { width: 28 })
    })
})