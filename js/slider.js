
(function ($) {
    $(document).ready(function () {

        var slide_id = window.location.hash.substr(1);
        var fatal_url = 'http://projects.icij.org/fatalextraction/s/';

        if (!isNaN(slide_id) && slide_id !=1) {
            $('iframe').attr('src', fatal_url+slide_id);
        };

    });
}(jQuery));

