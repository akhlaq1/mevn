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
                      v-model="form.acheivementName"
                      placeholder="Enter achievement name"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Venue name:"
                    label-for="venueOfAcheivemnet">
        <b-form-input id="venueOfAcheivemnet"
                      type="text"
                      v-model="form.venueOfAcheivemnet"
                      placeholder="Enter achievement venue"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Achievement Date:"
                    label-for="dateOfAcheivement">
        <b-form-input id="dateOfAcheivement"
                      type="date"
                      v-model="form.dateOfAcheivement"
                      placeholder="Enter achievement date"
                      required>
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file ref="fileinput" :required="index === false ? true : false" v-model="file" :state="Boolean(file)" placeholder="Choose avatar"></b-form-file>
      <div v-if="file" class="mt-3">Selected file: {{file && file.name}}</div>

      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button class="margin-r-20" @click="resetForm()" variant="secondary">Reset</b-button>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";

export default {
name: "edit-team",
  props: ['data', 'index', 'request','title'],
  data() {
    return {
      load: false,
      file: null,
      form: {}
    }
  },
  methods: {
    ...mapGetters({
        getUserId: "getUserId"
      }),
    resetForm(){
      this.file= null,
      this.form = {}
    },
    async submit(evt) {

let that = this;
      that.load = true;
      console.log(this.form)
      if(this.file)
      {
        let formData = new FormData();
        formData.append("file", this.file);
        this.profilePic = await api.postMultipart("/api/file/upload", formData );
        this.$refs.fileinput.reset();
      }

      let payload = {...this.form};

      payload["imgPath"] = this.profilePic ? this.profilePic.data.url : (this.index !== false ? this.data[this.index].imgPath : '');

      if(this.index !== false)
        this.data[this.index] = payload;
      else this.data.push(payload);

      if(this.request == 'post')
        api.post("/api/users/add-detail", {
          userId: this.getUserId(),
          acheivements:this.data
        })
        .then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      else {
        api.put("/api/users/update-detail", {
          userId: this.getUserId(),
          acheivements:this.data
        }).
        then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      }
      
      this.form.name = null;
    }
  },
  watch: {
    data(){
      //this.form = this.data;
      if(this.index !== false)
      {
        this.form = {...this.data[this.index]};
        console.log("here1");
      }
    },
    index(){
      if(this.index !== false)
      {
        this.form = {...this.data[this.index]};
        console.log("here2");
      }
    }
  }
}
</script>

<style>

</style>
