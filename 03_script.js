$(function() {
    $('.menu-title').click(function() {
        $('.sub-menu').hide();

        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).find('span').text('+');
            $(this).next().slideUp(200);
        }else{
            $(this).addClass('open');
            $(this).find('span').text('-');
            $(this).next().slideDown(200);
        }
    });


    if(window.matchMedia( 'min-width: 671px' ).matches){
        $(window).scroll(function() {
            var scroll_position = $(this).scrollTop();

            $('.mid2-bg').css('background-position-x', -(scroll_position / 50) + 'px');
        });

        $(window).scroll(function() {
            var scroll_position = $(this).scrollTop();

            $('.mid6-bg').css('background-position-y', -(scroll_position / 10 - 700) + 'px');
        });
    }else{
        $(window).scroll(function() {
            var scroll_position = $(this).scrollTop();

            $('.mid2-bg').css('background-position-x', -(scroll_position / 50 + 200) + 'px');
        });

        $(window).scroll(function() {
            var scroll_position = $(this).scrollTop();

            $('.mid6-bg').css('background-position-y', -(scroll_position / 10 - 500) + 'px');
        });
    }

    
});
