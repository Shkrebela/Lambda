import Swiper, {Navigation, Pagination, Mousewheel} from 'swiper';

//Slider
(() => {
    Swiper.use([Navigation, Pagination, Mousewheel]);

    let swiperFirst = new Swiper('.reviews__swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
})();

//mobil button
(() => {
    let menuToggle = document.getElementById('menu-toggle');
    let menu = document.querySelector('.main-header__menu');
    let body = document.querySelector('.body');
    let menuLink = document.getElementsByClassName('main-header__link');

    function toggleClass(el, className) {
        el.classList.toggle(className);
    }

    menuToggle.addEventListener('click', () => {
        toggleClass(menuToggle, 'menu-toggle--active-menu-toggle');
        toggleClass(menu, 'main-header__menu--active-menu-toggle');
        toggleClass(body, 'body--stop-scrolling');
    });

    for (let i = 0; i < menuLink.length; i++) {
        menuLink[i].addEventListener('click', () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                toggleClass(menuToggle, 'menu-toggle--active-menu-toggle');
                toggleClass(menu, 'main-header__menu--active-menu-toggle');
                toggleClass(body, 'body--stop-scrolling');
            }
        });
    }
})();

//button up
(() => {
    let arrowUp = document.querySelector('.arrow-up');

    window.addEventListener('scroll', function () {
        if (pageYOffset > 300) {
            arrowUp.classList.remove("arrow-up--none")
        } else {
            arrowUp.classList.add("arrow-up--none")
        }
    });
})();
