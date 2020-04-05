<template>
    <div class="products" id="catalog">
         <item v-for="item of items" :key="item.id_product"  :item="item"/>       
    </div>
</template>

<script>
import item from '../components/Item.vue'
export default {
    components: {item},
    data() {
        return{
            items: [],
            url:'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json '
        }
    },
    mounted(){
        this.$parent.getData(this.url)
        .then(data => {
            this.items = data;
        })
    }
}
</script>