<template>
    <div class="box has-text-centered" id="login">
        <h2 class="title">Fullstack Clothing</h2>
        <button :class="[{'is-loading' : loading}, 'button is-primary']" @click="login">Login</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'LoginBox',
    computed: {
        ...mapGetters(['loading'])
    },
    methods : {
        login () {
            this.$store.dispatch("login")
                       .then(() => {
                           this.$router.push({ path: '/products' });
                       });
        }
    }
}
</script>

<style scoped>
.box {
    padding: 30px;
}
</style>
