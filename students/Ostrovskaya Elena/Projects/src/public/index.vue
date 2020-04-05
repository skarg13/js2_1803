<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart" id="cart">
                <form action="#" class="search-form" @input="$children[1].setShowItems(search)">
                    <input type="text" class="search-field" v-model="search">
                    <button class="btn-search">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-cart" @click="$children[0].seen = !$children[0].seen">Cart</button>
                <cart/>
            </div>
        </header>
        <main >
            <catalog/>
        </main>
    </div>
</template>

<script>
import catalog from './containers/Catalog.vue'
import cart from './containers/Cart.vue'
export default {
    data(){
        return{
            search: ""
        }
    },
    components: {catalog, cart},
    methods: {
        getData(url) {  
            return  fetch(url).then(dataReceived => dataReceived.json())
        },
        addData (url, obj) {
            return fetch(url, {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(obj)
            }).then(d => d.json())
        },
    }
}
</script>
