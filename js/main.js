const leftArrow = document.querySelector('.carousel__arrow_left');
const rightArrow = document.querySelector('.carousel__arrow_right');
const carousel = document.querySelector('.inner__carousel');
let slideWidth = document.querySelector('.slide').getBoundingClientRect().width;
const slideCount = document.querySelectorAll('.slide').length;

let offset = 0;
leftArrow.addEventListener('click',(e)=>{
    slideWidth = document.querySelector('.slide').getBoundingClientRect().width;
    console.log(slideWidth);
    offset+=slideWidth;
    if (offset > 0) {
        offset = 0;
        return;
    }
    carousel.style.transform = `translateX(${offset}px)`;
});
rightArrow.addEventListener('click',(e)=>{
    slideWidth = document.querySelector('.slide').getBoundingClientRect().width;
    console.log(slideWidth);
    offset-=slideWidth;
    if (offset <= -slideWidth*slideCount) {
        offset +=slideWidth;
        return;
    }
    carousel.style.transform =  `translateX(${offset}px)`;
})

const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerContainer = document.querySelector('.header__container');
menuIcon.addEventListener('click',()=>{
    document.body.classList.toggle('lock');
    headerContainer.classList.toggle('active');
    menuBody.classList.toggle('active');
});