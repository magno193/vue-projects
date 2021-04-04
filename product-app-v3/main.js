const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      brand: 'Vue Mastery',
      selectedVariant: 0,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        {
          id: 01,
          color: 'green',
          image: './assets/images/socks_green.jpg',
          quantity: 50,
        },
        {
          id: 02,
          color: 'blue',
          image: './assets/images/socks_blue.jpg',
          quantity: 0,
        }
      ]
    }
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    removeFromCart() {
      if (this.cart > 0)
        this.cart--;
    },
    updateVariant(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return `${this.product} ${this.brand}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    }
  }
})
