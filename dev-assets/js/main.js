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
});*/
$("a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    var navOffset = $('#nav').height();

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top - navOffset
    }, 600, function() {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});


//@koala-prepend "../../vendor/particleground/jquery.particleground.js"
$('#header-text').particleground({
    dotColor: '#219AFF',
    lineColor: '#FFFFFF',
    /*particleRadius: 5,*/
    density: 10000,
    proximity: 110,

});

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});