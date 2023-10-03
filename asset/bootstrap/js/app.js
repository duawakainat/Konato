
$(window).resize(function () {
    if ($(window).width() <= 998) {
        $('.navbar-toggler').hide();

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


// $(window).on('resize', function () {
//     if ($(window).width() <= 998) {
//         console.log('yes');
//         let AddValue = $(".MainTop").html();
//         // AddValue.css('color', 'black');
//         $(".addNavMenu").html(AddValue);
//         $(".addNavMenu").css("display", "block")
//         $('.nav-link').css("list-style-type", "none")
//         $('.toggle').toggle()
//     } else {
//         $(".addNavMenu").html('');
//     }
// });


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
    if ($(window).width() >= 578) {
        $('.Map_Hidden').show();
        console.log('helo i not');
    }
});

$(window).on('resize', function () {
    if ($(window).width() <= 578) {
        $('.Map_Hidden').hide();
        console.log('helo i maam');
    }
});
// $('#formGroupExampleInput').addClass('fa-solid fa-bed');


$('.owl-first-one').owlCarousel({
    // rtl: true,
    loop: true,
    margin: 10,
    nav: true,
    // navText: ["<div class='nav-button owl-prev'>></div>", "<div class='nav-button owl-next'><</div>"],
    navSpeed: 100,
    autoplay: true,
    responsive: {
        300: {
            items: 1,
        },
        778: {
            items: 2,
        },
        998: {
            items: 2,
        },
        1100: {
            items: 3,
        }
    }
})

$('.owl-first').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        300: {
            items: 1,
        },
        778: {
            items: 2,
        },
        998: {
            items: 2,
        },
        1100: {
            items: 3,
        }
    }
})
$('.owl-second').owlCarousel({
    loop: true,
    margin: 10,
    dotted: true,
    nav: true,
    responsive: {
        300: {
            items: 1,
        },
        578: {
            items: 2,
        },
        778: {
            items: 3,
        },
        998: {
            items: 4,
        },
        1100: {
            items: 4,
        }
    }
})
