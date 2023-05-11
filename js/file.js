$('.menu-voice').on('click',function(e){
    $('.menu-voice').css('background-color','var(--white)').css('color','var(--black)');
    $('.content-menu-voice').css('display','none');

    const menuID = $(this).attr('id');
    $(this).css('background-color','var(--petroil)').css('color','var(--white)');
    $('#content-'+menuID).css('display','block');

    e.stopPropagation();
    return false;
});

$(document).click(function() {
    $('.menu-voice').css('background-color','var(--white)').css('color','var(--black)');
    $('.content-menu-voice').css('display','none');
});

$('.content-menu-voice').click(function(e) {
    e.stopPropagation();
    return false;
});

$('.single-site').on('click',function(){
    $('.single-site').removeClass('border-bottom-red');
    $(this).addClass('border-bottom-red');

    const getPlaceholder = 'Cerca qui';
    const siteText = $('.single-site-text',this).text().toLowerCase();

    $('.search-class').attr('placeholder',getPlaceholder+' '+siteText);
});