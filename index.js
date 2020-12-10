const mobileMenuBtn = document.querySelector('.mobileMenuBtn')
const mobileMenu = document.querySelector('.mobileMenu')
const menuContainer = document.querySelector('.menuContainer')
const sectionImg = document.querySelectorAll('.section4__img')

let openMenu = false

window.addEventListener('resize', ()=> {
    const w = window.innerWidth
    if (w < 1281) {
        menuContainer.style.backgroundColor = 'white'
        menuContainer.style.color = 'black'
    } else {
        menuContainer.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        menuContainer.style.color = 'rgba(255, 255, 255, 0.7)'
    }
})

window.addEventListener('scroll', () => {
    const w = window.innerWidth
    const scroll = window.scrollY

    if (w < 1281) return

    if (scroll > 30) {
        menuContainer.style.backgroundColor = 'white'
        menuContainer.style.color = 'black'
    } else {
        menuContainer.style.backgroundColor = 'rgba(255, 255, 255, 0)'
        menuContainer.style.color = 'rgba(255, 255, 255, 0.7)'
    }
})

mobileMenuBtn.addEventListener('click', () => {
    if (!openMenu) {
        mobileMenu.style.display = 'flex'
        openMenu = !openMenu
    } else {
        mobileMenu.style.display = 'none'
        openMenu = !openMenu
    }
})