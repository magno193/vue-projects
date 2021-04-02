Vue.component('Product', {
  props: {
    premium: {
      type: Boolean,
      required: true,
    }
  },
  template: `
    <div class="product">
        <div class="product-image">
          <img :src="image" />
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
          <p>{{ sale }}</p>
          <p>Shipping: {{ shipping }}</p>

          <ul>
            <li v-for="(detail, index) in details" :key="index">
              {{ detail }}
            </li>
          </ul>

          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            class="color-box"
            :style="{ 'background-color': variant.color }"
            @mouseover="updateProduct(index)"
          ></div>

          <button
            @click="addToCart"
            :disabled="!inStock"
            :class="{ disabledButton: !inStock }"
          >
            Add to Cart
          </button>
          <button @click="removeFromCart">Remove item</button>
        </div>
        <product-review @review-submitted="addReview"></product-review>
      </div>
  `,
  data() {
    return {
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
      onSale: false,
      reviews: [],
    }
  },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].id);
    },
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addReview(productReview) {
      this.reviews.push(productReview);
    }
  },
  computed: {
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
    },
    shipping() {
      if (this.premium) {
        return 'Free';
      }
      return 2.99;
    }
  },
});

Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name"/>
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"/>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>
        <input type="submit" value="Submit"/>
      </p>
    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
    }
  },
  methods: {
    onSubmit() {
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
      };
      this.$emit('review-submitted', productReview);
      this.name = null;
      this.review = null;
      this.rating = null;
    }
  }
});

Vue.config.devtools = true;
const app = new Vue({
  el: '#app',
  data: {
    premium: false,
    cart: [],
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeCart(id) {
      if (!this.cart.length) return;

      const indexToRemove = this.cart.indexOf(id);
      this.cart.splice(indexToRemove, 1);
    }
  }
});
