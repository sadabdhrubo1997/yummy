$(document).ready(function () {



    // Responsive html font size
    const iw = window.innerWidth;
    const rootScreenWidth = 1366;
    const rootFontPercentage = 44.46;     
   
    if (iw <= 1366) {
        $('#my_html').attr("style", `font-size:${rootFontPercentage}%`);
        
    }else{
        let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
        $('#my_html').attr("style", `font-size:${currentFontSize}%`);    
    }
        
    // Responsive html font size end





    // hambarger menu
    $('#hambarger').click(function () {
        $(this).toggleClass('active');
        $('#mobile_nav_menu').toggleClass('active');
    })
    $('#mobile_nav_menu_close_icon').click(function () {
        $('#hambarger').removeClass('active');
        $('#mobile_nav_menu').removeClass('active');
    })

    $('#mobile_nav_menu ul li').click(function () {
        $('#hambarger').removeClass('active');
        $('#mobile_nav_menu').removeClass('active');
    })
    // hambarger menu end


    // header slider  
    var headerSlider = $('#header_slider_wrapper');
    if (headerSlider.length) {
        var headerCurrentSlide;
        var headerSlidesCount;
        var updateSliderCounter = function (slick) {
            headerCurrentSlide = slick.slickCurrentSlide() + 1;
            headerSlidesCount = slick.slideCount;
            let headerSliderItemTitle = $('.slick-current .title').text();
            if (headerCurrentSlide < 10) {
                headerCurrentSlide = '0' + headerCurrentSlide;
            }
            if (headerSlidesCount < 10) {
                headerSlidesCount = '0' + headerSlidesCount;
            }
            $("#header_slider_btn_area .display_area .count .current_slide").html(headerCurrentSlide);
            $("#header_slider_btn_area .display_area .count .total_slides").html(headerSlidesCount);
            $("#header_slider_btn_area .display_area .title").html(headerSliderItemTitle);
        };

        headerSlider.on('init', function (event, slick) {
            updateSliderCounter(slick);
        });
        headerSlider.on('afterChange', function (event, slick, headerCurrentSlide) {
            updateSliderCounter(slick, headerCurrentSlide);
        });
        $('#header_slider_wrapper').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            infinite: true,
            autoplay: false,
            arrows: true,
            draggable: false,
            dots: false,
            prevArrow: $('#header_slider_left_arrow'),
            nextArrow: $('#header_slider_right_arrow'),
        })
    }
    // header slider end


    // yummy box slider    
    var yummyBoxSlider = $('#yummy_box_slider_wrapper');
    if (yummyBoxSlider.length) {
        var yummyBoxCurrentSlide;
        var yummyBoxSlidesCount;
        var updateSliderCounter = function (slick) {
            yummyBoxCurrentSlide = slick.slickCurrentSlide() + 1;
            yummyBoxSlidesCount = slick.slideCount;
            let sliderItemTitle = $('.slick-current .title').text();
            if (yummyBoxCurrentSlide < 10) {
                yummyBoxCurrentSlide = '0' + yummyBoxCurrentSlide;
            }
            if (yummyBoxSlidesCount < 10) {
                yummyBoxSlidesCount = '0' + yummyBoxSlidesCount;
            }
            $("#yummy_box_slider_wrapper .single_slider_item .total").html(" / " + yummyBoxSlidesCount);
        };

        yummyBoxSlider.on('init', function (event, slick) {
            updateSliderCounter(slick);
        });
        yummyBoxSlider.on('afterChange', function (event, slick, yummyBoxCurrentSlide) {
            updateSliderCounter(slick, yummyBoxCurrentSlide);
        });

        $('#yummy_box_slider_wrapper').slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            speed: 1000,
            infinite: true,
            autoplay: false,
            arrows: true,
            draggable: false,
            dots: false,
            // swipe: true,
            // touchMove: false,
            // centerMode: true,
            // centerPadding: '33%',
            // lazyLoad: 'progressive',
            prevArrow: $('#yummy_box_slider_left_arrow'),
            nextArrow: $('#yummy_box_slider_right_arrow'),
            responsive: [{
                breakpoint: 577,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }]
        })
    }

    //  favourite / unfavourite
    $('#yummy_box_slider_wrapper .icon_wrapper').click(function () {
        $(this).toggleClass('active');
    })
    // yummy box slider end



    // testimonial slider
    var testimonialSlider = $('#testimonial_slider');

    if (testimonialSlider.length) {
        var testimonialCurrentSlide;
        var testimonialSlidesCount;
        var updateSliderCounter = function (slick) {
            testimonialCurrentSlide = slick.slickCurrentSlide() + 1;
            testimonialSlidesCount = slick.slideCount;

            $(" #testimonial_slide_count").html(testimonialCurrentSlide + " / " + testimonialSlidesCount);

            if (window.innerWidth > 575) {
                if (testimonialCurrentSlide < 2) {
                    $('#testimonial_slider_prev').attr("disabled", "disabled");
                } else {
                    $('#testimonial_slider_prev').removeAttr("disabled");
                }

                if (testimonialCurrentSlide === testimonialSlidesCount) {
                    $('#testimonial_slider_next').attr("disabled", "disabled");
                }
                if (testimonialCurrentSlide < testimonialSlidesCount) {
                    $('#testimonial_slider_next').removeAttr("disabled");
                }
            }
        };

        testimonialSlider.on('init', function (event, slick) {
            updateSliderCounter(slick);
        });
        testimonialSlider.on('afterChange', function (event, slick, testimonialCurrentSlide) {
            updateSliderCounter(slick, testimonialCurrentSlide);
        });
    }

    $("#testimonial_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        infinite: true,
        autoplay: false,
        arrows: true,
        draggable: false,
        dots: false,
        swipe: true,
        touchMove: true,
        centerMode: true,
        centerPadding: '33.3%',
        lazyLoad: 'progressive',
        prevArrow: $('#testimonial_slider_prev'),
        nextArrow: $('#testimonial_slider_next'),
        responsive: [{
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                centerMode: false,
                centerPadding: '0',
            }
        }]
    });

    if (window.innerWidth > 576) {

        $("#testimonial_slider .item.slick-slide").css({
            'transition': '1s',
            'webkit-transition': '1s',
            'moz-transition': '1s',
            'ms-transition': '1s',
            'o-transition': '1s',
        });

        $("#testimonial_slider .item.slick-slide").siblings(".slick-active").prev().css({
            'transition': '1s',
            'webkit-transition': '1s',
            'moz-transition': '1s',
            'ms-transition': '1s',
            'o-transition': '1s',
            'transform': 'scale(1)',
            'webkit-transform': 'scale(1)',
            'moz-transform': 'scale(1)',
            'ms-transform': 'scale(1)',
            'o-transform': 'scale(1)',
            'opacity': '1'
        });

        $("#testimonial_slider .item.slick-slide").siblings(".slick-active").css({
            'transition': '1s',
            'webkit-transition': '1s',
            'moz-transition': '1s',
            'ms-transition': '1s',
            'o-transition': '1s',
            'transform': 'scale(.85)',
            'webkit-transform': 'scale(.85)',
            'moz-transform': 'scale(.85)',
            'ms-transform': 'scale(.85)',
            'o-transform': 'scale(.85)',
            'opacity': '.75'
        });

        $("#testimonial_slider .item.slick-slide").siblings(".slick-active").next().css({
            'transition': '1s',
            'webkit-transition': '1s',
            'moz-transition': '1s',
            'ms-transition': '1s',
            'o-transition': '1s',
            'transform': 'scale(.7)',
            'webkit-transform': 'scale(.7)',
            'moz-transform': 'scale(.7)',
            'ms-transform': 'scale(.7)',
            'o-transform': 'scale(.7)',
            'opacity': '.35'
        });

        $(".testimonial_slider_button").click(() => {
            $("#testimonial_slider .item.slick-slide").siblings(".slick-active").prev().css({
                'transition': '1s',
                'webkit-transition': '1s',
                'moz-transition': '1s',
                'ms-transition': '1s',
                'o-transition': '1s',
                'transform': 'scale(1)',
                'webkit-transform': 'scale(1)',
                'moz-transform': 'scale(1)',
                'ms-transform': 'scale(1)',
                'o-transform': 'scale(1)',
                'opacity': '1'
            });
            $("#testimonial_slider .item.slick-slide").siblings(".slick-active").css({
                'transition': '1s',
                'webkit-transition': '1s',
                'moz-transition': '1s',
                'ms-transition': '1s',
                'o-transition': '1s',
                'transform': 'scale(.85)',
                'webkit-transform': 'scale(.85)',
                'moz-transform': 'scale(.85)',
                'ms-transform': 'scale(.85)',
                'o-transform': 'scale(.85)',
                'opacity': '.75'
            });
            $("#testimonial_slider .item.slick-slide").siblings(".slick-active").next().css({
                'transition': '1s',
                'webkit-transition': '1s',
                'moz-transition': '1s',
                'ms-transition': '1s',
                'o-transition': '1s',
                'transform': 'scale(.7)',
                'webkit-transform': 'scale(.7)',
                'moz-transform': 'scale(.7)',
                'ms-transform': 'scale(.7)',
                'o-transform': 'scale(.7)',
                'opacity': '.35'
            });
        })
    }
    // testimonial slider end

    // article slider for small devices

    if (window.innerWidth < 577) {
        $('#article_section_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            infinite: true,
            autoplay: false,
            arrows: false,
            draggable: true,
            dots: false,
            centerMode:true, 
            centerPadding: "10%",
        })
    }
    // article slider for small devices end
});