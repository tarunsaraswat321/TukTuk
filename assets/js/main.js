window.addEventListener('DOMContentLoaded', function() {
    var myDatepicker = document.querySelector('input[name="demo"]');

    myDatepicker.DatePickerX.init({
        // options here
        format: 'dd/mm/yyyy',
        todayButton: false,
        clearButton: false,
        minDate: new Date(),
        defaultDate: new Date()
    });
});

(function($) {

    // Breakpoints.
    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function() {

        var $window = $(window),
            $body = $('body');

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });


        // Prioritize "important" elements on medium.
        skel.on('+medium -medium', function() {
            $.prioritize(
                '.important\\28 medium\\29',
                skel.breakpoint('medium').active
            );
        });

        // Off-Canvas Navigation.

        // Navigation Panel.
        $(
                '<div id="navPanel">' +
                $('#nav').html() +
                '<a href="#navPanel" class="close"></a>' +
                '</div>'
            )
            .appendTo($body)
            .panel({
                delay: 500,
                hideOnClick: true,
                hideOnSwipe: true,
                resetScroll: true,
                resetForms: true,
                side: 'left'
            });

        // Fix: Remove transitions on WP<10 (poor/buggy performance).
        if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
            $('#navPanel')
            .css('transition', 'none');

    });


})(jQuery);

var src_input = document.getElementById('source');
var dest_input = document.getElementById('dest');

var src_searchBox = new google.maps.places.Autocomplete(src_input);
var dest_searchBox = new google.maps.places.Autocomplete(dest_input);

var hour_select = document.getElementById("hour");
for (var i = 0; i <= 23; i++) {
    if (i < 10) {
        var opt = "0";
        opt += i;
    } else {
        opt = i.toString();
    }
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    el.style.color = "black";
    hour_select.appendChild(el);
}

var min_select = document.getElementById("minute");

for (var i = 0; i <= 59; i++) {
    if (i < 10) {
        var opt = "0";
        opt += i;
    } else {
        opt = i.toString();
    }
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    el.style.color = "black";
    min_select.appendChild(el);
}

function checkLoginStatus(){
    if (Cookies.get("user_id")){
        $("#login").hide();
        $("#nameinnavbaronindex").html(Cookies.get("name"));
    }
}