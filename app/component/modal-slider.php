<div class="modal fade modal-slider" id="modal-slider" tabindex="-1" aria-labelledby="modal-payment" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal__close" data-dismiss="modal" aria-label="Close">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L15 15.5M1 15.5L15 1.5" stroke="#C2C2C2" stroke-width="2" stroke-linecap="round" />
                </svg>
            </div>
            <div class="owl-carousel owl-theme modal-slider__slide">
                <div class="modal-slider__slide-item">
                    <img src="img/t-service/t-service-4.png" data-hash="t-service-1" alt="">
                </div>
                <div class="modal-slider__slide-item">
                    <img src="img/t-service/t-service-4.png" data-hash="t-service-2" alt="">
                </div>
            </div>
            <div class="owl-slider-btn">
                <div class="row">
                    <div class="col-lg-2">
                        <a href="#t-service-1" class="owl-slider-btn__item owl-slider-btn__active">
                            <img src="img/t-service/t-service-4.png" alt="">
                        </a>
                    </div>
                    <div class="col-lg-2">
                        <a href="#t-service-2" class="owl-slider-btn__item ">
                            <img src="img/t-service/t-service-4.png" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $('.modal-slider__slide').owlCarousel({
        loop: false,
        dots: false,
        margin: 1,
        nav: true,
        smartSpeed: 400,
        URLhashListener:true,
        startPosition: 'URLHash',
        navText: ['<img src="img/icon/arrow-slider-left.svg" alt="">', '<img src="img/icon/arrow-slider-right.svg" alt="">'],
        responsive: {
            0: {
                items: 1
            }
        }
    })
</script>