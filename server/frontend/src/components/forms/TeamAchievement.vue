<template>
  <div>
    <b-form @submit.prevent="submit($event)">
      <b-form-group id="exampleInputGroup1"
                    label="Tounrnament Name:"
                    label-for="tournamentName">
        <b-form-input id="tournamentName"
                      type="text"
                      v-model="form.tournamentName"
                      placeholder="Enter tournament name"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Achivement name:"
                    label-for="acheivementName">
        <b-form-input id="acheivementName"
                      type="text"
                      v-model="form.achievementName"
                      placeholder="Enter achievement name"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Venue name:"
                    label-for="venueOfAcheivemnet">
        <b-form-input id="venueOfAcheivemnet"
                      type="text"
                      v-model="form.venueOfAchievemnet"
                      placeholder="Enter achievement venue"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Achievement Date:"
                    label-for="dateOfAcheivement">
        <b-form-input id="dateOfAcheivement"
                      type="date"
                      v-model="form.dateOfAchievement"
                      placeholder="Enter achievement date"
                      required>
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose file photo"></b-form-file>
      <div v-if="file" class="mt-3">Selected file: {{file && file.name}} <i @click="file = null" class="fa fa-close pointer"></i></div>

      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";
import * as moment from 'moment'

export default {
  name: "edit-team",
  props: ['modalProps'],
  data() {
    return {
      load: false,
      file: null,
      form: {},
      moment
    }
  },
  computed: {
    ...mapGetters({
      team: 'team/activeTeam'
    }),
  },
  methods: {
    ...mapActions({
      updateTeam: 'team/updateTeam'
    }),
    async submit() {
      console.log("submitting");
      let that = this;
      that.load = true;

      var upload = '';

      if(this.file)
      {
        let formData = new FormData();
        formData.append("file", this.file);
        upload = await api.postMultipart("/api/file/upload", formData );
        this.form.imgPath = upload.data.url;
      }

      if(this.modalProps && !isNaN(this.modalProps.model)) 
        this.team.achievements.splice(this.modalProps.model, 1,{...this.form});
      else
      this.team.achievements.push(this.form);

      this.updateTeam({achievements: this.team.achievements})
        .then(res => this.$emit('finish'))
        .catch(err => this.$emit('finish'));
    }
  },
  mounted() {
    if(this.modalProps && !isNaN(this.modalProps.model))
    {
      this.form = {...this.team.achievements[this.modalProps.model]};
      this.form.dateOfAchievement = moment(this.form.dateOfAchievement).format('DD-MM-YYYY');
    }
    else
      this.form = {}
  }
}
</script>

<style>

</style>
