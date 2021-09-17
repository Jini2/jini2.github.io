require([
    'jquery'
], function($) {
    $(function(){
        $('.cat-link').on('click',  e => {
            toggleCategory($(e.currentTarget));
        });
    });

    function toggleCategory(el) {
        if(el.hasClass('cat-show')){
            el.next().hide();
            el.removeClass('cat-show');
            el.find('.cat-icon').removeClass('fa-caret-down').addClass('fa-caret-right');
        } else {
            el.next().show();
            el.addClass('cat-show');
            el.find('.cat-icon').removeClass('fa-caret-right').addClass('fa-caret-down');
        }
    }
});