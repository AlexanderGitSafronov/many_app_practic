const btn = document.querySelectorAll('.btn');
const items = document.querySelectorAll('.tabs_item')

btn.forEach((item)=> {
    item.addEventListener('click',(e)=>{
    let el =  document.querySelector('#' + e.target.dataset.tab)
    items.forEach((item) => {
        item.classList.add('hide');
          })
    el.classList.remove('hide')
    })
})