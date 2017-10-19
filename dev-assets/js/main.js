// @koala-prepend "../../vendor/jquery/jquery.js"
// @koala-prepend "../../vendor/tether/tether.js"
// @koala-prepend "../../vendor/bootstrap/js/bootstrap.js"

/*
// no@.knoala-prepend "../../vendor/theme/js/jqBootstrapValidation.js"
// no@.knoala-prepend "../../vendor/theme/js/contact_me.js"
*/


// Scrolls to the selected menu item on the page
$("a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    var navOffset = $('#nav').height();

    var scrollOffset = $(hash).offset().top - navOffset;

    // animate
    $('html, body').animate({
        scrollTop: scrollOffset
    }, 600, function() {

        // when done, add hash to url
        // (default click behaviour)
        //window.location.hash = hash;
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