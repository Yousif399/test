const showBio = (btn) => {
    var bio = btn.previousElementSibling
    if (bio.classList.contains('active')) {
        bio.classList.remove('active')
        btn.innerHTML = "View"
    }
    else {
        bio.classList.add('active')
        btn.innerHTML = "Close"
    }
}

// const carousel = document.querySelector('.owl-carousel'); // Change to your carousel selector
// let startX, startY, distX, distY;

// carousel.addEventListener('touchstart', (e) => {
//   startX = e.touches[0].clientX;
//   startY = e.touches[0].clientY;
// });

// carousel.addEventListener('touchmove', (e) => {
//   distX = e.touches[0].clientX - startX;
//   distY = e.touches[0].clientY - startY;

//   // Check if the swipe is more vertical than horizontal
//   if (Math.abs(distY) > Math.abs(distX)) {
//     // Allow the default behavior (vertical scrolling)
//     e.stopPropagation();  // Stop the carousel from preventing the scroll
//     return;
//   }

//   // Prevent vertical scrolling and allow horizontal carousel swipe
//   e.preventDefault();
// });

var carousel = document.querySelector('.home-carousel')


const items = document.querySelectorAll('.slider_item')

const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel-btn"></span>`
})

console.log(buttonsHtml)

carousel.insertAdjacentHTML('beforeend', `
     <div class="carousel-nav">
        ${buttonsHtml.join('')}
      </div>
    `)
const buttons = document.querySelectorAll('.carousel-btn')

buttons[0].classList.add('selected')

buttons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        console.log(`this is the ${btn, i}`)

        items.forEach(item => item.classList.remove('selected'))
        buttons.forEach(btn => btn.classList.remove('selected'))

        items[i].classList.add('selected')
        buttons[i].classList.add('selected')
    })

})

// second 

var carousel2 = document.querySelector('.home-carousel.service')

if (carousel2) {
    const items2 = document.querySelectorAll('.service_slider')
    const buttonsHtml2 = Array.from(items2, () => {
        return `<span class="carousel-btn service"></span>`
    })

    console.log(buttonsHtml2)

    carousel2.insertAdjacentHTML('beforeend', `
         <div class="carousel-nav">
            ${buttonsHtml2.join('')}
          </div>
        `)
    const buttons2 = document.querySelectorAll('.carousel-btn.service')

    buttons2[0].classList.add('selected')

    buttons2.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            console.log(`this is the ${btn, i}`)

            items2.forEach(item => item.classList.remove('selected'))
            buttons2.forEach(btn => btn.classList.remove('selected'))

            items2[i].classList.add('selected')
            buttons2[i].classList.add('selected')
        })

    })

}



let slideIndex = 0
let intervalId

const moveSlide = (n) => {
    slideIndex += n
    showSlide(slideIndex)
}
const showSlide = (n) => {
    const slides = document.querySelectorAll('.slider_item')
    // console.log(`N is : ${ n}`)
    if (n == slides.length) {
        slideIndex = 0
        items[slideIndex + 1].classList.remove('selected')
        items[slideIndex].classList.add('selected')
        buttons[slideIndex + 1].classList.remove('selected')
        buttons[slideIndex].classList.add('selected')
    }
    else if (n > 0) {
        slideIndex = slides.length - 1
        items[slideIndex - 1].classList.remove('selected')
        items[slideIndex].classList.add('selected')
        buttons[slideIndex - 1].classList.remove('selected')
        buttons[slideIndex].classList.add('selected')
    }
    slides.forEach((slide) => {
        slide.computedStyleMap.transform = `translateX(-${slideIndex * 100}%)`
    })

}

const autoPlay = () => {
    console.log('leave')
    intervalId = setInterval(() => {
        moveSlide(1);
    }, 10000)
}
autoPlay()

const stopAutoPlay = () => {
    console.log('Enter')
    clearInterval(intervalId)
}

carousel.addEventListener('mouseenter', stopAutoPlay)

carousel.addEventListener('mouseleave', autoPlay)







