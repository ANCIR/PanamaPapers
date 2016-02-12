/**
 * Bootstrap secondary Nav
 * --------------------------------
 * A bootstrap.js plugin to show up as a secondary nav
 *
 * Author: David Lemayian
 * Organisation: Code for Africa */

(function ($) {
    $(document).ready(function () {

        // disable nav btn
        $('#second-nav-btn').attr('href', 'javascript: void(0)');

        // hide .navbar first
        $('#second-nav').css('display', 'none');
        $('#second-nav').addClass('navbar-static-top');
        $('#second-nav').removeClass('navbar-fixed-top');
        $('#second-nav').css('margin-top', '0px');

        $('header .navbar-filler').height(0);

        // the magic

        $('#second-nav-btn').click(function () {
            if($('#second-nav').css('display') == 'none'){
                $('#second-nav').css('display', 'block');
                // set distance user needs to scroll before we start fadeIn
                if ($(window).scrollTop() > $(".masthead").outerHeight()) {
                    $('#second-nav').removeClass('navbar-static-top');
                    $('#second-nav').addClass('navbar-fixed-top');
                    $('header .navbar-filler').height(124);
                    $('#second-nav').css('margin-top', '61px');
                } else {
                    $('#second-nav').addClass('navbar-static-top');
                    $('#second-nav').removeClass('navbar-fixed-top');
                    $('header .navbar-filler').height(0);
                    $('#second-nav').css('margin-top', '0px');
                };
            } else {
                $('#second-nav').css('display', 'none');
                // set distance user needs to scroll before we start fadeIn
                if ($(window).scrollTop() > $(".masthead").outerHeight()) {
                    $('#second-nav').removeClass('navbar-static-top');
                    $('#second-nav').addClass('navbar-fixed-top');
                    $('header .navbar-filler').height(62);
                } else {
                    $('#second-nav').addClass('navbar-static-top');
                    $('#second-nav').removeClass('navbar-fixed-top');
                    $('header .navbar-filler').height(0);
                };
                $('#second-nav').css('margin-top', '0px');
            }


        });

        $(function () {
            $(window).scroll(function () {

                if($('#second-nav').css('display') != 'none'){

                    // set distance user needs to scroll before we start fadeIn
                    if ($(this).scrollTop() > $(".masthead").outerHeight()) {
                        $('#second-nav').removeClass('navbar-static-top');
                        $('#second-nav').addClass('navbar-fixed-top');
                        $('header .navbar-filler').height(124);
                        $('#second-nav').css('margin-top', '61px');
                    } else {
                        $('#second-nav').addClass('navbar-static-top');
                        $('#second-nav').removeClass('navbar-fixed-top');
                        $('header .navbar-filler').height(0);
                        $('#second-nav').css('margin-top', '0px');
                    };

                };


            });
        });

    });
}(jQuery));
