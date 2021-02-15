//index.js

$.validator.methods.tel = function(value,element){
    let re = new RegExp(/\d/g),
        str = value.match(re);

    if (str.length == 11){
        return true;
    } else {
        return false;
    }
};

$(function () {

    let certsSlider = new Swiper('.certs__slider-container', {
        spaceBetween: 10,
        slidesPerView: 3,
        navigation: {
            nextEl: '.certs__next',
            prevEl: '.certs__prev',
        },
        pagination: {
            el: '.certs__pag',
            type: 'bullets',
        },
        breakpoints: {
            // when window width is >= 767.99px
            767.99: {
                spaceBetween: 20,
                slidesPerView: 5,
            },
            // when window width is >= 1199.99px
            1199.99: {
                spaceBetween: 40,
                slidesPerView: 5,
            },
        },
    });

    let revsSlider = new Swiper('.revs__slider-container', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.revs__next',
            prevEl: '.revs__prev',
        },
        breakpoints: {
            // when window width is >= 767.99px
            767.99: {
                spaceBetween: 20,
                slidesPerView: 3,
            },
            // when window width is >= 1199.99px
            1199.99: {
                spaceBetween: 20,
                slidesPerView: 5,
            },
        },
    });

    let photosSlider = new Swiper('.photos__slider-container', {
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.photos__next',
            prevEl: '.photos__prev',
        },
        breakpoints: {
            // when window width is >= 767.99px
            767.99: {
                spaceBetween: 10,
                slidesPerView: 4,
            },
            // when window width is >= 1199.99px
            1199.99: {
                spaceBetween: 20,
                slidesPerView: 5,
            },
        },
    });

    $('.exs__sw').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            id = $this.data('id'),
            $sws = $('.exs__sw'),
            $tabs = $('.exs__tab'),
            $tab = $tabs.filter('[data-id='+id+']');

        $sws.removeClass('active');
        $tabs.removeClass('active');
        $this.addClass('active');
        $tab.addClass('active');
    });

    let respsSlider = new Swiper('.resps__slider-container', {
        slidesPerView: 1,
        loop: true,
        spaceBetween: 40,
        navigation: {
            nextEl: '.resps__next',
            prevEl: '.resps__prev',
        },
    });


    const spricesSliders = document.querySelectorAll('.sprices__slider');

    spricesSliders.forEach(function (slider){

        new Swiper(slider.querySelector('.sprices__container'), {
            spaceBetween: 10,
            slidesPerView: 1.5,
            navigation: {
                nextEl: slider.querySelector('.sprices__next'),
                prevEl:  slider.querySelector('.sprices__prev'),
            },
            breakpoints: {
                // when window width is >= 767.99px
                767.99: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
            },
        });
    });

    // let spricesSlider = new Swiper('.sprices__container', {
    //     spaceBetween: 10,
    //     slidesPerView: 1.5,
    //     navigation: {
    //         nextEl: '.sprices__next',
    //         prevEl: '.sprices__prev',
    //     },
    //     breakpoints: {
    //         // when window width is >= 767.99px
    //         767.99: {
    //             spaceBetween: 20,
    //             slidesPerView: 3,
    //         },
    //     },
    // });

});


