let tabButton = $('.tab-button');
let tabContent = $('.tab-content');

for(let i = 0; i < tabButton.length; i++) {
    console.log(i)
    tabButton.eq(i).on('click', function(){
        console.log('clicked Button')
        tabButton.removeClass('orange');
        tabButton.eq(i).addClass('orange');
        tabContent.removeClass('show');
        tabContent.eq(i).addClass('show');
    });

}