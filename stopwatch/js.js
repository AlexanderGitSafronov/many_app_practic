const start = document.querySelector('.counter__start');
const stopCounter = document.querySelector('.counter__stop');
const clear = document.querySelector('.counter__clear');
const counter = document.querySelector('.counter');



let i = 0;

let int = '';

start.addEventListener('click', () => [
   int = setInterval(()=> {
        i++
        counter.innerText = i;
    },1000)
])
stopCounter.addEventListener('click', ()=> {
    clearInterval(int);
})
clear.addEventListener('click', ()=> {
    i = 0;
    counter.innerText = 0;
})
