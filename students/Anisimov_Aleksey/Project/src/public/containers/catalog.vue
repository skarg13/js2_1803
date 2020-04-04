<template>
    <div class="product center">
        <item v-for="item of filteredItems" :key="item.id" :item='item' />
    </div>
</template>

<script>
import item from '../components/item'
export default {
    components: { item },
    data() {
        return {
            items: [],
            cart: [],
            searchStr: '',
            whiteListRegExp: /[^0-9a-zа-я.-\s]/gi, //для строки поиска
            filteredItems: [],
            url: 'https://static.trendco.space/js-adv/responses/goods.json'
        }
    },
    // methods: {

    // },
    computed: {

    },
    mounted() {
        this.$parent.getData(this.url)
            .then(data => {this.items = data})
            .then(() => {this.filteredItems = this.items})
    }
}
</script>