var img_resize = function() {
    var wrapper_width = $(".post-content").width();

    $("figure iframe").width(wrapper_width);
    $("figure iframe").height(wrapper_width * 9.0 / 16.0)
}

$(document).ready(function() {
    $("figure iframe").load(img_resize);
    $(window).resize(img_resize);

});