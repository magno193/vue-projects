const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    }
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeCart(id) {
      if (this.cart.length) {
        this.cart.splice(id, 1);
      }
    }
  },
});
