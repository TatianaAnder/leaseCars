
const tabsBtn = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabsBtn.forEach(function(element){
    element.addEventListener('click', open);
})

function open(event){
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabsBtn.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    const res = document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
    console.log(res)

}














const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay:{
        delay: 3000, 
        disableOnInteraction: false,
    },
});


  