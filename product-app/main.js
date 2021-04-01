const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    brand: 'Vue Mastery',
    selectedVariant: 0,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        id: 2234,
        color: 'green',
        image: './assets/vmSocks-green-onWhite.jpg',
        quantity: 10
      },
      {
        id: 2235,
        color: 'blue',
        image: './assets/vmSocks-blue-onWhite.jpg',
        quantity: 0
      }],
    cart: 0,
    onSale: false
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1
      }
    },
    updateProduct(index) {
      this.selectedVariant = index;
    }
  }, computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    sale() {
      const title = `${this.brand} ${this.product}`;
      return this.onSale ? `${title} are on sale!` : `${title} are not on sale`
    }
  },
});