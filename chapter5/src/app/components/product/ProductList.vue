<template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    
    <div class="product-list-item" 
         v-for="x in productItems" 
         :key="x.id">
      <PoductListItem :productItem="x"/>
    </div>

    <div class="product-count has-text-right">
      <span class="has-text-weight-bold"># of products: 4</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PoductListItem from './ProductListItem'

export default {
  name: 'ProductList',
  created () {
    this.$store.dispatch('getProductItems');
  },
  computed : {
    // productItems () {
    //   return this.$store.getters.productItems;
    // }
    // below code block similar to that above
    ...mapGetters(['productItems']) // ...mapGetters is a helper method and can also take in a namespace to point to a module in a specific namespace
  },
  components: {
    PoductListItem
  }
}
</script>

<style scoped>
.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 10px 0;
}
</style>
