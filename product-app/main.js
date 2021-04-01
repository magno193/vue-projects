const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    imageLink: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    imageAlt: 'Green socks',
    inStock: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        id: 2234,
        color: 'green',
        image: './assets/vmSocks-green-onWhite.jpg',
        imageLink: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg'
      },
      {
        id: 2235,
        color: 'blue',
        image: './assets/vmSocks-blue-onWhite.jpg',
        imageLink: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
      }],
    cart: 0,
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
    updateProduct({ image, imageLink }) {
      this.image = image;
      this.imageLink = imageLink;
    }
  }
});