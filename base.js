$(function () {
    // full page
    $(document).ready(function () {
        $('#fullpage').fullpage({
            scrollingSpeed: 600,
            touchSensitivity: 8,
            sectionsColor: ['#f5f5f5', '#565656', '#434343', '#222222'],
            anchors: ['HomeSection', 'ProjectSection', 'AboutSection', 'ContactSection'],
            menu: '#myMenu',
            loopHorizontal: true,
            slidesNavigation: true,
            scrollOverflow: false,
            responsiveWidth: 1000,
            // normalScrollElements: '.teamShowBox',
            // normalScrollElements: '.joinUsBox',
            // normalScrollElementTouchThreshold: 9,

            onLeave: function (index, nextIndex, direction) {
                var leavingSection = $(this);
                if (nextIndex == 2) {
                    $('.fp-slides').css('opacity', '1');
                } else {
                    $('.fp-slides').css('opacity', '.3');
                }
                ;
                if (index == 1) {
                    $('.logoArea').css('opacity', '0');
                } else {
                    $('.logoArea').css('opacity', '1');
                }
                ;
            }
        });
    });

    // menu button
    $('.menuArea').click(function () {
        $('.line1').toggleClass(function () {
            if ($(this).is('.line1A')) {
                return 'line1B';
            }
            else {
                return 'line1A';
            }
        });
        $('.line2').toggleClass(function () {
            if ($(this).is('.line2A')) {
                return 'line2B';
            }
            else {
                return 'line2A';
            }
        });
        $('.line3').toggleClass(function () {
            if ($(this).is('.line3A')) {
                return 'line3B';
            }
            else {
                return 'line3A';
            }
        });
        if ($('.mainNav').hasClass('mainNavHide')) {
            $('.mainNav').removeClass('mainNavHide');
            $('#mainNavContent').addClass('mainNavShowBg');
        } else {
            $('.mainNav').addClass('mainNavHide');
            $('#mainNavContent').removeClass('mainNavShowBg');
        }
    });
    $('.mainNav a').click(function () {
        $('.line1').toggleClass(function () {
            if ($(this).is('.line1A')) {
                return 'line1B';
            }
            else {
                return 'line1A';
            }
        });
        $('.line2').toggleClass(function () {
            if ($(this).is('.line2A')) {
                return 'line2B';
            }
            else {
                return 'line2A';
            }
        });
        $('.line3').toggleClass(function () {
            if ($(this).is('.line3A')) {
                return 'line3B';
            }
            else {
                return 'line3A';
            }
        });
        $('.mainNav').addClass('mainNavHide');
        $('#mainNavContent').removeClass('mainNavShowBg');
    })


    // banner section scroll down button
    $('.scrollDownButton').click(function () {
        $.fn.fullpage.moveSectionDown();
    });


    // contact position
    $('#home').click(function () {
        $.fn.fullpage.moveTo(1);
    });
    $('#project').click(function () {
        $.fn.fullpage.moveTo(2);
    })
    $('#about').click(function () {
        $.fn.fullpage.moveTo(3);
    })
    $('#contact').click(function () {
        $.fn.fullpage.moveTo(4);
    })

    $('.placeButton').click(function () {
        if ($('.placeShowBox').hasClass('psbHide')) {
            $('.placeShowBox').removeClass('psbHide');
            $('.placeShowBox').addClass('psbShow');
            $('.placeButton').css('left', '0px');
            $('.placeButton').text("<鎴愬憳");
            $('.postButton').css('right', '0px');
            $('.teamShow').css("opacity", "0");
        } else {
            $('.placeShowBox').removeClass('psbShow');
            $('.placeShowBox').addClass('psbHide');
            $('.placeButton').css('left', '-100px');
            $('.placeButton').text('鐜>');
            $('.postButton').css('right', '-100px');
            $('.teamShow').css("opacity", "1");
        }
    });
    $('.postButton').click(function () {
        if ($('.joinUsBox').hasClass('juBoxHide')) {
            $('.joinUsBox').removeClass('juBoxHide');
            $('.joinUsBox').addClass('juBoxShow');
            $('.postButton').css('right', '0px');
            $('.postButton').text("鎴愬憳>");
            $('.placeButton').css('left', '0px');
            $('.teamShow').css("opacity", "0");
        } else {
            $('.joinUsBox').removeClass('juBoxShow');
            $('.joinUsBox').addClass('juBoxHide');
            $('.postButton').css('right', '-100px');
            $('.postButton').text('<鑱屼綅');
            $('.placeButton').css('left', '-100px');
            $('.teamShow').css("opacity", "1");
        }
    });

    // about us people head show
    $('.teamShow li').click(function () {
        if ($(this).children('.headCoverBox').hasClass('coverBoxHide')) {
            $(this).children('.headCoverBox').removeClass('coverBoxHide');
        }
        else {
            $('.teamShow li').children('.headCoverBox').removeClass('coverBoxHide');
            $(this).children('.headCoverBox').addClass('coverBoxHide');
        }
    });


    // $('.postArrowL').click(function(){
    // 	$('.postListBox').animate({scrollLeft:0}, 400);
    // });
    // $('.postArrowR').click(function(){
    // 	$('.postListBox').animate({scrollLeft:1000}, 400);
    // });


    function heightChange() {
        var peoplewidth = $('.headBox').width();
        $('.headBox').height(peoplewidth / 4 * 3);
        $('.headCoverBox').height(peoplewidth / 4 * 3);

        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $('#bannerContent').height(windowHeight);
        $('.placeShowBox').height(windowHeight);
        $('.joinUsBox').height(windowHeight);


    };
    heightChange();

    $(window).resize(function () {
        heightChange();
    });
});