$(function () {
    $('a').smoothScroll();

    $('.workSection__projectContainer').one('inview ', function (event, isInView) {
        if(isInView) {
            console.log('inview');
            $(this).children('.workSection__projectImgContainer').removeClass('inVisible');
            $(this).children('.workSection__projectDescContainer').removeClass('inVisible');
            $(this).children('.workSection__projectImgContainer').addClass('fadeIn');
            $(this).children('.workSection__projectDescContainer').addClass('fadeIn');
        } else {
            console.log('not inview');
           $(this).children('.workSection__projectImgContainer').removeClass('fadeIn ');
           $(this).children('.workSection__projectDescContainer').removeClass('fadeIn');
        }
    });
})