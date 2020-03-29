import List from './List.js'

export default class Catalog  extends List{
    constructor(url, container){
        super(url = '/catalogData.json', container = '.products');
        this.cart = null;
    }

    /**
     *Создаем каталог
     */
    _init () { 
        this.getData(this.url)
            .then(data => {this.items = data})
            .then(() => {this.render()})
            .finally(() => {
                this._handleEvents()
            })
    }


     /**
     *Обработчик события - нажатия на кнопку Купить
     */
    _handleEvents () {
        this.container.addEventListener ('click', this.cart.handlerCatalogClick.bind(this.cart));
    }
}
