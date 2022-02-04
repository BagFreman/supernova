$(function () {

    function numberMask(string) {
        let str;
        if (string) {
            string !== null ? str = string.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') : '';
        }
        return str;
    }

    //phone mask

    $('.tel').mask('+7 (000) 000 - 00 - 00')

    // event click burger menu

    $('.burger').on('click', function () {
        $(this).toggleClass('burger-active');
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('body').toggleClass('body-fix');
    });

    // form query

    $(".form-query").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function () {
            $('.modal__open').css('display', 'none');
            $('.modal__thanks').css('display', 'block');
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
            $
        });
        return false;
    });

    $('.modal').on('hidden.bs.modal', function (e) {
        $('.modal__open').css('display', 'block');
        $('.modal__thanks').css('display', 'none');
    })

    // sidebar catalog

    $('.catalog__item-text').on('click', function () {
        $(this).closest('.catalog__item').toggleClass('catalog__item-active');
    });

    // input-quantity

    $('.input-quantity').on('input', function () {
        $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''));
        if ($(this).val() < 0) {
            $(this).val(0);
        }
    });

    $('.plus').on('click', function () {
        let input = $(this).closest('.input-block').find('.input-quantity');
        let count = parseInt(input.val()) + 1;
        input.val(parseInt(count));
        $('.person-child').change();
        $('.person-adult').change();
        $('.sum').change();
    });

    $('.minus').on('click', function () {
        let input = $(this).closest('.input-block').find('.input-quantity');
        let count = parseInt(input.val()) - 1;
        input.val(parseInt(count));
        if (input.val() < 0) {
            input.val(0);
        }
        $('.person-child').change();
        $('.person-adult').change();
        $('.sum').change();
    });


    // prosuct cart

    let productPriceMask = $('.accessories-product__price span').text();
    $('.accessories-product__price span').text(numberMask(productPriceMask));

    $('.accessories-product__desc-check').on('click', function () {
        let a = $(this).closest('.accessories-product__desc').find('.accessories-product__desc-text').hasClass('accessories-product__desc-text-active');
        $(this).closest('.accessories-product__desc').find('.accessories-product__desc-text').toggleClass('accessories-product__desc-text-active');
        if (a ? $(this).text('Посмотреть описание') : $(this).text('Скрыть'));
    });

    $('.product-btn').on('click', function () {
        let a = $(this).closest('.accessories-product').find('.accessories-product__title').text();
        let b = $(this).closest('.accessories-product').find('.accessories-product__img img').attr('src');
        let c = $(this).closest('.accessories-product').find('.input-quantity').val();
        let d = $(this).closest('.accessories-product').find('.accessories-product__price span').text().replace(/\s+/g, '');



        console.log(d);

        $('.modal').find('.input-product-name').val(a);
        $('.modal').find('.modal-product__title').text(a);
        $('.modal').find('.modal-product__img img').attr('src', b);

        $('.modal').find('.modal-product__count').text(c + ' штук');
        $('.modal').find('.input-product-count').val(c + ' штук');

        $('.modal').find('.modal-product__price span').text(numberMask(c * d));
        $('.modal').find('.input-product-price').val(numberMask(c * d));

    });

    //maps

    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [55.36307856936506, 50.66942850000002],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),

            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '',
                iconImageSize: [30, 42],
                iconImageOffset: [-5, -38]
            }),

            myPlacemarkWithContent = new ymaps.Placemark([55.36307856936506, 50.66942850000002], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'СуперНова',
                iconContent: '12'
            }, {
                iconLayout: 'default#imageWithContent',
                iconImageHref: 'img/location.png',
                iconImageSize: [53, 76],
                iconImageOffset: [-24, -24],
                iconContentOffset: [15, 15],
                iconContentLayout: MyIconContentLayout
            });

        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent);
    });

});