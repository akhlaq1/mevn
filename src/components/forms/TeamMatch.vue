<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-form-group id="exampleInputGroup1"
                    label="Game/Event name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      required
                      v-model="form.gameName"
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="date"
                    label="Game/Event date"
                    label-for="date">
        <b-form-input id="date"
                      type="date"
                      required
                      v-model="form.date"
                      placeholder="dd/mm/yyyy">
        </b-form-input>
      </b-form-group>
      <b-form-group id="link"
                    label="Event Website"
                    label-for="link">
        <b-form-input id="link"
                      type="text"
                      required
                      v-model="form.link"
                      placeholder="url of event">
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file required v-model="main" :state="Boolean(main)" placeholder="Choose game/event photo"></b-form-file>
      <div v-if="main" class="mt-3">Selected file: {{main && main.name}} <i @click="main = null" class="fa fa-close pointer"></i></div>
      <b-form-file required v-model="team1" :state="Boolean(team1)" placeholder="Choose team 1 photo"></b-form-file>
      <div v-if="team1" class="mt-3">Selected file: {{team1 && team1.name}} <i @click="team1 = null" class="fa fa-close pointer"></i></div>
      <b-form-file required v-model="team2" :state="Boolean(team2)" placeholder="Choose team 2 photo"></b-form-file>
      <div v-if="team2" class="mt-3">Selected file: {{team2 && team2.name}} <i @click="team2 = null" class="fa fa-close pointer"></i></div>

      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button type="submit" variant="primary">Update</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";
import * as moment from "moment";

export default {
  name: "edit-team-detail",
  props: ['data', 'modalProps'],
  computed: {
    ...mapGetters({
      team: 'team/activeTeam'
    }),
  },
  data() {
    return {
      load: false,
      main: null,
      team1: null,
      team2: null,
      form: {}
    }
  },
  methods: {  
    ...mapActions({
      updateTeam: 'team/updateTeam'
    }),
    async submit() {
      console.log("submitting");
      let that = this;
      that.load = true;
      var upload = null;

      if(this.main) {
        let formData = new FormData();
        formData.append("file", this.main);
        upload = await api.postMultipart("/api/file/upload", formData );
        if(upload.data.url)
          this.form.gamePic = upload.data.url;
      }
      if(this.team1) {
        let formData = new FormData();
        formData.append("file", this.team1);
        upload = await api.postMultipart("/api/file/upload", formData );
        if(upload.data.url)
          this.form.team1Logo = upload.data.url;
      }
      if(this.team2) {
        let formData = new FormData();
        formData.append("file", this.team2);
        upload = await api.postMultipart("/api/file/upload", formData );
        if(upload.data.url)
          this.form.team2Logo = upload.data.url;
      }

      if(this.modalProps && !isNaN(this.modalProps.model)) 
        this.team.matches.splice(this.modalProps.model, 1,{...this.form});
      else
        this.team.matches.push(this.form);

      this.updateTeam({matches: this.team.matches})
        .then(res => this.$emit('finish'))
        .catch(err => this.$emit('finish'));
    }
  },
  mounted() {
    if(this.modalProps && !isNaN(this.modalProps.model))
    {
      this.form = {...this.team.matches[this.modalProps.model]};
      this.form.date = moment(this.form.date).format('DD-MM-YYYY');
    }
    else
      this.form = {}
  }
}
</script>

