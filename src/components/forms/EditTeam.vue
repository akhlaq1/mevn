<template>
  <div>
    <b-form @submit.prevent="submit($event)">
       <b-form-group id="exampleInputGroup1"
                    label="Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      placeholder="Enter name"
                      required>
        </b-form-input>
      </b-form-group>
      <!-- Styled -->

      
      <b-form-file ref="fileinput" :required="team === false ? true : false" v-model="file" :state="Boolean(file)" placeholder="Choose photo"></b-form-file>
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
  props: ['data', 'team', 'type', 'edit' , 'request'],
  data() {
    return {
      load: false,
      file: null,
      form: {
        name: ''
      }
    }
  },
  updated(){
    console.log(this.data)
  },
  methods: {
    ...mapGetters({
        getUserId: "getUserId"
      }),

    resetForm(){
      this.file= null,
      this.form = {
        name: ''
      }
    },
    async submit(evt) {
      let that = this;
      that.load = true;

      if(this.file)
      {
        let formData = new FormData();
        formData.append("file", this.file);
        this.profilePic = await api.postMultipart("/api/file/upload", formData );
        this.$refs.fileinput.reset();
      }

      let paylod = {
        name: this.form.name,
        imgPath: this.profilePic ? this.profilePic.data.url : (this.team !== false ? this.data[this.team].imgPath : '')
      };

      let payload = {};
      if(this.team !== false){
        this.data[this.team] = paylod;
        payload.userId = this.getUserId();
        payload[this.type] = [ ...this.data];
        payload[this.type][this.team] =paylod
      }
      else { 
        payload.userId = this.getUserId();
        payload[this.type] = [ ...this.data,paylod];
      }


      if(this.request == 'post')
        api.post("/api/users/add-detail", payload)
        .then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      else {
        api.put("/api/users/update-detail", payload).
        then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      }
      
      this.form.name = null;
    }
  },
  watch: {
    data(){
      this.form = this.data || {};
    },
    team(){
      if(this.team !== false)
      {
        this.form.name = this.data[this.team].name;
      }
    }
  }
}
</script>
