$(document).ready(function() {
    $('.slider').slider();

    $('.carousel-control-prev').on('click', function(e) {
        var value = e.value.newValue;
        var id = $(this).attr('id');
        $('#' + id + '-value').text(value);
    });

    $('.carousel-control-next').on('click', function(e) {
        var value = e.value.newValue;
        var id = $(this).attr('id');
        $('#' + id + '+value').text(value);
    });


}
);
