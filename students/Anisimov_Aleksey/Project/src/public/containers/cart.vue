<template>
    <div class="cart" @click="checkCart()">Корзина
        <div class="cart__empty" v-if="isEmptyCart">Корзина пуста</div>
        <div class="cart__block" v-show="isVisibleCart">
          <p class="cart__p">Всего товаров: шт.</p>
          <hr class="cart__hr">
          
          <item v-for="item of this.items" :key='item.id' :item='item' type='cart' @remove='removeFromCart'/>

          <hr class="cart__hr">
          <p class="cart__p">Общая стоимость: $</p>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        item: () => import('../components/item')
    },
    data() {
        return {
            items: [],
            isVisibleCart: false,
            isEmptyCart: false
        }
    },
    methods: {
        
        checkCart() {
            if (this.items.length === 0) {
                this.isEmptyCart = !this.isEmptyCart
            } else {
                this.isVisibleCart = !this.isVisibleCart
            }
        },
        
        removeFromCart(el) {
            this.items = this.items.filter(item => item.id !== el.id)
        },
        
    },
    computed: {
        
    }
    
}
</script>