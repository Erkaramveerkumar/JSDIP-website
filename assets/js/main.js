(function ($) {
    "use strict";
    

// Global State Object
var state = {};
window.state = state;
var windows = $(window);
var screenSize = windows.width();
var sticky = $('.header-sticky');
var $html = $('html');
var $body = $('body');
    
    
/*--
    Menu Sticky
-----------------------------------*/
var windows = $(window);
var screenSize = windows.width();
var sticky = $('.header-sticky');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    }else{
        sticky.addClass('is-sticky');
    }
});
    
    
/*===========================================
    Submenu viewport position     
=============================================*/

if ($(".has-dropdown").find('.sub-menu').length) {
    var elm = $(".has-dropdown").find('.sub-menu');

    elm.each(function() {
        var off = $(this).offset();
        var l = off.left;
        var w = $(this).width();
        var docH = windows.height();
        var docW = windows.width() - 10;
        var isEntirelyVisible = (l + w <= docW);

        if (!isEntirelyVisible) {
            $(this).addClass('left');
        }
    });
}
    
    

/*--
    Mobile Menu
------------------------*/
var mainMenuNav = $('.main-menu');
mainMenuNav.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});


/*--
    Header Search
------------------------*/
var searchToggle = $('.search-toggle');
var searchContainer = $('.header-search-container');

searchToggle.on('click', function(){
    
    if( !$(this).hasClass('active') ) {
        $(this).addClass('active').find('i').removeClass('icofont-search-alt-1').addClass('icofont-close');
        searchContainer.slideDown();
    } else {
        $(this).removeClass('active').find('i').removeClass('icofont-close').addClass('icofont-search-alt-1');
        searchContainer.slideUp();
    }
    
});
    
/*=============================
    Shop filter active 
============================= */
$('.filter-active').on('click', function(e) {
    e.preventDefault();
    $('.filter-wrapper').slideToggle();
})
   
/*--
    Header Cart
------------------------*/
var headerCart = $('.header-cart');
var closeCart = $('.close-cart, .cart-overlay');
var miniCartWrap = $('.mini-cart-wrap');

headerCart.on('click', function(e){
    e.preventDefault();
    $('.cart-overlay').addClass('visible');
    miniCartWrap.addClass('open');
});
closeCart.on('click', function(e){
    e.preventDefault();
    $('.cart-overlay').removeClass('visible');
    miniCartWrap.removeClass('open');
});
    
/*--
    Hero Slider
--------------------------------------------*/
var heroSlider = $('.hero-slider');
heroSlider.slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false
});
    
 
$("#search-overlay-trigger").on('click', function(){
    $("#search-overlay").addClass("active");
    $body.addClass('no-overflow');
});

$("#search-close-trigger").on('click', function(){
    $("#search-overlay").removeClass("active");
    $body.removeClass('no-overflow');
});
    
/*--
	Product Slider
-----------------------------------*/
$('.about-properties-slider').slick({
    arrows: false,
    dots: true,
    autoplay: false,
    infinite: false,
    fade: true,
    slidesToShow: 1,
});

/*--
    Product Slider
-----------------------------------*/
$('.product-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:true,
    nextArrow: true,
    prevArrow: '<button type="button" class="slick-prev"> <i class="fa fa-angle-left"></i> </button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

/* Blog Slider Active */
$('.testimonial-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    autoplay: false,
    arrows: true,
    prevArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-next"><i class="fa fa-long-arrow-right"></i></button>',
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
    

/* Brand Slider Active */
$('.brand-active').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    autoplay: false,
    arrows: false,
    prevArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-prev"><i class="fa fa-long-arrow-left"></i></button>',
    nextArrow: '<button class="in-sliderarrow-arrow in-sliderarrow-next"><i class="fa fa-long-arrow-right"></i></button>',
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});
    

/*--
	Video Popup
-----------------------------------*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
    
/*--
	Image Popup
-----------------------------------*/
var imagePopup = $('.image-popup, .big-image-popup');
imagePopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
});
    
