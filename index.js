document.addEventListener('DOMContentLoaded', function () {
    $(document).ready(function () {
        $('.slider').slick({
            arrows: false, //если не нужны по дизайну
            dots: true,
            adaptiveHeight: true,
            adaptiveWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    adaptiveHeight: false,
                    adaptiveWidth: true,
                }
            }]

        });
    })
})