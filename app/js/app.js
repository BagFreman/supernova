$(function () {

    //phone mask

    $('.tel').mask('+7 (000) 000 - 00 - 00')

    // event click burger menu

    $('.burger').on('click', function () {
        $(this).toggleClass('burger-active');
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('body').toggleClass('body-fix');
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