<template>
  <div>
    <b-form @submit.prevent="submit">
      <b-form-group id="exampleInputGroup1"
                    label="News title:"
                    label-for="name">
        <b-form-input id="name"
                      type="text"
                      v-model="form.title"
                      placeholder="Enter title">
        </b-form-input>
      </b-form-group>
      <b-form-group id="news"
                    label="News detail"
                    label-for="news">
        <b-form-input id="news"
                      type="text"
                      v-model="form.news"
                      placeholder="enter news">
        </b-form-input>
      </b-form-group>
      <!-- Styled -->
      <b-form-file v-model="main" :state="Boolean(file)" placeholder="Enter news image"></b-form-file>
      <div v-if="file" class="mt-3">Selected file: {{file && file.name}}</div>

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

export default {
  name: "team-news",
  props: ['data'],
  data() {
    return {
      load: false,
      main: null,
      form: {}
    }
  }
}
</script>

