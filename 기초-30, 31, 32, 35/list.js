var products = [
    {id: 0, price: 70000, title: 'Blossom Dress'},
    {id: 1, price: 50000, title: 'Springfield Shirt'},
    {id: 2, price: 60000, title: 'Black Monastery'}
];
let buyCart = [];
let moreButtonCount = 0;
let sortCardABC = true;
var 꺼낸거 = localStorage.getItem('cart');
꺼낸거 = JSON.parse(꺼낸거)
buyCart = 꺼낸거
$('.row').html('');

addCardHtml(products);

$('#more').click(function () {
    moreButtonCount++;
    $('.row').html('');
    if (moreButtonCount == 1) {
        $.get('https://codingapple1.github.io/js/more1.json')
            .done((data) => {
                data.forEach(function (product) {
                    products.push(product);
                });
                addCardHtml(products)
            });
    } else if (moreButtonCount == 2) {
        $.get('https://codingapple1.github.io/js/more2.json')
            .done((data) => {
                data.forEach(function (product) {
                    products.push(product);
                });
                addCardHtml(products)
            });
    }
});

$('#sort-button').click(function () {
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
    addCardHtml(products)
});

$('#filter-button').click(function () {
    $('.row').html('');
    var newProducts = products.filter(function (a) {
        return a.price < 60000
    })
    addCardHtml(newProducts);
});

$(document).on('click', '.card-buy', function (e) {
    var title = $(e.target).siblings('h5').text();
    if (localStorage.getItem('cart') != null) {
        var 꺼낸거 = JSON.parse(localStorage.cart);
        꺼낸거.push(title);
        localStorage.setItem('cart', JSON.stringify(꺼낸거));
    } else {
        localStorage.setItem('cart', JSON.stringify([title]));
    }
});

function addCardHtml(array) {
    //카드 전체
    array.forEach(function (product, _) {
        let cardhtml = document.createElement('div');
        cardhtml.classList.add('col-sm-4');

        //이미지 추가
        let cardImage = document.createElement('img');
        cardImage.classList.add("w-100");
        cardImage.id = product.id;
        cardImage.src = "https://via.placeholder.com/600"
        cardhtml.appendChild(cardImage);

        //카드 제목 추가
        let cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.id = product.id;
        cardTitle.innerHTML = product.title;
        cardhtml.appendChild(cardTitle);

        //가격 추가
        let cardPrice = document.createElement('p');
        cardPrice.classList.add('card-price');
        cardTitle.id = product.id;
        cardPrice.innerHTML = "가격 : " + product.price;
        cardhtml.appendChild(cardPrice);

        let cardAddCart = document.createElement('button');
        cardAddCart.classList.add('btn');
        cardAddCart.classList.add('btn-success');
        cardAddCart.classList.add('card-buy');
        cardAddCart.id = product.id;
        cardAddCart.innerText = "구매하기";
        cardhtml.appendChild(cardAddCart);

        //카드 html에 추가
        $('.row').append(cardhtml);
    });
}