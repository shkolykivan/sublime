const menuButton = document.querySelector('.full-screen__show-menu-button');

menuButton.addEventListener("click", () => {
    if (menuButton.classList.contains('active')) {
        menuButton.classList.remove('active')
        menuButton.firstChild.textContent = 'Show menu'
        document.querySelector('.full-screen__list.list').style.display = "none"
        document.querySelector('.header').style.zIndex = '2'
    } else {
        menuButton.classList.add('active')
        menuButton.firstChild.textContent = 'Hide menu'
        document.querySelector('.full-screen__list.list').style.display = "block"
        document.querySelector('.header').style.zIndex = '0'
    }
})

document.querySelectorAll(".list__link").forEach(a => {
    a.addEventListener('click', () => {
        if (menuButton.classList.contains('active')) {
            menuButton.classList.remove('active')
            menuButton.firstChild.textContent = 'Show menu'
            document.querySelector('.full-screen__list.list').style.display = "none"
            document.querySelector('.header').style.zIndex = '2'
        }
    })
})



window.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('footer__hiden-menu')) {
        if (target.classList.contains('active')) {
            target.classList.remove('active')
            target.firstChild.textContent = 'Show menu'
            document.querySelector('.footer__list').style.maxHeight = '40px'
        } else {
            target.classList.add('active')
            target.firstChild.textContent = 'Hide menu'
            document.querySelector('.footer__list').style.maxHeight = 'none'
        }
    }
})
window.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('blogs__hiden-menu')) {
        if (target.classList.contains('active')) {
            target.classList.remove('active')
            target.firstChild.textContent = 'Show menu'
            document.querySelector('.blogs__list').style.maxHeight = '40px'
        } else {
            target.classList.add('active')
            target.firstChild.textContent = 'Hide menu'
            document.querySelector('.blogs__list').style.maxHeight = 'none'
        }
    }
})


console.log(innerWidth)