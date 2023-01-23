const next = document.querySelector('.next');
const prev = document.querySelector('.prev')
const img = document.querySelectorAll('img')


let i = 0;
next.addEventListener('click', ()=>{
    img[i].className = '';
    i++;
    if(i >= img.length) {
        i = 0;
    }
    img[i].className = 'showed';
})
prev.addEventListener('click', ()=>{
    img[i].className = '';
    i--;
    if(i < 0) {
        i = img.length - 1 ;
    }
    img[i].className = 'showed';
})