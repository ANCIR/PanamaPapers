/**
 * Bootstrap Fancy Fixed Scroll Nav
 * --------------------------------
 * A bootstrap.js plugin to hide scroll bar and fade in after masthead.
 *
 * Author: David Lemayian
 * Organisation: Code for Africa */

(function ($) {
    $(document).ready(function () {

        // hide .navbar first
        $('header .navbar-brand').html($('#navbar-brand-up').html());
        $('header .navbar').addClass('navbar-static-top');
        $('header .navbar').removeClass('navbar-fixed-top');

        $('header .navbar-filler').height(0);

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {

                // set distance user needs to scroll before we start fadeIn
                if ($(this).scrollTop() > $(".masthead").outerHeight()) {
                    $('header .navbar-brand').html($('#navbar-brand-scrolled').html());
                    $('header .navbar').removeClass('navbar-static-top');
                    $('header .navbar').addClass('navbar-fixed-top');

                    $('header .navbar-filler').height(62);
                } else {
                    $('header .navbar-brand').html($('#navbar-brand-up').html());
                    $('header .navbar').addClass('navbar-static-top');
                    $('header .navbar').removeClass('navbar-fixed-top');

                    $('header .navbar-filler').height(0);
                }
            });
        });

    });
}(jQuery));
