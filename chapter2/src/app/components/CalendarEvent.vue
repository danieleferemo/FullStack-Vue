<template>
    <div class="day-event" :style="getEventBackgroundColor">
        <div v-if="!event.edit">
            <span class="has-text-centered details">{{ event.details }}</span>
            <div class="has-text-centered icons">
                <i class="fa fa-pencil-square edit-icon" @click="editEvent(day.id, event.details)"></i>
                <i class="fa fa-trash-o delete-icon" @click="deleteEvent(day.id, event.details)"></i>
            </div>
        </div>

        <div v-if="event.edit">
            <input type="text" :placeholder="event.details" v-model="newEventDetails"/>
            <div class="has-text-centered icons">
                <i class="fa fa-check" @click="updateEvent(day.id, event.details, newEventDetails)"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store';
export default {
    name : 'CalendarEvent',
    props : ['day', 'event'],
    computed : {
        getEventBackgroundColor() {
            const colors = ['#FF9999', '#85D6FF', '#99FF99'];
            let randomColor = colors[Math.floor(Math.random() *  colors.length)];
            return `background-color: ${randomColor}`;
        }
    },
    methods : {
        editEvent (dayId, eventDetails) {
            store.editEvent(dayId, eventDetails);
        },
        updateEvent (dayId, originalEventDetails, newEventDetails) {
            if (newEventDetails === '') newEventDetails = originalEventDetails;
            store.updateEvent(dayId,originalEventDetails,newEventDetails);
            this.newEventDetails = '';
        },
        deleteEvent (dayId, eventDetails) {
            store.deleteEvent(dayId, eventDetails);
        }
    },
    data () {
        return {
            newEventDetails : ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>