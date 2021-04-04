const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: 'Socks',
      image: './assets/images/socks_green.jpg',
      inStock: false,
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 01, color: 'green', image: './assets/images/socks_green.jpg' },
        { id: 02, color: 'blue', image: './assets/images/socks_blue.jpg' }
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
    updateImage(image) {
      this.image = image;
    }
  },
})
