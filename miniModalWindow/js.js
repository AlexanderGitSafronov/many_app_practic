const firstButton = document.querySelector('.first__modal_btn')
const firstModal = document.querySelector('.first__modal')
const firstModalCloset = document.querySelector('.first__modal_close')


firstButton.addEventListener('click', ()=> {
    firstModal.classList.remove('hiden');
})
firstModalCloset.addEventListener('click', () => {
    firstModal.classList.add('hiden');
})
firstModal.addEventListener('click', ()=> {
    firstModal.classList.add('hiden');
})
firstModal.querySelector('.modal__card').addEventListener('click', (e) => {
e.stopPropagation()
})