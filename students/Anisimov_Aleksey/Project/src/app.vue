<template>
  <div>
    <div class="header center">
      <div class="search">
        <input
          type="text"
          name="search"
          id="search"
          v-model="searchStr"
          maxlength="20"
          @keyup.enter="filterGoods"
        />
        <button class="search__button" type="button" @click="filterGoods($event)">Искать</button>
      </div>
      <div class="basket">
        <img
          src="https://static.trendco.space/js-adv/shopping-cart-solid.svg"
          alt="Cart"
          class="basket__img"
          @click="isVisibleCart = !isVisibleCart"
        />
        <div class="item__counter hidden"></div>
        <div class="basket__empty hidden">Корзина пуста</div>
        <div class="basket__table" v-show="isVisibleCart">
          <div class="basket__table_tr">
            <div class="basket__table_th">Picture</div>
            <div class="basket__table_th">Name</div>
            <div class="basket__table_th">Quantity</div>
            <div class="basket__table_th">Price</div>
            <div class="basket__table_th">Sub&nbsp;total</div>
            <div class="basket__table_th">Action</div>
          </div>
        </div>
      </div>
    </div>
    <div class="product center">
      <div class="product__item" v-for="item of filteredItems" :key="item.id">
        <img
          class="product__img"
          src="https://static.trendco.space/js-adv/no_foto.jpg"
          :alt="item.title"
        />
        <div class="product__desc">
          <p class="product__h2">{{ item.title }}</p>
          <p class="product__price">$ {{ item.price }}</p>
        </div>
        <button class="addToCart" @click="addToCart">Купить</button>
      </div>
    </div>
  </div>
</template>

<script>
import catalog from './containers/catalog.vue'
export default {
    components: { catalog },
    methods: {
      getDate() {
        
      }
    }
};
</script>

<style lang="sass">
</style>