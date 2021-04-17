function initDiscountsSlider(width) {
      var $slider = $('.discounts-list'),
           itemsNum = $slider.children('li').length,
           sliderInited = false,
           w;

      function buildSlider() {
            // extrasmall devices
            if(w <= width && !sliderInited) {
                  $slider.owlCarousel({
                        loop: false,
                        margin: 0,
                        nav: false,
                        navText: ['<svg class="icon-arrow"><use xlink:href="#arrow" /></svg>', '<svg class="icon-arrow"><use xlink:href="#arrow" /></svg>'],
                        dots: true,
                        items: 1,
                        responsiveClass: true,
                        navRewind: false,
                        onInitialized: function() {
                              sliderInited = true;
                        },
                        responsive: {
                              '580': {
                                    items: 2,
                                    margin: 30,
                                    dots: false,
                                    nav: true
                              }
                        }
                  });
            } else if(w > width && sliderInited) {
                  $slider.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
                  $slider.find('.owl-stage-outer').children().unwrap();
                  sliderInited = false;
            }
      }
      
      if($slider.length) {
            w = window.innerWidth;
            buildSlider();

            $(window).on('resize', function() {
                  w = window.innerWidth;
                  buildSlider();
            });
      }
}

function initSlider() {
      var $slider = $('.js-init-slider');
      if($slider.length) {
            $slider.owlCarousel({
                  loop: false,
                  margin: 30,
                  nav: false,
                  navText: ['<svg class="icon-arrow"><use xlink:href="#arrow" /></svg>', '<svg class="icon-arrow"><use xlink:href="#arrow" /></svg>'],
                  dots: true,
                  items: 1,
                  responsiveClass: true,
                  navRewind: false,
                  responsive: {
                        '768': {
                              dots: false,
                              nav: true
                        }
                  }
            })
      }
}

function bgLazyLoad() {
      var bLazy = new Blazy({
            selector: '.b-lazy',
            offset: 100
      });
}

$(document).on('ready', function(){
      bgLazyLoad();
      initSlider();
      initDiscountsSlider(1024);
});