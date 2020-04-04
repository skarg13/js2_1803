<template>
  <div class="header center">
    <div class="search">
      <input type="text" name="search" id="search" v-model="searchStr" maxlength="20" @keyup.enter="filterGoods" />
      <button class="search__button" type="button" @click="filterGoods($event)">Искать</button>
    </div>
    <div class="cart">Корзина
      <div class="cart__empty hidden">Корзина пуста</div>
      <div class="cart__block">
        <p class="cart__p">Всего товаров: {{ item.quantity }} шт.</p>
        <hr class="cart__hr">
        <cart ref="cartRef" />
        <hr class="cart__hr">
        <p class="cart__p">Общая стоимость: ${{ cart.totalAmount }}</p>
      </div>
    </div>
    <main>
      <catalog ref="catalogRef" />
    </main>
  </div>
</template>

<script>
import catalog from './containers/catalog'
export default {
    components: { catalog },
    methods: {
      getDate(url) {
        return fetch(url).then(dataResived => dataResived.json())
      }
    }
};
</script>

<style lang="sass">
</style>