$(document).ready( function(){
    $('#slides').superslides({
        animation:'fade',
        play: 4000,
        pagination:false
    })

    var typed = new Typed('.typed', {
        strings: ['<i>Software</i> Engineer', 'Web Developer.'],
        typeSpeed: 70,
        backSpeed: 20,
        backDelay: 500,
        startDelay: 1000,
        loop: true,
        cursorChar: '_',
      });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    var skillsTopOffset = $(".skillsSection").offset().top;

	$(window).scroll(function() {

		if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#fff',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
		    });
			

		}
    });
});

