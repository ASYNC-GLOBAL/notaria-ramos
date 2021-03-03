let header = document.getElementById('header');
let notariaDiv = document.getElementById('notaria-info-div');
let notariaInfo = document.querySelectorAll('.notaria-info-parraf')
let atributosDiv = document.getElementById('atributos-div');
let atributoList = document.getElementById('atributo-list');


eventFunction();

function eventFunction() {
    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('scroll', scrollInfoNotaria);
    window.addEventListener('scroll', scrollAtributoNotaria);
}

function scrollHeader() {
    if (scrollY() > 60) {
        header.classList.add("headercolor");
    } else {
        header.classList.remove("headercolor")
    }
}


function nosotrosScroll() {
    setScrollY(notariaDiv.offsetTop);
}


function scrollInfoNotaria() {
    for (let i = 0; i < notariaInfo.length; i++) {
        let scrollInfoNegocio = notariaInfo[i].offsetTop
        if (scrollInfoNegocio - 720 < scrollY()) {
            notariaInfo[i].style.opacity = 1;
            notariaInfo[i].classList.add('slide');
        }
    }
}

function scrollAtributoNotaria() {

    if (atributosDiv.offsetTop - 650 < scrollY()) {

        atributoList.style.opacity = 1;
        atributoList.classList.add('slide-scale');
    }
}




function scrollY() {
    return document.documentElement.scrollTop;
}

function setScrollY(distancia) {
    document.documentElement.scrollTop = distancia - 80;
}



/* MASK SWIPER */
var mySwiper = new Swiper('#mask-swiper-container', {
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    loopedSlides: 3,


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '#mask-button-next',
        prevEl: '#mask-button-prev',
    },
})



/* OFICINA SERVICE SWIPER */
var mySwiper = new Swiper('#oficina-swiper-container', {
    speed: 400,
    spaceBetween: 15,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    loopedSlides: 3,


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
})