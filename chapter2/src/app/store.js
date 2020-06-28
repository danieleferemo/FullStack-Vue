import { seedData } from './seed.js';

export const store = {
    state : {
        seedData
    },
    getActiveDay () {
        return this.state.seedData.find((day) => day.active);
    },
    setActiveDay (dayId) {
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    },
    submitEvent (eventDetails) {
        const activeDay = this.getActiveDay();
        activeDay.events.push({"details": eventDetails, "edit": false});
    },
    editEvent (dayId, eventDetails) {
        this.resetEditOfAllEvents();
        const eventObj = this.getEventObj (dayId, eventDetails);
        eventObj.edit = true;
    },
    resetEditOfAllEvents () {
        this.state.seedData.map((dayObj) => {
            dayObj.events.map((event) => {
                event.edit = false;
            })
        })
    },
    updateEvent (dayId, originalEventDetails, newEventDetails) {
        const eventObj = this.getEventObj (dayId, originalEventDetails);

        eventObj.details = newEventDetails;
        eventObj.edit = false;        
    },
    deleteEvent (dayId, eventDetails) {
        const dayObj = this.state.seedData.find(x => x.id === dayId);
        const eventIndexToRemove = dayObj.events.findIndex(x => x.details === eventDetails);

        dayObj.events.splice(eventIndexToRemove, 1);
    },
    getEventObj (dayId, eventDetails) {
        const dayObj = this.state.seedData.find(x => x.id === dayId);
        return dayObj.events.find(e => e.details === eventDetails);
    }
}