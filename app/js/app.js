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
        navText: ['<img src="/img/icon/arrow-slider-left.svg" alt="">', '<img src="/img/icon/arrow-slider-right.svg" alt="">'],
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
        navText: ['<img src="/img/icon/header-left.svg" alt="">', '<img src="/img/icon/header-right.svg" alt="">'],
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

    //slide design

    $('.design-slide').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        smartSpeed: 400,
        navText: ['<img src="/img/icon/arrow-slider-left.svg" alt="">', '<img src="/img/icon/arrow-slider-right.svg" alt="">'],
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
        navText: ['<img src="/img/icon/arrow-slider-left.svg" alt="">', '<img src="/img/icon/arrow-slider-right.svg" alt="">'],
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

    $('.services__item').on('click', function () {
        let a = $(this).find('.services__title').text();
        $('#modal-service').find('.modal__title').text(a);
        $('#modal-service').find('.input-service-name').val(a);
    });

    // ** Slide

    $('.modal-slider__slide').owlCarousel({
        loop: false,
        dots: false,
        margin: 1,
        mouseDrag: false,
        nav: true,
        smartSpeed: 400,
        URLhashListener: true,
        startPosition: 'URLHash',
        navText: ['<img src="/img/icon/arrow-slider-left.svg" alt="">', '<img src="/img/icon/arrow-slider-right.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.modal-slider__slide').trigger('refresh.owl.carousel');

    $('#modal-slider .owl-next').on('click', function () {
        $('.owl-slider-btn .col-lg-2').find('.owl-slider-btn__active').closest('.col-lg-2').next().find('.owl-slider-btn__item').addClass('owl-slider-btn__active');
        $('.owl-slider-btn .col-lg-2').find('.owl-slider-btn__active').closest('.col-lg-2').prev().find('.owl-slider-btn__item').removeClass('owl-slider-btn__active');
    });

    $('#modal-slider .owl-prev').on('click', function () {
        $('.owl-slider-btn .col-lg-2').find('.owl-slider-btn__active').closest('.col-lg-2').prev().find('.owl-slider-btn__item').addClass('owl-slider-btn__active');
        $('.owl-slider-btn .col-lg-2').find('.owl-slider-btn__active').closest('.col-lg-2').next().find('.owl-slider-btn__item').removeClass('owl-slider-btn__active');
    });

    $('.owl-slider-btn__item').on('click', function () {
        $(this).closest('.owl-slider-btn').find('.owl-slider-btn__active').removeClass('owl-slider-btn__active');
        $(this).addClass('owl-slider-btn__active');
        $('.modal-slider__slide').trigger('refresh.owl.carousel');
    });

    // ** End slide

    //  ** Скрыть список

    $('.configurator-top-block__all-radio').each(function () {
        $(this).find('.configurator-top-block__radio-item').slice(3).hide();
    });

    $('.configurator-top-block__open-list').on('click', function () {
        $(this).closest('.configurator-top-block__block').find('.configurator-top-block__radio-item').toggleClass('active');
        $(this).toggleClass('configurator-top-block__open-list-active');
        $(this).find('span').toggleClass('name');
        $(this).find('span').hasClass('name') ? $(this).find('span').text('Свернуть список') : $(this).find('span').text('Раскрыть полный список');
    });

    // ** End скрыть список

    // ** tooltip

    $('.info-slider').owlCarousel({
        loop: false,
        dots: false,
        margin: 1,
        nav: true,
        smartSpeed: 400,
        URLhashListener: true,
        startPosition: 'URLHash',
        navText: ['<img src="/img/icon/tool-ar-left.svg" alt="">', '<img src="/img/icon/tool-ar-right.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            }
        }
    });

    // ** End tooltip

    // ** Basket  

    $('.configurator-top-block__radio-item').on('click', function () {

        let id = $(this).closest('.configurator-top-block__block').data('id');
        let name = $(this).find('.text').text();
        let price = $(this).find('.price').text();

        $('.configurator-top-block__list-item').each(function () {

            $(this).find('.configurator-top-block__list-option').each(function () {

                let enId = $(this).data('id');

                if (id === enId) {
                    $(this).find('.text').text(name);
                    $(this).find('.price').text(price);
                }

            });

        });

    });

    $('.configurator-top-block__color-item').on('click', function () {

        let colorName = $(this).find('input').val();
        let color = $(this).find('.color').attr('style');
        let price = $(this).closest('.configurator-top-block__color-wr').prev().find('.configurator-top-block__title-price').text();
        let id = $(this).closest('.configurator-top-block__color-wr').data('id');

        $('.configurator-top-block__list-item-color .configurator-top-block__list-option').each(function () {

            let enId = $(this).data('id');

            console.log(enId);

            if (id === enId) {
                $(this).find('.text').text(colorName);
                $(this).find('.price').text(price);
                $(this).find('.configurator-top-block__list-color').attr('style', color);
            }

        });

    });


    // ** End Basket

});