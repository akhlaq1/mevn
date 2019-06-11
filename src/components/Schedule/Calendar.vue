 // src/components/Calendar.vue

    <template>
  <div>
    <full-calendar :events="events" @eventClick="handleEventClick"/>
    <b-modal ref="editModal">
      <event-form v-model="selectedEvent" :showButtons="false"/>
      <div slot="modal-footer" class="w-100 d-flex justify-content-center">
        <b-btn size="sm" class="mr-2" variant="primary" v-b-modal.saveConfirmationModal>Save</b-btn>
        <b-btn size="sm" class="mr-2" variant="primary" v-b-modal.deleteConfirmationModal>Delete</b-btn>
        <b-btn size="sm" variant="primary" @click="closeModal">Cancel</b-btn>
      </div>
    </b-modal>
    <b-modal id="saveConfirmationModal" ok-title="Save" @ok="updateEvent">
      <p>Are you sure you want to overwrite this event?</p>
    </b-modal>
    <b-modal id="deleteConfirmationModal" ok-title="Delete" @ok="deleteEvent">
      <p>Are you sure you want to delete this event?</p>
    </b-modal>
  </div>
</template>

    <script>
import FullCalendar from "vue-fullcalendar";
import EventForm from "@/components/Schedule/EventForm.vue";

export default {
  name: "Calendar",
  props: ["events"],
  components: {
    FullCalendar,
    EventForm
  },
  data() {
    return {
      selectedEvent: {
        eventId: "",
        title: "",
        start: "",
        end: "",
        cssClass: "",
        data: {
          description: ""
        }
      }
    };
  },
  methods: {
    handleEventClick(event) {
      this.clearSelectedEvent();
      this.selectedEvent = Object.assign({}, this.selectedEvent, event);
      this.$refs.editModal.show();
    },
    closeModal() {
      this.$refs.editModal.hide();
    },
    deleteEvent() {
      this.$emit("delete-event", this.selectedEvent.eventId);
    },
    updateEvent() {
      this.$emit("update-event", this.selectedEvent);
    },
    clearSelectedEvent() {
      Object.assign(this.$data, this.$options.data.call(this));
    }
  }
};
</script>

<style>
.red {
  background: rgb(235, 77, 77) !important;
  color: whitesmoke !important;
}
.blue {
  background: rgb(59, 59, 163) !important;
  color: whitesmoke !important;
}
.orange {
  background: orange !important;
  color: white !important;
}
.green {
  background: rgb(49, 155, 49) !important;
  color: white !important;
}
.blue,
.orange,
.red,
.green {
  font-size: 13px;
  font-weight: 500;
  text-transform: capitalize;
}
.event-item {
  padding: 2px 0 2px 4px !important;
}
</style>
