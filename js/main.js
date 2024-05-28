// Handle navbar where clicking the buttons will show respective pages
const buttons = document.querySelectorAll('.nav-button')
const pagesIds = ['about-me-page', 'projects-page', 'contact-page']
const radioIds = ['radio-1', 'radio-2', 'radio-3']

// loop thru each button
buttons.forEach((button, index) => {
    // display current page based on radio button
    if (document.getElementById(radioIds[index]).checked) {
        displayPage(index)
    }

    // check button click
    button.addEventListener('click', () => {
        // select radio button based on button click
        document.getElementById(radioIds[index]).checked = true

        // change page based on what nav button is clicked
        displayPage(index)
    })
})

// Function for displaying pages
function displayPage(index) {
    pagesIds.forEach((page, i) => {
        if (index === i) {
            document.getElementById(page).style.display = 'flex'
            buttons[i].classList.add('active')
        } else {
            document.getElementById(page).style.display = 'none'
            buttons[i].classList.remove('active')
        }
    })
}

// Handle exit window
const closeButton = document.getElementById('btn-close')
const bgDim = document.getElementById('bg-dim')
const assetsGallery = document.getElementById('assets-gallery')
closeButton.addEventListener('click', () => {
    bgDim.style.display = 'none'
    assetsGallery.style.display = 'none'
})

// Handle open window
function openWindow() {
    bgDim.style.display = 'block'
    assetsGallery.style.display = 'block'
}