
$(window).resize(function () {
    if ($(window).width() <= 998) {
        $('.navbar-toggler').hide();
    }
});
$(window).resize(function () {
    if ($(window).width() <= 998) {
        $('.navbar-nav').hide();
    }
});
$(window).resize(function () {
    if ($(window).width() <= 998) {
        $('.hidden_form').hide();
    }
});
$(window).resize(function () {
    if ($(window).width() <= 998) {
        $('.btn_hidden').hide();
    }
});
$(window).resize(function () {
    if ($(window).width() <= 998) {
        $('.hidden_P').hide();
    }
});

$(".BTN_TOP").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    return false;
})
$(".dropdown").hover(function () {
    $('.dropdown-menu').css("display", "block")
})
$(".dropdown").mouseleave(function () {
    $('.dropdown-menu').css("display", "none")
})



$(".nav-show-hiden").css("display", "none");
$(window).resize(function () {
    if ($(window).width() <= 998) {
        $('.nav-show-hiden').show();

    }
});
$(window).resize(function () {
    if ($(window).width() >= 998) {
        $('.nav-show-hiden').hide();

    }
});


$(window).on('resize', function () {
    if ($(window).width() <= 578) {
        $('.Map_Hidden').hide();
        console.log('helo i maam');
    }
});
$(window).on('resize', function () {
    if ($(window).width() >= 578) {
        $('.Map_Hidden').show();
        console.log('helo i not');
    }
});
// $('#formGroupExampleInput').addClass('fa-solid fa-bed');


$('.owl-first-one').owlCarousel({
    // rtl: true,
    loop: true,
    margin: 17,
    nav: true,
    // navText: ["<div class='nav-button owl-prev'>></div>", "<div class='nav-button owl-next'><</div>"],
    navSpeed: 100,
    autoplay: true,
    responsive: {
        300: {
            items: 1,
        },
        668: {
            items: 2,
        },
        890: {
            items: 3,
        },
        1100: {
            items: 3,
        }
    }
})

$('.owl-first').owlCarousel({
    loop: true,
    margin: 17,
    nav: true,
    responsive: {
        300: {
            items: 1,
        },
        668: {
            items: 2,
        },
        890: {
            items: 3,
        },
        1100: {
            items: 3,
        }
    }
})
$('.owl-second').owlCarousel({
    loop: true,
    margin: 17,
    dotted: true,
    nav: true,
    responsive: {
        300: {
            items: 1,
        },
        408: {
            items: 2,
        },
        778: {
            items: 2,
        },
        998: {
            items: 4,
        },
        1100: {
            items: 4,
        }
    }
})
