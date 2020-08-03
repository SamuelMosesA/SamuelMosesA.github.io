function changeActiveState(id) {
    $('header .active').removeClass('active');
    $("a[href='#" + id + "']").closest('li').addClass('active');
    console.log(id);
}


!(function ($) {
    "use strict";


//Load animation
    $(window).on('load', function () {
        let loader = $('#loader');
        if (loader.length) {
            loader.delay(200).fadeOut('fast', function () {
                $(this).remove();
            });
        }


        //Ribbon animation
        var ribbon_anime = anime.timeline({
            easing: 'cubicBezier(0,.74,.3,.93)',
            duration: 400
        });

        // Add children
        ribbon_anime
            .add({
                targets: 'svg #p1',
                points: [
                    {value: '1746.2, 1175.8,1746.2, 1175.8,2644.7,848.3,2644.7,848.3'},
                    {value: '1746.2,1175.8,1178.7,436.8,1514.2,277.3,2644.7,848.3'},
                ],
            })
            .add({
                targets: 'svg #p2',
                points: [
                    {value: '1178.7,436.81,1178.7,436.81,1514.2,277.31,1514.2,277.31'},
                    {value: '1178.7,436.81,831.2,1004.31,1102.7,980.31,1514.2,277.31'},
                ],
            })
            .add({
                targets: 'svg #p3',
                points: [
                    {value: '1102.66,980.31,1102.66,980.31,831.16,1004.31,831.16,1004.31'},
                    {value: '426.16,827.81,1102.66,980.31,831.16,1004.31,230.66,857.31'},
                ],
            })
            .add({
                targets: 'svg #p4',
                points: [
                    {value: '230.662,857.3,230.662,857.3,426.162,827.8,426.162,827.8'},
                    {value: '58.162,1152.8,230.662,857.3,426.162,827.8,58.162,1316.8'},
                ],
            })
        ;

    });


// Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .navig a', function (e) { //selects all links in navbar and other navigable
        if (location.pathname.replace(/^\/|\/$/, '') === this.pathname.replace(/^\/|\/$/, '')
            && location.hostname === this.hostname) { //removes beginning and end slash -> compares if the location is on same page
            let target = $(this.hash);  //hash gives the id along with # -> selector gives element


            if (target.length) {
                e.preventDefault(); //prevents moving to the position
                let scroll_target_position = target.offset().top;

                $('html').animate({
                    scrollTop: scroll_target_position
                }, 1000, 'easeInOutExpo');

                //Changing the active section in navigation
                if ($(this).parents('header').length) {
                    $('.nav-menu .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                //Closing the mobile navbar
                if ($(this).parents('header').length) {
                    let head = $('header');
                    if (head.hasClass('mobile-on')) {
                        head.removeClass('mobile-on');
                        $('.mobile-nav-button i').toggleClass('fa-location-arrow fa-times');
                    }
                }

                return false;
            }
        }
    });

    //Changing the arrow to X on click
    $(document).on('click', '.mobile-nav-button', function () {
        $('header').toggleClass('mobile-on');
        $(this).children('i').toggleClass('fa-location-arrow fa-times');
    });

    //Change the active section when scrolled
    $('section').waypoint(function () {
        changeActiveState(this.element.id);

    }, {
        offset: '50%'
    });

    //Hack for landing page not working
    $('#landing-about-container').waypoint(function (direction) {
            if (direction === 'up') {
                changeActiveState('landing');
            }
        },
        {
            offset: '0px'
        });


})(jQuery);