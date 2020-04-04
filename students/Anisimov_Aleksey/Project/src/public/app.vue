<template>
  <div>
    <div class="header center">
      <div class="search">
        <input type="text" name="search" id="search" v-model="searchStr" maxlength="20" @keyup.enter="filterGoods" />
        <button class="search__button" type="button" @click="filterGoods($event)">Искать</button>
      </div>
      
      <cart ref="cartRef" />

    </div>
    <main>
        <catalog ref="catalogRef" />
    </main>
  </div>

</template>

<script>
import catalog from './containers/catalog'
import cart from './containers/cart'
export default {
    components: {
      catalog,
      cart
    },
    methods: {
      getData(url) {
        return fetch(url).then(dataResived => dataResived.json())
      },
      filterGoods(event) {
        this.checkSearchStr() // приводим строку поиска к норм формату
        let regexp = new RegExp(this.searchStr, 'i') // создали регулярку
        this.filteredItems = this.items.filter(good => regexp.test(good.title)) // отфильтровали и записали, следом сразу рендер
      },
      checkSearchStr() {
        this.searchStr = (this.searchStr.trim()).replace(/\s{2,}/g, ' ') // сначала тримим, потом азмена множественных пробелов на один
        this.searchStr = this.searchStr.replace(this.whiteListRegExp, '') // тут делаем замену в строке, останутся только разрешенные символы
      },
      addToCart(event) {
        console.log(event);
          
      }
    }
};
</script>

<style lang="sass">
</style>