<template>
    <div class="product-list">
      <div class="product-list--item">
        <div>
          <h2 class="has-text-weight-bold">{{ productItem.title }}
            <span class="tag 
                is-primary
                is-pulled-right
                has-text-white" @click="addCartItem(productItem)">
              Add to Cart
            </span>
          </h2>
          <p>{{ productItem.description }}</p>
          <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-usd"></i> {{ productItem.price }}
          </span>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name : 'PoductListItem',
    props : ['productItem'],
    methods : {
        // addCartItem(productItem) {
        //     this.$store.dispatch('addCartItem', productItem);
        // }
        // the above code is equivalent to 
        ...mapActions(['addCartItem'])
    }
}
</script>

<style scoped>
    .tag {
        cursor: pointer;
    }
</style>
