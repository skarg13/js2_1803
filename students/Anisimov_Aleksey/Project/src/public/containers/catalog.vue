<template>
    <div class="product center">
        <item v-for="item of filteredItems" :key="item.id" :item='item' @add='addToCart' />
    </div>
</template>

<script>
//import item from '../components/item'
export default {
    components: {
        item: () => import('../components/item')
    },
    data() {
        return {
            items: [],
            searchStr: '',
            filteredItems: [],
            url: 'https://static.trendco.space/js-adv/responses/goods.json'
        }
    },
    methods: {
        addToCart(data) {
            this.$parent.$refs.cartRef.items.push(data)
            
        },
        filterGoods(string) {
            let regexp = new RegExp(string, 'i') // создали регулярку
            this.filteredItems = this.items.filter(good => regexp.test(good.title)) // отфильтровали и записали, следом сразу рендер
        },
        isItemInCart(el) {
            return this.items.includes(item => item.id === el.id)
        }
    },
    computed: {

    },
    mounted() {
        this.$parent.getData(this.url)
            .then(data => {this.items = data})
            .then(() => {this.filteredItems = this.items})
    }
}
</script>