<template>
    <div id="calendar-week" class="container">
      <div class="columns is-mobile">
        <CalendarDay v-for="d in sharedState.seedData" 
                    :key="d.id"
                    :day="d"/>
      </div>
    </div>
</template>

<script>
import { store } from '../store.js';
import CalendarDay from './CalendarDay.vue';

export default {
  name: 'CalendarWeek',
  data () {
    return {
      sharedState: store.state
    }
  },
  components: {
    CalendarDay
  }
}
</script>

<style lang="scss" scoped>

#calendar-week {
  margin-bottom: 50px;
  .column {
    padding: 0 0 0 0;
  }

    &:last-child {
      border-right: 1px solid #8F8F8F;
    }
}

</style>
