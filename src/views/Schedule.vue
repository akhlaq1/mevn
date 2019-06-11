<template>
  <div id="app">
    <div class="main">
      <div class="calendar-holder">
        <calendar
          :events="events"
          @update-event="handleUpdateEvent"
          @delete-event="handleDeleteEvent"
        />
      </div>
      <div class="form-holder">
        <h3>Schedule an event</h3>
        <event-form/>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import Calendar from "@/components/Schedule/Calendar.vue";
import EventForm from "@/components/Schedule/EventForm.vue";
import Pusher from "pusher-js";
export default {
  name: "app",
  components: {
    MainHeader,
    Calendar,
    EventForm
  },
  data() {
    return {
      events: [
        {
          eventId: 1,
          title: "event1",
          start: "2018-12-09",
          cssClass: "blue",
          YOUR_DATA: {}
        },
        {
          eventId: 2,
          title: "event2",
          start: "2018-12-10",
          end: "2018-12-13",
          cssClass: ["orange"]
        }
      ]
    };
  },
  created() {
    // Add your pusher credentials
    const pusher = new Pusher("b9f633f2654478de1fcd", {
      cluster: "ap1",
      forceTLS: true
    });
    const channel = pusher.subscribe("schedule");
    channel.bind("new-event", data => {
      // Increment last eventId. This is just a placeholder and should be removed
      // when saving events to the database is implemented, since auto-incrementing
      // ids should be eventually handled by the database.
      data.eventId = this.events.length ? this.events[this.events.length - 1].eventId++ : 0;

      this.events = [...this.events, data];
    });
    channel.bind("update-event", data => {
      const index = this.events.findIndex(
        ({ eventId }) => eventId == data.eventId
      );
      this.events.splice(index, 1, data);
    });
    channel.bind("delete-event", id => {
      const index = this.events.findIndex(({ eventId }) => eventId == id);
      this.events.splice(index, 1);
    });
  },
  methods: {
    async handleDeleteEvent(id) {
      await fetch("http://localhost:4000/schedule/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        }
      });
    },
    async handleUpdateEvent(event) {
      await fetch("http://localhost:4000/schedule/" + event.eventId, {
        method: "PUT",
        body: JSON.stringify(event),
        headers: {
          "content-type": "application/json"
        }
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.main {
  display: flex;
  align-items: center;
}
.calendar-holder {
  width: 65%;
}
.form-holder {
  width: 35%;
}
.form-holder > h3 {
  color: orangered;
  text-transform: uppercase;
  font-size: 16px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 10px;
}
</style>
