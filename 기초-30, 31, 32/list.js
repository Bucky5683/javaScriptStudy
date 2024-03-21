
var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
];
let moreButtonCount = 0;
let sortCardABC = true;

$('.row').html('');

addCardHtml();

$('#more').click(function(){
    moreButtonCount++;
    $('.row').html('');
    if (moreButtonCount == 1) {
        $.get('https://codingapple1.github.io/js/more1.json')
            .done((data) => {
                data.forEach(function (product) {
                    products.push(product);
                });
                addCardHtml()
            });
    } else if (moreButtonCount == 2) {
        $.get('https://codingapple1.github.io/js/more2.json')
            .done((data) => {
                data.forEach(function (product) {
                    products.push(product);
                });
                addCardHtml()
            });
    }
});

$('#sort-button').click(function(){
    $('.row').html('');
    if (sortCardABC) {
        products.sort(function compare(a, b) {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        });
        sortCardABC = false;
        document.getElementById('sort-button').innerText = "다나가순";
    } else {
        products.sort(function compare(a, b) {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
            return 0;
        });
        sortCardABC = true;
        document.getElementById('sort-button').innerText = "가나다순";
    }
    addCardHtml()
});
function addCardHtml() {
    //카드 전체
    products.forEach(function(product, _) {
        let cardhtml = document.createElement('div');
        cardhtml.classList.add('col-sm-4');

        //이미지 추가
        let cardImage = document.createElement('img');
        cardImage.classList.add("w-100");
        cardImage.src = "https://via.placeholder.com/600"
        cardhtml.appendChild(cardImage);

        //카드 제목 추가
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.innerHTML = product.title;
        cardhtml.appendChild(cardTitle);

        //가격 추가
        let cardPrice = document.createElement('p');
        cardPrice.classList.add('card-price');
        cardPrice.innerHTML = "가격 : " + product.price;
        cardhtml.appendChild(cardPrice);

        //카드 html에 추가
        $('.row').append(cardhtml);
    });
}