<template>
    <div class="product center">
        <item />

    </div>
</template>

<script>
import item from '../components/item.vue'
export default {
    components: {item},
    data() {
        return {
            items: {},
            url: 'https://static.trendco.space/js-adv/responses/goods.json'
        }
    },
    methods: {

    },
    computed: {

    },
    mounted() {
        this.$parent.getData(url)
            .then(data => this.items = data)
    }
}
</script>