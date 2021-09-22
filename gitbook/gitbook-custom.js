require(['gitbook', 'jquery'], function(gitbook, $) {
    //sidebar default hide
    gitbook.storage.set('sidebar', false);
    gitbook.events.on('page.change', function() {
        resize();
    });
    
    function resize(){
        let winWidth = $(window).width();
        if(winWidth < 570) {
            $('.header-search-wrapper').hide();
        } else {
            $('.header-search-wrapper').show();
        }

        let navWidth = $('.nav-app-wrapper').width() || 0;
        if(winWidth < 570 + navWidth) {
            $('.nav-app-wrapper').hide();
        } else {
            $('.nav-app-wrapper').show();
        }
    }

    resize();
    $(window).resize(e => {
        resize();
    });
    
    //category expand toggle
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

    $(document).on('click', '.cat-link',  e => {
        toggleCategory($('.cat-link.cat-show'));
        toggleCategory($(e.currentTarget));
    });
});