<template>
    <div class="cart" @click="checkCart()">Корзина
        <div class="cart__empty" v-if="isEmptyCart">Корзина пуста</div>
        <div class="cart__block" v-show="isVisibleCart">
          <p class="cart__p">Всего товаров: шт.</p>
          <hr class="cart__hr">
          
          <item v-for="item of items" :key='item.id' />

          <hr class="cart__hr">
          <p class="cart__p">Общая стоимость: $</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [],
            isVisibleCart: false,
            isEmptyCart: false
        }
    },
    methods: {
        checkCart() {
            if (this.items) {
                this.isEmptyCart = !this.isEmptyCart
            } else {
                this.isVisibleCart = !this.isVisibleCart
            }
        }
    },
    mounted() {
        
    }
    
}
</script>