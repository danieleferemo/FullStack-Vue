const ButtonRow = {
  template : `
  <div>
    <button class="ui button" name="button-hoodie" value="fullstack-hoodie" @click="onButtonClick">Hoodie</button>
    <button class="ui button" name="button-tee" value="fullstack-tee" @click="onButtonClick">Tee</button>
    <button class="ui button" name="button-fitted-cap" value="fullstack-fitted-cap" @click="onButtonClick">Fitted Cap</button>
    <button class="ui button" name="button-jacket" value="fullstack-jacket" @click="onButtonClick">Jacket</button>
  </div>
  `,
  methods: {
    onButtonClick (evt) {
      const button = evt.target;
      console.log(`The user clicked ${button.name}: ${button.value}`);
    }
  },
}

new Vue({
  el: '#app',
  components: {
    'button-row' : ButtonRow
  }
})
