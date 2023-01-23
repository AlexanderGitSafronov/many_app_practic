const ul = document.querySelector('.todo__ul');
const form = document.querySelector('.todo__form');
const input = document.querySelector('.todo__input');
const btn = document.querySelector('.todo__btn');

form.addEventListener('submit', pressing)

function pressing(event) {
    event.preventDefault();
    const newTask = document.createElement('li')
    newTask.innerText = input.value;
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role','button');
    deleteBtn.innerText = 'удалить';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);
    deleteBtn.addEventListener('click',function (e) {
        e.target.closest('li').remove();
    })
    ul.append(newTask);
    input.value = '';
    input.focus();
}
