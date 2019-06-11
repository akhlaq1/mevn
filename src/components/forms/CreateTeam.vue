<template>
  <div>
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
  </div>
</template>

<script>
import api from "@/services/RestService"
import { mapActions } from "vuex";
import Notification from "@/mixins/Notification";

export default {
  name: "create-team",
  props: ['modalProps'],
  mixins: [Notification],
  data() {
    return {
      cover: '',
      profile: '',
      form: {},
      load: false
    }
  },
  mounted() {
  },
  methods: {
    ...mapActions({
      createTeam: "team/createTeam"
    }),
    async submit() {
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

      this.createTeam(this.form)
        .then(res => {this.showToast(res.message); this.$emit('finish'); this.$router.push('/team/' + res.response._id)})
        .catch(err => {this.showToast(err, "error"), this.$emit('finish')});
    }
  }
}
</script>

