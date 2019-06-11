<template>
  <div class="team-confirmation">
    <main-header />
    <div class="confirmation" v-if="!confirm">
      Do you want to accept the team invitaion?<br>
      <button @click="submit('Approved')" class="btn btn-success">Yes</button>
      <button @click="submit('Denied')" class="btn btn-danger">No</button>
    </div>
    <div class="confirmation" v-else>
      Thank You!
    </div>
    <main-footer />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import api from '@/services/RestService';
import notification from '@/mixins/Notification';

export default {
  data() {
    return {
      confirm: false
    }
  },
  components: {
    MainHeader, MainFooter
  },
  mixins: [notification],
  methods: {
    submit(status) {
      this.confirm = true;
      api.put('/api/player/change-status', {status, token: this.$route.params.token})
        .then(
          res => this.showToast(res.data.message),
          err => this.showToast(res.data.message)
        )
    }
  }
}
</script>

<style scoped>
  .team-confirmation {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .confirmation {
    background-color: rgba(255,255,255,0.7);
    border-radius: 5px;
    padding: 50px 50px 0px;
    flex-grow: 1;
    margin: 50px auto auto auto;
    align-items:flex-start;
    height: fit-content;
    max-height: 185px;
    width: fit-content;
    width: -moz-fit-content;
    min-width: 600px;
  }
  .btn {
    width: 100px;
    margin: 10px 10px 0px 0px;
  }
</style>
