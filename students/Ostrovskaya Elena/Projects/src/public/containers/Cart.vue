<template>
    <div class="cart-items">
        <item v-for="item of items" :key="item.id_product"  :item="item" :type="'cart'"/>                   
    </div>
</template>

<script>
import item from '../components/Item.vue'
export default {
    components: {item},
    data(){
        return{
            items: [], 
            url: '/api/cart.json'
        }
    },
    methods:{
        /**
         *Добавляет товар в корзину
        */
        addProduct (product) {
            let id = +product.dataset['id'];
            let find = this.items.find (product => product.id_product === id);
            if (find) {
                find.quantity++;
            } else {
                let prod = this._createNewProduct (product);
                this.items.push (prod);
            }      
            this.changeCart() 
        }
    },
    computed:{

    },
    mounted(){
        this.$parent.getData(this.url)
        .then(data => {
            this.items = data.contents;
        })
    }
}
</script>