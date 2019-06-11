<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-form-group id="exampleInputGroup1"
                    label="Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="age"
                    label="Age"
                    label-for="exampleInput2">
        <b-form-input id="age"
                      type="number"
                      v-model="form.age"
                      placeholder="Enter age">
        </b-form-input>
      </b-form-group>
      <b-form-group id="role"
                    label="Favorite Role"
                    label-for="role">
        <b-form-input id="role"
                      type="text"
                      v-model="form.favRole"
                      placeholder="Favorite role">
        </b-form-input>
      </b-form-group>
      <b-form-group id="description"
                    label="Description"
                    label-for="description">
        <b-form-textarea id="description"
                      v-model="form.UserFulldescription"
                     :rows="3">
        </b-form-textarea>
      </b-form-group>
      <!-- Styled -->
        <b-button class="margin-bottom-10" >Choose avatar from our list</b-button>
      <div class="margin-bottom-10" >
        <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose profile photo (optional)"></b-form-file>
        <div v-if="file" class="mt-3">Selected file: {{file && file.name}} <i class="fa fa-close" @click="file =null"></i></div>
      </div>  

      <div>
        <b-form-file v-model="fileCover" :state="Boolean(file)" placeholder="Choose cover photo (optional)"></b-form-file>
       <div class="alert alert-primary" role="alert">
         Cover photo min-height should be 150px and width should be 3 times greater than height for better view.
        </div>
        <div v-if="fileCover" class="mt-3">Selected file: {{fileCover && fileCover.name}} <i class="fa fa-close" @click="fileCover =null"></i></div>
      </div>      
      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button class="margin-r-20" @click="resetForm()" variant="secondary">Reset</b-button>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>
<style>
/* .margin-r-20{
  margin-right: 20px;
} */
</style>

<script>
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "edit-profile",
  props: ['data'],
  data() {
    return {
      load: false,
      file: null,
      fileCover: null,
      form: {
        name: this.data.name ,
        age: this.data.age,
        profilePic: this.data.profilePic,
        favRole: this.data.favRole,
        UserFulldescription:this.data.UserFulldescription,
      },
      request: 'put',
    }
  },
  
  methods: {
    ...mapGetters({
        getUserId: "getUserId"
      }),
    resetForm(){
      this.form={
        name: '',
        age: '',
        profilePic: '',
        favRole: '',
        UserFulldescription:'',
      }
      this.file= null;
      this.fileCover= null;
    },
    async submit() {
      let that = this;
      that.load = true;

      if(this.file)
      {
        let formData = new FormData();
        formData.append("file", this.file);
        this.profilePic = await api.postMultipart("/api/file/upload", formData );
        //console.log(this.profilePic.data.url);
      }
      if(this.fileCover)
      {
        let formData = new FormData();
        formData.append("file", this.fileCover);
        this.coverPic = await api.postMultipart("/api/file/upload", formData );
        //console.log(this.profilePic.data.url);
      }

      if(this.request == 'post'){
        // let userId = this.getUserId();
        console.log('call from here')
        api.post(`/api/users/add-detail`, {
          name: this.form.name,
          userId: this.getUserId(),
          profilePic: this.profilePic ? this.profilePic.data.url : this.data.profilePic,
          coverPhoto: this.coverPic ? this.coverPic.data.url : this.data.coverPic,
          age: this.form.age,
          favRole: this.form.favRole,
          UserFulldescription: this.form.UserFulldescription,
        }).then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
        }
      else {
        // let userId = this.getUserId();
        api.put(`/api/users/update-detail`, {
          name: this.form.name,
          userId: this.getUserId(),
          profilePic: this.profilePic ? this.profilePic.data.url : this.data.profilePic,
          coverPhoto: this.coverPic ? this.coverPic.data.url : this.data.coverPic,
          age: this.form.age,
          favRole: this.form.favRole,
          UserFulldescription: this.form.UserFulldescription,
        }).then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      }
    }
  },
  watch: {
    data(){
      this.form = this.data;
      console.log(this.data);
      if(this.data.is_bio == false) this.request = "post";
      else this.request = "put";
    }
  }
}
</script>

