$(function () {
    AOS.init({
        once: true,
    });
    $(window).on('load', function () {
        AOS.refresh();
    });

    $('#toggle_button').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.top_menu').toggleClass('show');
    })

    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('.top_menu li:nth-child(1)').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('html, body').animate({
            scrollTop: winHeight * 0
        });
    });

    $('.top_menu li:nth-child(2)').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('html, body').animate({
            scrollTop: winHeight * 1
        });
    });

    $('.top_menu li:nth-child(3)').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('html, body').animate({
            scrollTop: winHeight * 5
        });
    });

    $('.top_menu li:nth-child(4)').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('html, body').animate({
            scrollTop: winHeight * 7
        });
    });

    $('.top_menu li:nth-child(5)').on('click', function () {
        $(this).addClass('on').siblings().removeClass('on');
        $('html, body').animate({
            scrollTop: winHeight * 11
        });
    });

    function scrollPage() {
        let scr = $(window).scrollTop();
        for (let i = 0; i < $('ul li').length; i++) {
            if (scr >= winHeight * 0 && scr < winHeight * 1) {
                $('ul li').removeClass('on');
                $('ul li').eq(0).addClass('on');
            }
            if (scr >= winHeight * 1 && scr < winHeight * 2) {
                $('ul li').removeClass('on');
                $('ul li').eq(1).addClass('on');
            }
            if (scr >= winHeight * 2 && scr < winHeight * 3) {
                $('ul li').removeClass('on');
                $('ul li').eq(1).addClass('on');
            }
            if (scr >= winHeight * 3 && scr < winHeight * 4) {
                $('ul li').removeClass('on');
                $('ul li').eq(1).addClass('on');
            }
            if (scr >= winHeight * 4 && scr < winHeight * 5) {
                $('ul li').removeClass('on');
                $('ul li').eq(1).addClass('on');
            }
            if (scr >= winHeight * 5 && scr < winHeight * 6) {
                $('ul li').removeClass('on');
                $('ul li').eq(2).addClass('on');
            }
            if (scr >= winHeight * 6 && scr < winHeight * 7) {
                $('ul li').removeClass('on');
                $('ul li').eq(2).addClass('on');
            }
            if (scr >= winHeight * 7 && scr < winHeight * 8) {
                $('ul li').removeClass('on');
                $('ul li').eq(3).addClass('on');
            }
            if (scr >= winHeight * 8 && scr < winHeight * 9) {
                $('ul li').removeClass('on');
                $('ul li').eq(3).addClass('on');
            }
            if (scr >= winHeight * 9 && scr < winHeight * 10) {
                $('ul li').removeClass('on');
                $('ul li').eq(3).addClass('on');
            }

            if (scr >= winHeight * 10 && scr < winHeight * 11) {
                $('ul li').removeClass('on');
                $('ul li').eq(3).addClass('on');
            }

            if (scr >= winHeight * 11 && scr < winHeight * 12) {
                $('ul li').removeClass('on');
                $('ul li').eq(4).addClass('on');
            }
        }
    }

/*     $(window).on('scroll', scrollPage);
    scrollPage();

    $('#wrap>div').on('mousewheel', function (e, d) {
        if (d > 0) {
            let prv = $(this).prev().offset().top;
            $('html, body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) {
            let nxt = $(this).next().offset().top;
            $('html, body').stop().animate({
                scrollTop: nxt
            })
        }
    }) */

    $(".count").each(function () {
        $(this)
            .prop("Counter", 0)
            .animate(
                {
                    Counter: $(this).text(),
                },
                {
                    duration: 4000,
                    easing: "swing",
                    step: function (now) {
                        now = Number(Math.ceil(now)).toLocaleString('en');
                        $(this).text(now);
                    },
                }
            );
    });

    var sentences = new Array('제 1부 자화상(自畵像)', '다시 그 사나이가 미워져 돌아갑니다', '돌아가다 생각해보니 그 사나이가 그리워집니다');

    var timer = 7500;

    var total = sentences.length - 1;

    for (var i = 0; i <= total; i++) {

        $('#box').append('<p class="sl" id="textBox' + i + '"></p>');

        var max = sentences[i].length - 1;

        for (var j = 0; j <= max; j++) {
            $('#textBox' + i).append('<span style="transition: ' + Math.random() * 3 + 's; transition-delay: ' + Math.random() + 's;">' + sentences[i].charAt(j) + '</span>');
        };

    };

    var maxBox = $('#box > p').length;
    var r = 0;

    $('#textBox' + r).addClass('active');

    setInterval(function () {

        $('#textBox' + r).removeClass('active');

        r++;

        if (r == maxBox) {
            r = 0;
        }

        setTimeout(function () {
            $('#textBox' + r).addClass('active');
        }, 1500);

    }, timer);

    $('.list>div').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont>div').eq(i).fadeIn().siblings().hide();
    });

    $('.cont>div .close').on('click', function () {
        $(this).parents('.wide_play').fadeOut();
    })

    $('.cont8_up>li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.closeup .photoshop').eq(i).fadeIn().siblings().hide();
    });

    $('.closeup>div .close').on('click', function () {
        $(this).parents('.photoshop').fadeOut();
    })

    $('.cont8_down>li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.cont .cardnews').eq(i).fadeIn().siblings().hide();
    });

    $('.cont>div .close').on('click', function () {
        $(this).parents('.cardnews').fadeOut();
    })


    if ($('#footer').hasClass('skewed')) skew = 1000;

    $("#footer").mousemove((event) => {
        delta = (event.clientX - window.innerWidth / 2) * 0.5;
        value = event.clientX + delta;
        $(".handle").css("left", value + 'px');
        $("#top").css("width", value + skew + 'px');
    });





}); //opening