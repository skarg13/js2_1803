const goods = [
    { title: 'Mango  People  T-shirt', price: 52, img:'img/pi-1.png' },
    { title: 'Apple  People  T-shirt', price: 50, img:'img/pi-2.png' },
    { title: 'Banana  People  T-shirt', price: 64, img:'img/pi-3.png' },
    { title: 'Vine  People  T-shirt', price: 38},
  ];

  const renderGoodsItem = (title, price, img = 'img/pi-5.png') => {
    return ` <div class="product__item">
    <a href="product-page.html"><img src="${img}" alt="" class="product__photo"></a>
    <a href="product-page.html" class="product__title">
    ${title}
    </a>
    <div class="product__price">
    $ ${price}
    </div>
    <a href="#" class="add-btn"><img src="img/cart-w.png" alt="cart-icon">Add to Cart</a>
  </div>`;
  };

  const renderGoodsList = list => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price, item.img));
    document.querySelector('.product__content').innerHTML = goodsList;
  }

  renderGoodsList(goods);
  
  
  