const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green-onWhite.jpg',
    imageLink: 'https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg',
    imageAlt: 'Green socks',
    inStock: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [{ id: 2234, color: 'green' }, { id: 2235, color: 'blue' }]
  }
});