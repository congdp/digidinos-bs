$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })

    // $.lockfixed("#sidebar-menu", { offset: { top: 66, bottom: 10 } });

    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();

        }

    });
    $('#back-top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
        return false;
    });
});