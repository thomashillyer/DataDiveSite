// @koala-prepend "../../vendor/jquery/jquery.js"
// @koala-prepend "../../vendor/tether/tether.js"
// @koala-prepend "../../vendor/bootstrap/js/bootstrap.js"

// @koala-prepend "../../vendor/theme/js/jqBootstrapValidation.js"
// @koala-prepend "../../vendor/theme/js/contact_me.js"



// Scrolls to the selected menu item on the page
/*$(function() {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$("#nav ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});*/


// @koala-prepend "../../vendor/countdown/jquery.countdown.js"
$('h3#countdown').countdown("2017/11/17 18:00:00").on('update.countdown', function(event) {
        var format = '%H:%M:%S';
        if (event.offset.totalDays > 0) {
            format = '%-d day%!d ' + format;
        }
        if (event.offset.weeks > 0) {
            format = '%-w week%!w ' + format;
        }
        $(this).html(event.strftime(format));
    })
    .on('finish.countdown', function(event) {
        $(this).html('DataDive HAS STARTED!').hide();

    });

//@koala-prepend "../../vendor/particleground/jquery.particleground.js"
$('#header').particleground();