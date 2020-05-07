//index.js
$(function () {

    let certsSlider = new Swiper('.certs__slider-container', {
        spaceBetween: 40,
        slidesPerView: 5,
        navigation: {
            nextEl: '.certs__next',
            prevEl: '.certs__prev',
        },
        pagination: {
            el: '.certs__pag',
            type: 'bullets',
        },
    });

    let revsSlider = new Swiper('.revs__slider-container', {
        spaceBetween: 20,
        slidesPerView: 5,
        navigation: {
            nextEl: '.revs__next',
            prevEl: '.revs__prev',
        },
    });

    let photosSlider = new Swiper('.photos__slider-container', {
        spaceBetween: 20,
        slidesPerView: 5,
        navigation: {
            nextEl: '.photos__next',
            prevEl: '.photos__prev',
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

});


