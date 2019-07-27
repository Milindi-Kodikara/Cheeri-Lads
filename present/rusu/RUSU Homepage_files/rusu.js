$(function(){
  $('body').delegate('.pagination li a','click',function(){
    $('#back-to-top').click();
  });
   handleEqualHeightColumns__Images();
   handleFullscreen();
   handleValignMiddle();
   handleHeader2();
   handleSlider();
   handleOwlCarousel();
   handleSearch2();
  
  if($('.rusu-heading h1').text()=='Clubs Search'){
    $('.rusu-header').css('background-image','url(/files/design/images/ClubsSearch_Header.jpg)');
  }

});

 function handleSearch2() {
        jQuery('.search-button').click(function () {
          console.log("here");
            jQuery('.header-v5 .search-open').slideDown();
        });

        jQuery('.search-close').click(function () {
            jQuery('.header-v5 .search-open').slideUp();
        });

        jQuery(window).scroll(function(){
          if(jQuery(this).scrollTop() > 1) jQuery('.header-v5 .search-open').fadeOut('fast');
        });
    }
function handleOwlCarousel() {
        $('#owl-news').owlCarousel({
            loop: true,
            nav: false,
            navText:['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>'],
            dots: false,
            lazyLoad: true,
            responsiveClass: true,
            autoheight: false,
            autoplay : 5000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                1024: {
                    items: 3,
                    margin: 55
                },
                1440: {
                    items: 3,
                    margin: 55,
                    stagePadding: 200
                },
                2560: {
                    items: 3,
                    margin: 70,
                    stagePadding: 400
                }
            }
        });
      
      
      $('#owl-events').owlCarousel({
            loop: true,
            nav: true,
            navText:['<i class="fa fa-chevron-circle-left fa-3x"></i>','<i class="fa fa-chevron-circle-right fa-3x"></i>'],
            dots: false,
            lazyLoad: true,
            responsiveClass: true,
            autoheight: true,
            autoplay : 5000,
            center: true,
            items: 1,
            responsive: {
             	0: {
                    margin: 5
                },
              	768: {
                    margin: 5
                }
            }
        });
      
      var counter = 0;
      $('#owl-events .owl-item:not(.cloned) div.item-image > span').each(function(i, obj){
        counter++;
        $(this).html(('00'+(counter)).slice(-2)+'.');
      });
      
      $('#owl-about').owlCarousel({
            loop: true,
            nav: true,
            navText:['<i class="fa fa-chevron-circle-left fa-3x"></i>','<i class="fa fa-chevron-circle-right fa-3x"></i>'],
            dots: false,
            lazyLoad: true,
            responsiveClass: true,
            autoheight: true,
            autoplay : 5000,
            items: 1
        });
      
      counter = 0;
      $('#owl-about div.owl-item:not(.cloned) > div > span').each(function(i, obj){
        counter++;
        $(this).html(('00'+(counter)).slice(-2)+'.');
      });
    };

function handleSlider() {
        var PromoSlider = new MasterSlider();
        PromoSlider.setup('masterslider-promo', {
            width: 1440,    
            height: 660,
            space: 0,
            speed: 10,
            layout: "fullwidth",
            loop: true,
            preload: 0,
            autoplay: true,
            swipe: true
        });
  PromoSlider.control('bullets', { autohide:false, dir:"h" });
    }
 function handleHeader2() {
        // jQuery to collapse the navbar on scroll
        if ($('.navbar').offset().top > 50) {
            $('.navbar-fixed-top').addClass('top-nav-collapse');
        }
        $(window).scroll(function () {
			
            if ($('.navbar').offset().top > 50) {
                $('.navbar-fixed-top').addClass('top-nav-collapse');
            } else {
                $('.navbar-fixed-top').removeClass('top-nav-collapse');
            }
        });

        var $offset = 0;
        if ($('.one-page-nav-scrolling').hasClass('one-page-nav__fixed')) {
            $offset = $(".one-page-nav-scrolling").height() + 8;
        }
        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.page-scroll a').bind('click', function (event) {
            var $position = $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({
                scrollTop: $position - $offset
            }, 600);
            event.preventDefault();
        });

        var $scrollspy = $('body').scrollspy({ target: '.one-page-nav-scrolling', offset: $offset + 2 });

        // Collapse Navbar When It's Clickicked
        $(window).scroll(function () {
            $('.navbar-collapse.in').collapse('hide');
        });
    }
  function handleEqualHeightColumns__Images() {
        var EqualHeightColumns__Images = function () {
            $('.equal-height-columns-v2').each(function () {
                var heights = [];
                $('.equal-height-column-v2', this).each(function () {
                    $(this).removeAttr('style');
                    heights.push($(this).height()); // Write column's heights to the array
                });
                $('.equal-height-column-v2', this).height(Math.max.apply(Math, heights)); // Find and set max

                $('.equal-height-column-v2', this).each(function () {
                    if ($(this).hasAttr('data-image-src')) {
                        $(this).css('background', 'url(' + $(this).attr('data-image-src') + ') no-repeat scroll 50% 0 / cover');
                    }
                });
            });
        }
        $('.equal-height-columns-v2').ready(function () {
            EqualHeightColumns__Images();
            $('.owl2-carousel-v1').ready(function () {
                EqualHeightColumns__Images();
                handleValignMiddle();
            });
        });
        $(window).resize(function () {
            EqualHeightColumns__Images();
        });
    }
                               
 function handleValignMiddle() {
        $(document).ready(function () {
            $('.valign__middle').each(function () {
                $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
            });
        });
        $(window).resize(function () {
            $('.valign__middle').each(function () {
                $(this).css('padding-top', $(this).parent().height() / 2 - $(this).height() / 2);
            });
        });
    }
 function handleFullscreen() {
        var WindowHeight = $(window).height();
        var HeaderHeight = 0;

        if ($(document.body).hasClass('promo-padding-top')) {
            HeaderHeight = $('.header').height();
        } else {
            HeaderHeight = 0;
        }

        $('.fullheight').css('height', WindowHeight - HeaderHeight);

        $(window).resize(function () {
            var WindowHeight = $(window).height();
            $('.fullheight').css('height', WindowHeight - HeaderHeight);
        });
    }                           
                               