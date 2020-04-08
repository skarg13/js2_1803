<template>
    <div class="cart-block" v-show="cart_show">
        <div class="d-flex">
            <strong class="d-block">Всего товаров</strong> <div id="quantity"></div>
        </div>
        <hr>
        <div class="cart-items">
            <item v-for="item of items" :key="item.id_product" :item="item" :type="'çart'" />
        </div>
        <hr>
        <div class="d-flex">
            <strong class="d-block">Общая ст-ть:</strong> <div id="price"></div>
        </div>
    </div>
</template>

<script>
import item from '../components/Item.vue'
export default {
    components: { item },
    data() {
        return {
            cart_show: false
            items: [],
            url: 'https://raw.githubusercontent.com/andykey-krsk/online-store-api/master/responses/getBasket.json'
        }
    },
    // methods: {

    // },
    // computed: {

    // },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {
            this.items = data
        })
        //console.log(this)
    }
}
</script>
