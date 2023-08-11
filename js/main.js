$('.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
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
});

$(function () {
    cursorX = 0;
    cursorY = 0;
    mouseX = 0;
    mouseY = 0;
    $(window).on('mousemove', function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    setInterval(function () {
        cursorX += (mouseX - cursorX) / 20;
        cursorY += (mouseY - cursorY) / 20;
        $('.cursor').css({
            'top': cursorY + 'px',
            'left': cursorX + 'px',
        })
    }, 10)
});

$('.menu-btn').on('click', function () {
    $('.menu').toggleClass('active');
});

$('.news-page a').on('click', function(e){
    e.preventDefault();
});

$('.farm-item div').hide();
$('.farm-item div:first').show();
$('.farm-page li a:first').addClass('farm-active');

$('.farm-page a').on('click', function (e) {
    e.preventDefault();
    $('.farm-page li a').removeClass('farm-active');
    $(this).addClass('farm-active');
    $('.farm-item div').hide();
    $($(this).attr('href')).show();
});

$('.activity-item .activity-content').hide();
$('.activity-item .activity-content:first').show();
$('.activity-page li a:first').addClass('activity-active');

$('.activity-page a').on('click', function (e) {
    e.preventDefault();
    $('.activity-page li a').removeClass('activity-active');
    $(this).addClass('activity-active');
    $('.activity-item .activity-content').hide();
    $($(this).attr('href')).show();
});

$('.activity-item a').on('click', function(e){
    e.preventDefault();
});
