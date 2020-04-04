<template>
    <div :class="type === 'catalog' ? 'product__item' : 'cart__item'">
        <template v-if="type === 'catalog'">
            <img class="product__img" :src="imgComputed" :alt="item.title"/>
            <div class="product__desc">
                <p class="product__h2">{{ item.title }}</p>
                <p class="product__price">$ {{ item.price }}</p>
            </div>
            <button class="addToCart">Купить</button>
        </template>

        <template v-if="type === 'cart'">
            <img :src="imgComputed" :alt="item.title">
                <div class="cart__desc">
                    <p class="cart__title">{{ item.title }}</p>
                    <p class="cart__qtt">{{ item.quantity }}</p>
                    <p class="cart__price">$ {{ item.price }}</p>
                </div>
                <button class="cart__action" @click="removeItem()">&times;</button>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'catalog'
            //default: () => 'catalog'
        },
        item: {
            type: Object
        }
    },
    methods: {
        removeItem() {
            this.$emit('remove', this.item.id)
        }
    },
    computed: {
        imgComputed() {
            return `https://placehold.it/${this.type === 'catalog' ? '200x200' : '80x100'}`
        }
    }
}
</script>