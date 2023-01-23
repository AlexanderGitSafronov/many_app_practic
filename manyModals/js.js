const modalButtons = document.querySelectorAll('[data-modal-button]');
const allModals = document.querySelectorAll('[data-modal]');
const btnModalClose = document.querySelectorAll('[data-modal-close]');



modalButtons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      const modal = document.querySelector('#' + e.target.dataset.modalButton);
      modal.classList.remove('hiden');
      modal.querySelector('.modal__card').addEventListener('click',(e)=>{
        e.stopPropagation();
      })
    })
})
btnModalClose.forEach((close) => {
    close.addEventListener('click',(e)=>{
        e.target.closest('[data-modal]').classList.add('hiden');
    })
})
allModals.forEach((close) => {
    close.addEventListener('click',(e)=>{
       e.target.classList.add('hiden');
    })
})
