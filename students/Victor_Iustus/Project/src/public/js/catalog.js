import {PRODUCTS_NAMES, PRICES, IDS, IMGS} from '../CONSTANT'

let catalog = {
    items: [],
    container: '.products',
    cart: null,
    construct (cart) {
        this.cart = new cart
        this._init () //_ - это обозначение инкапсулированного метода
    },
    _init () {
        this._handleData ()
        this.render ()
        this._handleEvents ()
    },
    _handleEvents () {
        document.querySelector (this.container).addEventListener ('click', (evt) => {
            if (evt.target.name === 'btn-buy') {
                this.cart.addProduct (evt.target)
            }
        })
    },
    _handleData () {
        for (let i = 0; i < IDS.length; i++) {
            this.items.push (this._createNewProduct (i))
        }
    },
    _createNewProduct (index) {
        return {
            product_name: PRODUCTS_NAMES [index],
            price: PRICES [index],
            id_product: IDS [index],
            img: IMGS [index]
        }
    },
    render () {
        let str = ''
        this.items.forEach (item => {
            str += `
                <div class="product-item">
                    <div class="product-img">
                        <img src="${item.img}" alt="${item.product_name}">
                    </div>
                    <div class="desc">
                        <h1>${item.product_name}</h1>
                        <p>${item.price}</p>
                        <button 
                        class="btn -black margin-top-5" 
                        name="btn-buy"
                        data-name="${item.product_name}"
                        data-price="${item.price}"
                        data-id="${item.id_product}"
                        >Купить</button>
                    </div>
                </div>
            `
        })
        document.querySelector(this.container).innerHTML = str
    }
}

export default catalog