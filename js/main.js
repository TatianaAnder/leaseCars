
const tabsBtn = document.querySelectorAll('.tabs__btn-item');

tabsBtn.forEach(function(element){
    element.addEventListener('click', open);
})

function open(event){
    const tabTarget = event.currentTarget;

    tabsBtn.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    })

    tabTarget.classList.add('tabs__btn-item--active');
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


  