<template>
  <div>
    <b-form @submit.prevent="submit($event)">
      <b-form-group id="exampleInputGroup1"
                    label="Sponsor Name:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.name"
                      placeholder="Enter name"
                      required>
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup1"
                    label="Sponsor Link:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.link"
                      placeholder="Enter link"
                      required>
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file ref="fileinput" v-model="file" :state="Boolean(file)" placeholder="upload picture"></b-form-file>
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
  props: ['data', 'index', 'request'],
  data() {
    return {
      load: false,
      file: null,
      form: {}
    }
  },
  updated(){
    console.log(this.data);
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
      
      console.log("submitting");
      let that = this;
      that.load = true;

      if(this.file)
      {
        let formData = new FormData();
        formData.append("file", this.file);
        this.picture = await api.postMultipart("/api/file/upload", formData );
        this.$refs.fileinput.reset();
      }

      let payload = {...this.form};
      if(this.file)
      {
        payload["picture"] = this.picture ? this.picture.data.url : (this.index ? this.data[this.index].imgPath : '');
      }
      if(this.index  !== false )
        {
          this.data[this.index] = payload;
        }
      else 
        { 
          this.data.push(payload);
        }
    console.log(this.data)
    console.log(payload)
      if(this.request == 'post')
        api.post("/api/users/add-detail", {
          userId: this.getUserId(),
          sponsors:this.data
        })
        .then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
      else {
        api.put("/api/users/update-detail", {
          userId: this.getUserId(),
          sponsors:this.data
        }).
        then(res => {that.load = false; 
        that.$emit("submit", res.data)
        })
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