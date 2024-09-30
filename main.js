var openHam = document.querySelector('#openHam')
var closeHam = document.querySelector('#closeHam')
var navbarItems = document.querySelector('#navbar-items ul')

const handleHamBurgerMenu = (nav, close, open) => {
    navbarItems.style.display = nav
    closeHam.style.display = close
    openHam.style.display = open
}

// open hamburger menu
openHam.addEventListener('click', () => handleHamBurgerMenu('flex', 'block', 'none'))
closeHam.addEventListener('click', () => handleHamBurgerMenu('none','none', 'block'))