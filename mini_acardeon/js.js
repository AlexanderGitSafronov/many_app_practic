const acardeon = document.querySelectorAll('p');
const items = document.querySelectorAll('.acardeon__item_text')
acardeon.forEach((item) => {
    item.addEventListener('click', (e) => {
            e.target.nextElementSibling.classList.toggle('hide'); 
    })
})



