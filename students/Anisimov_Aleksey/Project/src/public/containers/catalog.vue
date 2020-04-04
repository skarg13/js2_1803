<template>
    <div class="product center">
        <item v-for="item of items" :key="item.id" :item='item' />
    </div>
</template>

<script>
import item from '../components/item'
export default {
    components: {item},
    data() {
        return {
            items: {},
            url: 'https://static.trendco.space/js-adv/responses/goods.json'
        }
    },
    // methods: {

    // },
    // computed: {

    // },
    mounted() {
        this.$parent.getData(url)
            .then(data => this.items = data)
    }
}
</script>