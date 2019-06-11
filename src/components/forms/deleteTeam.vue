<template>
  <div>
    <b-form @submit.prevent="submit($event)">
        <div>Are you sure to delete the team?</div> 
      <div style="margin-top: 20px; text-align: right">
        <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <b-button type="submit" variant="danger">Delete</b-button>
      </div>
    </b-form>
  </div> 
</template>

<script>
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";

export default {
  name: "delete-team",
  props: ['data', 'team', 'type',],
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
console.log(this.data[this.team]);
console.log(this.data);
    delete this.data[this.team]
console.log(this.data);
let data = []
for (const team of this.data) {
        if(team!= null){
            data.push(team)
        }
}

      let payload = {};
        payload.userId = this.getUserId();
        payload[this.type] = [ ...data];
        api.put("/api/users/update-detail", payload).
        then(res => {that.load = false; that.$emit("submit", res.data)})
        .catch(err => console.log(err))
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
