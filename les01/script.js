const goods = [
{ title: 'Shirt', price: 150},
{ title: 'Socks', price: 100},
{ title: 'Jacket', price: 350},
{ title: 'Shoes', price: 250},
];

const  renderGoodsItem = (title, price) => {
  return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
  // запятая между элементами корзины из-за того, что map создает новый массив, а
  // toString склеивает элементы массива в строку через запятую. Поэтому добавим join(""),
  // чтобы убрать ненужные нам запятые в верстке
  let goodsList = list.map(item => renderGoodsItem(item.title, item.price)).join("");
  document.querySelector('.goods-list').innerHTML = goodsList;
};

renderGoodsList(goods);
