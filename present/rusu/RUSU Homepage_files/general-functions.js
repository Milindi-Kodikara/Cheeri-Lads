$(function () {
    $(document.body).on("click", '.panel-heading .btn-collapse', function () {
        var $content = $(this).parent().parent().next();
        if ($content.hasClass('in'))
            $content.collapse('hide');
        else {
            //Collapse all and then show this one
            $('.panel-body').collapse({
                toggle: false
            });
            $('.panel-body').collapse('hide');
            $content.collapse('show');
        }
    });

})