<template>
  <div class="invitation-form">
    <b-form @submit.prevent="submit($event)">
        <b-form-input id="name"
                      type="text"
                      v-model="username"
                      placeholder="Enter name"
                      required
                      class="mb-2">
        </b-form-input>
        <b-form-input id="name"
                      type="text"
                      v-model="role"
                      placeholder="Enter role"
                      required>
        </b-form-input>
      <!-- Styled -->

      <div class="col-flex" style="margin-top: 20px; align-items: center">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <br>
        <b-button style="margin-left: auto;" type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import api from '@/services/RestService';
import notifications from '@/mixins/Notification'

export default {
  name: 'invitation-form',
  props: ['modalProps'],
  mixins: [notifications],
  data() {
    return {
      username: '',
      role: '',
      load: false
    }
  },
  methods: {
    submit() {
      this.load = true;
      const payload = {
        username: this.username,
        role: this.role
      }
      api.put('/api/add-team-member/' + this.modalProps.teamId, payload)
        .then(
          res => {
            this.load = false;            
            this.showToast("Invite sent");
            this.$emit('finish');
          },  
          err => {
            console.log(err);
            this.showToast("Invitation failed", "error");
            this.$emit('finish');
            this.load = false;
          }
        )

    }
  }
}
</script>

<style>

</style>
