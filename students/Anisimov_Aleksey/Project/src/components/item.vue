<template>
    <div>
        <template v-if="type === 'catalog'">

        </template>
        <template v-if="type === 'cart'">
            // шаблон html для корзины
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
    computed: {
        imgComputed
    }
}
</script>