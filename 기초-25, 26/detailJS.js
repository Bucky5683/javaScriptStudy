let tabButton = $('.tab-button');
let tabContent = $('.tab-content');

$('.list').click(function(e){
    탭열기(e.target.dataset.id)
});

function 탭열기(구멍){
    tabButton.removeClass('orange');
    tabButton.eq(구멍).addClass('orange');
    tabContent.removeClass('show');
    tabContent.eq(구멍).addClass('show');
}