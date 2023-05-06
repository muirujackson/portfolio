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
});

