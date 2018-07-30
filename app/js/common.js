var toForm = function() {
    $('.pre_toform').click(function(e) {
        e.preventDefault();
        var a = $('.js_submit');
        var b = a.closest('form');

        if ($('form#toform').length) {
            a = $('#toform .js_submit');
            b = a.closest('form#toform');
        }

        if (b.length && a.is(':visible')) {
            $("html,body").animate({ scrollTop: b.last().offset().top }, 1000);
        }
        return false;
    });
}


$(function() {

    toForm();

});