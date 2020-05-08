$(function () {

    let popup = $('.popup'),
        popupWrapper = popup.find('.popup__wrapper');


    $('.jsCall').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            template = $(document.querySelector('#tmpl').content),
            html = template.find('.callback').clone();

        popupWrapper.html(html);
        popup.addClass('active');

        popup.find('.form').validate(
            {
                rules: {
                    name: "required",
                    tel: "required"
                },
                messages: {
                    name: "Необходимо указать Ваше имя",
                    tel: "Необходимо указать номер телефона"
                },
                submitHandler: function (form) {
                    //ToDo здесь должен быть ajax, при успешной отправке данных перелистывается на следующий слайд
                    success();
                },
            }
        );
        $('input[type=tel]').mask('+7 (999) 999-99-99');
    });

    $('.jsCall2').on('click', function (e) {
        e.preventDefault();
        let $this = $(this),
            template = $(document.querySelector('#tmpl').content),
            html = template.find('.callback2').clone();

        popupWrapper.html(html);
        popup.addClass('active');

        popup.find('.form').validate(
            {
                rules: {
                    name: "required",
                    tel: "required"
                },
                messages: {
                    name: "Необходимо указать Ваше имя",
                    tel: "Необходимо указать номер телефона"
                },
                submitHandler: function (form) {
                    //ToDo здесь должен быть ajax, при успешной отправке данных перелистывается на следующий слайд
                    success();
                },
            }
        );
        $('input[type=tel]').mask('+7 (999) 999-99-99');
    });

    $('.feed__form').validate(
        {
            rules: {
                name: "required",
                tel: "required"
            },
            messages: {
                name: "Необходимо указать Ваше имя",
                tel: "Необходимо указать номер телефона"
            },
            submitHandler: function (form) {
                //ToDo здесь должен быть ajax, при успешной отправке данных перелистывается на следующий слайд
                let template = $(document.querySelector('#tmpl').content),
                    html = template.find('.success').clone();
                $(form).append(html);
            },
        }
    );

    $('input[type=tel]').mask('+7 (999) 999-99-99');



    popup.on('click', function (e) {
        let target = $(e.target);

        if (target.closest('.popup__wrapper').length === 0){
            popup.removeClass('active');
        }
    });

    $('body').on('click', '.jsClose', function (e) {
        e.preventDefault();
        popup.removeClass('active');
    });

    function success() {
        let template = $(document.querySelector('#tmpl').content),
            html = template.find('.success').clone();
        popupWrapper.find('.popup__form').append(html);
    }

});