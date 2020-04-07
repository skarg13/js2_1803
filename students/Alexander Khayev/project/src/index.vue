<template>
  <div>
    <header>
      <logo-menu :value="companyName"></logo-menu>
      <div class="cart">
        <search-menu v-model="searchString"></search-menu>
        <button class="btn-cart" @click="show = !show">Cart</button>
        <transition name="fade">
          <cart v-show="show"></cart>
        </transition>
      </div>
    </header>
    <main>
      <catalog :value="searchString"></catalog>
    </main>
  </div>
</template>

<script>

  export default {
    name: "app",
    components: {
      "logo-menu": () => import('./components/logo-menu.vue'),
      "search-menu": () => import('./components/search-menu.vue'),
      "cart": () => import('./components/cart.vue'),
      "catalog": () => import('./containers/catalog.vue'),
    },
    methods: {
      getData(url) {
        return fetch('/api/' + url)
          .then(data => data.json())
          .catch(e => this._dialog('Не удалось загрузить данные'));
      },
      putData(url, obj) {
        return fetch('/api/' + url)
          .then(data => data.json())
          .catch(e => this._dialog('Не удалось загрузить данные'));
      },
      _dialog(msg) {
        alert(msg);
      },
    },
    data: function () {
      return {
        show: true,
        searchString: "",
        companyName: 'Mini-Super :)',
      }
    },
    mounted() {
    },
  }
</script>

<style>
  .cart {
    position: relative;
  }

  .btn-cart {
    background-color: #fafafa;
    padding: 10px 20px;
    border: 1px solid transparent;
    color: #2f2a2d;
    border-radius: 5px;
    transition: all ease-in-out .4s;
    cursor: pointer;
  }

  .btn-cart:hover {
    background-color: transparent;
    border-color: #fafafa;
    color: #fafafa;
  }

  .btn-cart, .logo {
    align-self: center;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1.5s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
  {
    opacity: 0;
  }

</style>
