const btn = document.querySelectorAll('.tab__btn');
const tabs = document.querySelectorAll('.tab__text')

btn.forEach((tab) => {
    tab.addEventListener('click', () => {


        let dataTab = tab.getAttribute('data-tab')
        let currenttab = document.querySelector(dataTab);
       
     
            if(!tab.classList.contains('active')){
                btn.forEach((tab) => {
                    tab.classList.remove('active')
                    
                })
                tabs.forEach((tab) => {
                    tab.classList.remove('active__item');
                })
                tab.classList.add('active');
                currenttab.classList.add('active__item')
            }
        
        
        
    })
})