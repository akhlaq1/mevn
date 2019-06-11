<template>
    <div class="col-md-8 main-content">
    <h5 class="heading2">Streams & Videos</h5>  
    <VideoPlayer/>
    <br>
 <b-button href="#/streams/form" block class="m-md-2">
   Submit YouTube video/stream
  </b-button>
   <b-button disabled block id="ddown1" class="m-md-2">
   Submit Twitch stream
  </b-button>

 
     

  </div>

  
                            
                           
</template>

<script>
import VideoPlayer from '@/components/VideoPlayer'
export default 
{
   name: 'Streams',
  components: {
    VideoPlayer
  },
  data () {
    return {
      form: {
        email: '',
        name: '',
        creator: '',
        food: null,
        checked: []
      },
      contenttypes: [
        { text: 'Select One', value: null },
        'Gaming', 'Offtopic', 'Crypto', 'Music'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      this.form.name = '';
      this.form.food = null;
      this.form.checked = [];
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  }
}

</script>

<style scoped> 
</style>
