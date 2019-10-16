$(document).ready(function(){

            $('.sidebarBtn').click(function(){
                $('.sidebar').toggleClass('active');
                $('.sidebarBtn').toggleClass('toggle');
            })

    	$(window).on('load',function(){
    		// $('.loader-container').addClass('hidden')
    		$('#status').fadeOut();
    		$('#preload').delay(350).fadeOut('slow');
    		$('body').delay(350).css({'overflow':'visible'});
    	});

    	$('.single-item').slick({
    		appendArrows: $('.clients_btn'),
	    	prevArrow: '<button id="prev" type="button" class="btn btn-juliet clients_btnsl"><img class="left" src="img/right-arrow.svg"></button>',
		    nextArrow: '<button id="next" type="button" class="btn btn-juliet clients_btnsr"><img src="img/right-arrow.svg"></button>',
		    infinite: false,
		    slidesToScroll: 1
    	});

    	$('.multiple-items').slick({

    	appendArrows: $('.work_btn'),
	    prevArrow: '<button id="prev" type="button" class="btn btn-juliet work_btnsl"><img class="left" src="img/right-arrow.svg"></button>',
	    nextArrow: '<button id="next" type="button" class="btn btn-juliet work_btns"><img src="img/right-arrow.svg"></button>',

    	  infinite: false,
    	  slidesToShow: 3,

    	  slidesToScroll: 3
    	});

jQuery.fn.extend({
  onAppearanceAddClass: function(class_to_add) {
    var $window = $( window ),
        window_height = $window.height(),
        array_of_$elements = [];
    this.each(function(i,el) {
      array_of_$elements.push($( el ));
    })
    scrollHandler();
		if (array_of_$elements.length) {
      $window.on('resize', resizeHandler).on('resize', scrollHandler).on('scroll', scrollHandler);
    }
    function resizeHandler() {
      window_height = $window.height();
    }
    function watchProcessedElements(array_of_indexes) {
    	var l, i;
      for (l = array_of_indexes.length, i = l - 1; i > -1; --i) {
        array_of_$elements.splice(array_of_indexes[i], 1);
      }
      if (!array_of_$elements.length) {
        $window.off('resize', resizeHandler).off('scroll', scrollHandler).off('resize', scrollHandler);
      }
    }
    function scrollHandler() {
      var i, l, processed = [];
      for ( l = array_of_$elements.length, i = 0; i < l; ++i ) {
        if ($window.scrollTop() + window_height > array_of_$elements[i].offset().top) {
          array_of_$elements[i].addClass(class_to_add);
          processed.push(i); 
        }
      }
      if (processed.length) {
        watchProcessedElements(processed);
      }
    }
    return this;
  }
})

$('.social').onAppearanceAddClass('animated fadeInLeft delay-4s');

$('.circle').onAppearanceAddClass(' animated bounceInRight');

$('.circle2').onAppearanceAddClass(' animated fadeInDown');

$('.circle3').onAppearanceAddClass(' animated bounceIn');

$('.left_img').onAppearanceAddClass(' animated fadeIn');

$('.all_block_specialized').onAppearanceAddClass('animated bounceInUp test');

$('.baceffect').onAppearanceAddClass('animated fadeInUp   animation-duration: 3s');

$('.effect').onAppearanceAddClass('animated bounceInUp');

	$('.responsive').slick({

	  appendArrows: $('.your-class-arrow'),
	    prevArrow: '<button id="prev" type="button" class="btn btn-juliet btnarrow"><img class="left" src="img/right-arrow.svg"></button>',
	    nextArrow: '<button id="next" type="button" class="btn btn-juliet btnarrow"><img src="img/right-arrow.svg"></button>',

	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow:3,
	  slidesToScroll: 1,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	  ]
	});
})

