var img_resize = function() {
    var img_height = $(".cover-img-container img").height();
    var container_height = 400;
    if (img_height < container_height) {
        $(".cover-img-container").height(img_height);
    } else {
        $(".cover-img-container").height(400);
    }
}

$(document).ready(function() {
    $(".cover-img-container img").load(img_resize);
    $(window).resize(img_resize);

});