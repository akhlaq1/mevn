  <template>
 <div class="col-md-8 main-content">
        
                               <center> <h5 class="heading2" style="text-align: center;">Sponsors</h5></center>
  <b-card>
  <b-form  @submit="onSubmit" @reset="onReset" >
    <h5>Sponsor Application</h5>
    <ValidationProvider name="name" rules="required|min:5|max:30">
  <div slot-scope="{ errors }">  
   <b-form-group
      label="Enter your name"
    >
      <b-form-input v-model="form.name" trim />
    </b-form-group>
        <p>{{ errors[0] }}</p>
  </div>
</ValidationProvider>
    <ValidationProvider name="preferred contact" rules="required|min:5|max:100">
  <div slot-scope="{ errors }">  
    <b-form-group
      label="Enter your preferred contact"
    >
      <b-form-input v-model="form.contact" trim />
    </b-form-group>
            <p>{{ errors[0] }}</p>
  </div>
  </ValidationProvider>
  <ValidationProvider name="email" rules="required|email">
  <div slot-scope="{ errors }">  
   <b-form-group
      label="Enter your email"
    >
      <b-form-input v-model="form.email" trim />
    </b-form-group>
                <p>{{ errors[0] }}</p>
  </div>
  </ValidationProvider>
   <ValidationProvider name="Skype ID" rules="required|min:2|max:50">
  <div slot-scope="{ errors }">  
  <b-form-group
      label="Enter your Skype ID (optional)"
    >
      <b-form-input id="input5" v-model="form.skype" trim />
    </b-form-group>
                <p>{{ errors[0] }}</p>
  </div>
  </ValidationProvider>
      <h5>Corporate Details</h5>
       <ValidationProvider name="company name" rules="required|min:5|max:50">
  <div slot-scope="{ errors }">  
   <b-form-group
      label="Enter the name of the company you work for."
    >
      <b-form-input v-model="form.company" trim />
    </b-form-group>
                <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>
  <ValidationProvider name="job title" rules="required|min:5|max:30">
  <div slot-scope="{ errors }">  
    <b-form-group
      label="Enter your job title"
    >
      <b-form-input v-model="form.job" trim />
    </b-form-group>
    <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>
   <ValidationProvider name="country" rules="required|min:5|max:30">
  <div slot-scope="{ errors }">  
   <b-form-group
      label="Enter the country you are located in"
    >
      <b-form-input  v-model="form.country" trim />
    </b-form-group>
    <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>
       <ValidationProvider name="city and state" rules="required|min:5|max:70">
  <div slot-scope="{ errors }">  
  <b-form-group
      label="Enter the city and state you are located in."
    >
    
      <b-form-input v-model="form.city" trim />
    </b-form-group>  
        <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>     
<h5>Social Media</h5>
  <ValidationProvider name="facebook URL" rules="required|min:5|max:30">
  <div slot-scope="{ errors }">
   <b-form-group
      label="Enter your company's facebook URL"
    >
      <b-form-input id="input2" :state="state" v-model="form.facebook" trim />
    </b-form-group>
        <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>
      <ValidationProvider name="website" rules="required|min:5|max:30">
  <div slot-scope="{ errors }">
    <b-form-group
      label="Enter your company's website"
       >
      <b-form-input v-model="form.website" trim />
    </b-form-group>
            <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>
     <ValidationProvider name="twitch channel" rules="min:5|max:30">
  <div slot-scope="{ errors }">
   <b-form-group
      label="Enter your company's Twitch channel (optional)"
    >
      <b-form-input v-model="form.twitch" trim />
    </b-form-group>
                <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>
    <ValidationProvider name="YouTube channel" rules="min:5|max:30">
  <div slot-scope="{ errors }">
  <b-form-group
      label="Enter your company's YouTube channel (optional)"
    >
      <b-form-input v-model="form.youtube" trim />
    </b-form-group>

            <p>{{ errors[0] }}</p>
  </div>
    </ValidationProvider>
    <h5>esports History</h5>
    <ValidationProvider name="tournaments" rules="min:5|max:30">
  <div slot-scope="{ errors }">
   <b-form-group
      label="How many tournaments have you organised? (optional)"
    >
      <b-form-input id="input2" :state="state" v-model="form.tournaments" trim />
    </b-form-group>
         <p>{{ errors[0] }}</p>         
  </div>
    </ValidationProvider>
     <ValidationProvider name="players" rules="min:5|max:30">
  <div slot-scope="{ errors }">
    <b-form-group
      label="How many players took part in your tournaments generally? (optional)"
    >
      <b-form-input v-model="form.players" trim />
    </b-form-group>
                <p>{{ errors[0] }}</p>        
  </div>
    </ValidationProvider>
       <ValidationProvider name="games" rules="min:5|max:30">
  <div slot-scope="{ errors }">
   <b-form-group
      label="What games are you interested in hosting tournaments for? Seperate them with commas (optional)"
    >
      <b-form-input v-model="form.games" trim />
    </b-form-group>
                    <p>{{ errors[0] }}</p>        
  </div>
    </ValidationProvider>
        <ValidationProvider name="genres" rules="min:5|max:30">
  <div slot-scope="{ errors }">
  <b-form-group
      label="What genres are you most interested in? Seperate them with commas (optional)"
     >
      <b-form-input v-model="form.genres" trim />
    </b-form-group>
                        <p>{{ errors[0] }}</p>        
  </div>
    </ValidationProvider>
 <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
  </b-card>
  </div>
  </template>
  <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          contact: '',
          email: '',
          skype: '',
          company: '',
          job: '',
          country: '',
          city: '',
          facebook: '',
          website: '',
          twitch: '',
          youtube: '',
          tournaments: '',
          players: '',
          games: '',
          genres: ''
        },
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        const userStr = JSON.stringify(this.form);
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.name = ''
        this.form.contact = ''
        this.form.email = ''
        this.form.skype = ''
        this.form.company = ''
        this.form.job = ''
        this.form.city = ''
        this.form.country = ''
        this.form.facebook = ''
        this.form.website = ''
        this.form.twitch = ''
        this.form.youtube = ''
        this.form.tournaments = ''
        this.form.players = ''
        this.form.games = ''
        this.form.genres = ''
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
  </script>
  