<template>
  <b-form @submit.prevent="submit">
    <b-form-group id="exampleInputGroup1"
                    label="Team Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.teamName"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="founder"
                    label="Founder"
                    label-for="founder">
        <b-form-input id="founder"
                      type="text"
                      v-model="form.founder"
                      required
                      placeholder="founder name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="owner"
                    label="Owner"
                    label-for="owner">
        <b-form-input id="owner"
                      type="text"
                      required
                      v-model="form.ownerName"
                      placeholder="owner name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="location"
                    label="Location"
                    label-for="location">
        <b-form-textarea id="location"
                      v-model="form.location"
                      required
                      :rows="3">
        </b-form-textarea>
      </b-form-group>
      <!-- Styled -->
      <!-- <b-button id="show-modal" @click="showModal = true" variant="success">Select avatar from our list</b-button>
  -->
       <b-button>Select avatar</b-button>

      <div class="mb-3">
        <b-form-file required v-model="cover" placeholder="Choose cover photo"></b-form-file>
        <div v-if="cover" class="mt-1">Selected file: {{cover && cover.name}} <i @click="cover = null" class="pointer fa fa-close"></i></div>
      </div>
      <div class="mb-3">
        <b-form-file required v-model="profile" placeholder="Choose profile photo"></b-form-file>
        <div v-if="profile" class="mt-1">Selected file: {{profile && profile.name}} <i @click="profile = null" class="pointer fa fa-close"></i></div>
      </div>

    <div style="margin-top: 20px; text-align: right">
      <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
      <b-button type="submit" variant="primary">Update</b-button>
    </div>




    
  </b-form>





  
</template>

<script>
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "edit-team-detail",
  props: ['data'],
  data() {
    return {
      load: false,
      cover: null,
      profile: null,
      cover: null,
      form: {
        teamName: '',
        ownerName: '',
        location: '',
        founder: '',
        coverImg: '',
        profileImg: '',
        showModal: false
      },
      dataImages:
      [{
  id: '1',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 1'
}, {
  id: '2',
  src: 'https://unsplash.it/200?random',
  alt: 'Alt Image 2'
}],
    }
  },
  computed: {
    ...mapGetters({
      team: 'team/activeTeam'
    }),
  },
  mounted() {
    this.form = {...this.team};
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

      if(this.cover) {
        let formData = new FormData();
        formData.append("file", this.cover);
        upload = await api.postMultipart("/api/file/upload", formData );
        if(upload.data.url)
          this.form.coverImg = upload.data.url;
      }
      if(this.profile) {
        let formData = new FormData();
        formData.append("file", this.profile);
        upload = await api.postMultipart("/api/file/upload", formData );
        if(upload.data.url)
          this.form.profileImg = upload.data.url;
      }

      this.updateTeam(this.form)
        .then(res => this.$emit('finish'))
        .catch(err => this.$emit('finish'));
    }
  }
}
</script>

