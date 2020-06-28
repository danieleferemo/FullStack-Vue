const state = {
  notes : [],
  timestamps : []
}

const mutations = {
  ADD_NOTE (state, payload) {
    let newNote = payload;
    state.notes.push(newNote);
  },
  ADD_TIMESTAMP (state, payload) {
    let newTimeStamp = payload;
    state.timestamps.push(newTimeStamp);
  }
}

const actions = {
  addNote (context, payload) {
    context.commit('ADD_NOTE', payload);
  },
  addTimestamp (context, payload) {
    context.commit('ADD_TIMESTAMP', payload);
  }
}

const getters = {
  getNotes: state => state.notes,
  getTimestamps: state => state.timestamps,
  getNoteCount (state) {
    return state.notes.length;
  }
}

const store = new Vuex.Store({state, mutations, actions, getters})

const EventBus = new Vue();

const inputComponent = {
  template: `<input class="input is-small" 
                    type="text" 
                    :placeholder="placeholder" 
                    v-model="input"
                    @keyup.enter="monitorEnterKey"/>`,
  prop : ['placeholder'],
  data () {
    return {
      input:''
    }
  },
  methods : {
    monitorEnterKey () {
      // EventBus.$emit ('add-note',{        
      //   note : this.input,
      //   timestamp : new Date().toLocaleString()
      // });
      // this.input = '';
      this.$store.dispatch('addNote', this.input);
      this.$store.dispatch('addTimestamp', new Date().toLocaleString());
      this.input = '';
    }
  }
}

const noteCountComponent = {
  template : `<div class="note-count">Note count: <strong> {{ noteCount }} </strong></div>`,
  // data () {
  //   return {
  //     noteCount: 0
  //   }
  // },
  created () {
    EventBus.$on('add-note', event => this.noteCount++);
  },
  computed: {
    noteCount() {
      return this.$store.getters.getNoteCount;
    }
  }
}

new Vue({
  el: '#app',
  store,
  components: {
    'input-component': inputComponent,
    'note-count-component' : noteCountComponent
  },
  data: {
    // notes: [],
    // timestamps: [],
    placeholder : 'Enter a note'
  },
  methods : {
    addNote (event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    }
  },
  created () {
    EventBus.$on('add-note', event => this.addNote(event));
  },
  computed : {
    notes () {
      return this.$store.getters.getNotes;
    },
    timestamps () {
      return this.$store.getters.getTimestamps;
    }
  }
})