/*--
	Gallery Popup
-----------------------------------*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
    },
});

/*--
	Counter UP
-----------------------------------*/
var counter = $('.counter-active , .counter-active-2');
counter.counterUp({
    delay: 20,
    time: 2000
});
    

    
/*--
	MailChimp
-----------------------------------*/
$('#mc-form').ajaxChimp({
	language: 'en',
	callback: mailChimpResponse,
	// ADD YOUR MAILCHIMP URL BELOW HERE!
	url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

});
function mailChimpResponse(resp) {
	
	if (resp.result === 'success') {
		$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		$('.mailchimp-error').fadeOut(400);
		
	} else if(resp.result === 'error') {
		$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	}  
}

/*--
    Scroll Up
-----------------------------------*/
$.scrollUp({
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
    scrollText: '<i class="fa fa-angle-double-up"></i>',
});
    
/*--
    Nice Select
------------------------*/
$('.nice-select').niceSelect()
    
/*--
	Price Range Slider
------------------------*/
$('#price-range').slider({
    range: true,
    min: 0,
    max: 20000,
    step: 10,
    values: [2400, 10320],
   slide: function( event, ui ) {
    
	$('.ui-slider-handle:eq(0)').html( '<span>' + '$' + ui.values[ 0 ] + '</span>');
	$('.ui-slider-handle:eq(1)').html( '<span>' + '$' + ui.values[ 1 ] + '</span>');
    
   }
});
$('.ui-slider-handle:eq(0)').html( '<span>' + '$' + $( "#price-range" ).slider( "values", 0 ) + '</span>' );
$('.ui-slider-handle:eq(1)').html( '<span>' + '$' + $( "#price-range" ).slider( "values", 1 ) + '</span>' );    
    
 
    
/*----- 
	Shipping Form Toggle
--------------------------------*/ 
$('[data-shipping]').on('click', function(){
    if( $('[data-shipping]:checked').length > 0 ) {
        $('#shipping-form').slideDown();
    } else {
        $('#shipping-form').slideUp();
    }
})
    
/*----- 
	Payment Method Select
--------------------------------*/
$('[name="payment-method"]').on('click', function(){
    
    var $value = $(this).attr('value');

    $('.single-method p').slideUp();
    $('[data-method="'+$value+'"]').slideDown();
    
})
    
/*----- 
	Account Image Upload
--------------------------------*/
$('#account-image-upload').on('change', function () {
  var filename = $(this).val();
  if (/^\s*$/.test(filename)) {
    $(".account-image-label").text("Choose your image"); 
  }
  else {
    $(".account-image-label").text(filename.replace("C:\\fakepath\\", ""));
  }
});
    
/*--
    Google Map
-----------------------------------*/

// Google Map For Single Property Map
$('.googleMap-2').each(function(){
    if($(this).length){
        var $this = $(this);
        var $lat = $this.data('lat');
        var $long = $this.data('long');
        function initialize() {
            var mapOptions = {
                zoom: 12,
                scrollwheel: false,
                center: new google.maps.LatLng($lat, $long),
                styles: [
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#EDE9DE"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#EDE9DE"
                            },
                            {
                                "color": "#777"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 700
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#25A5DE"
                            }
                        ]
                    }
                ] 
            };
            var map = new google.maps.Map(document.getElementById('googleMap-2'), mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                icon: 'assets/images/icons/map.png',
                map: map,
                animation: google.maps.Animation.BOUNCE
            });

        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
});
// Google Map For Conatact Map
$('.contact-map').each(function(){
    if($(this).length){
        var $this = $(this);
        var $lat = $this.data('lat');
        var $long = $this.data('long');
        function initialize() {
            var mapOptions = {
                zoom: 12,
                scrollwheel: false,
                center: new google.maps.LatLng($lat, $long),
                styles: [
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#EDE9DE"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#EDE9DE"
                            },
                            {
                                "color": "#777"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 700
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#25A5DE"
                            }
                        ]
                    }
                ]   
            };
            var map = new google.maps.Map(document.getElementById('contact-map'), mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                icon: 'assets/images/icons/map.png',
                map: map,
                animation: google.maps.Animation.BOUNCE
            });

        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
});

 
})(jQuery);	
