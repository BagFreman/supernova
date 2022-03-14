$(function () {

    function triplets(str) {
        return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u202f');
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


    // product cart

    let i = 1;

    $('.accessories-product__price').each(function () {
        let productPriceMask = $(this).find('span').text();
        $(this).find('span').text(triplets(productPriceMask));
        i++;
    });


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

        $('.modal').find('.input-product-name').val(a);
        $('.modal').find('.modal-product__title').text(a);
        $('.modal').find('.modal-product__img img').attr('src', b);

        $('.modal').find('.modal-product__count').text(c + ' штук');
        $('.modal').find('.input-product-count').val(c + ' штук');
        $('.modal').find('.modal-product__price span').text(triplets(c * d));
        $('.modal').find('.input-product-price').val(c * d);

    });

    // modal-service

    $('.btn-service').on('click', function () {
        let a = $(this).closest('.services-page-service__item').find('.services-page-service__text').text();
        $('.modal-service').find('.input-service-name').val(a);
    });

    // slide service

    $('.service-carousel').owlCarousel({
        loop: true,
        margin: 70,
        nav: true,
        navText: ['<img src="img/icon/arrow-slider-left.svg" alt="">', '<img src="img/icon/arrow-slider-right.svg" alt="">'],
        dotsEach: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    let dotNumber = 1;

    $('.service-carousel .owl-dot').each(function () {
        $(this).find('span').html('0' + dotNumber); dotNumber++;
    });

    // slide header

    $('.header-slide').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<img src="img/icon/header-left.svg" alt="">', '<img src="img/icon/header-right.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    // slide boat

    $('.boat-slide, .test-drive-slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 400,
        navText: ['<img src="img/icon/arrow-slider-left.svg" alt="">', '<img src="img/icon/arrow-slider-right.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    let boatModalNumber = 0;
    let boatModal = [
        'A34',
        'F35',
        'S36',
        'G37',
        'V67'
    ]

    $('.boat-slide .owl-dot, .test-drive-slide .owl-dot').each(function () {
        $(this).find('span').html(boatModal[boatModalNumber]); boatModalNumber++;
    });

    //slide design

    $('.design-slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 400,
        navText: ['<img src="img/icon/arrow-slider-left.svg" alt="">', '<img src="img/icon/arrow-slider-right.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.design-slide .owl-dot').each(function () {
        $(this).find('span').html('0' + dotNumber); dotNumber++;
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

    $(".contac-form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('.modal__open').css('display', 'none');
            $('.modal__thanks').css('display', 'block');
            $('#test-drive').modal('show');
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
            $
        });
        return false;
    });

    // slide certificates

    $('.service-certificates').owlCarousel({
        loop: true,
        margin: 25,
        nav: true,
        smartSpeed: 400,
        dotsEach: true,
        stagePadding: 100,
        navText: ['<img src="img/icon/arrow-slider-left.svg" alt="">', '<img src="img/icon/arrow-slider-right.svg" alt="">'],
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            600: {
                items: 1,
                stagePadding: 0,
            },
            1000: {
                items: 3
            }
        }
    })

    let dotNumbers = 1;

    $('.service-certificates .owl-dot').each(function () {
        $(this).find('span').html('0' + dotNumbers); dotNumbers++;
    });


    // configurator

    let updateConfiguration = $(this);

    updateConfiguration.change(function () {
        let a = $('.configurator-option__step-bar-item-active').attr('data-num');
        let b = $('.configurator-option__step-bar-item-active span').text();
        let i = 1;

        $('.configurator-option__step .count').html(a);
        $('.configurator-option__title-block').html(b);

        $('.configurator-top-block').each(function () {
            let dataBlock = $(this).attr('data-block');
            i++;
            if (a == dataBlock) {
                $(this).css('display', 'block')
            } else {
                $(this).css('display', 'none');
            }
        });
    });


    $('.configurator-option__step-bar-item').on('click', function () {
        $(this).closest('.configurator-option__step-bar-wr').find('.configurator-option__step-bar-item-active').removeClass('configurator-option__step-bar-item-active');
        $(this).addClass('configurator-option__step-bar-item-active');
        updateConfiguration.change();
    });

    $('.configurator-top-block__radio-item').on('click', function () {
        $(this).closest('.configurator-top-block__all-radio').find('.configurator-top-block__radio-item-active').removeClass('configurator-top-block__radio-item-active');
        $(this).addClass('configurator-top-block__radio-item-active');
    });

    $('.configurator-top-block__open-list').on('click', function () {
        $(this).toggleClass('configurator-top-block__open-list-active');
        $(this).closest('.configurator-top-block__block').find('.configurator-top-block__all-radio').toggleClass('configurator-top-block__all-radio-active');
    });

    $('.configurator-top-block__btn-next').on('click', function () {
        $('.configurator-option__step-bar-item-active').next().addClass('configurator-option__step-bar-item-active');
        $('.configurator-option__step-bar-item-active').prev().removeClass('configurator-option__step-bar-item-active');
        updateConfiguration.change();
    });

    $('.configurator-top-block__btn-prev').on('click', function () {
        $('.configurator-option__step-bar-item-active').prev().addClass('configurator-option__step-bar-item-active');
        $('.configurator-option__step-bar-item-active').next().removeClass('configurator-option__step-bar-item-active');
        updateConfiguration.change();
    });

    $('.configurator-top-block__color-item').on('click', function () {
        $(this).closest('.configurator-top-block__color-wr').find('.configurator-top-block__color-item-active').removeClass('configurator-top-block__color-item-active');
        $(this).addClass('configurator-top-block__color-item-active');
    });

    $('.services__item').on('click', function () {
       let a =  $(this).find('.services__title').text();
       $('#modal-service').find('.modal__title').text(a);
       $('#modal-service').find('.input-service-name').val(a);
    });

    // ** Slide

    $('.owl-slider-btn__item').on('click', function() {
        $(this).closest('.owl-slider-btn').find('.owl-slider-btn__active').removeClass('owl-slider-btn__active');
        $(this).addClass('owl-slider-btn__active');
    });

    // ** end Slide

});