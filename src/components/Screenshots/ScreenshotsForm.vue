 <template>
  <div class="col-md-8 main-content">
    <h5 class="heading2">Screenshot Submission</h5> 
     <b-card>
  <b-form  @submit="onSubmit" @reset="onReset" >
    <h5>Upload Images</h5>
    <ValidationProvider name="caption" rules="required|min:5|max:50|url">
  <div slot-scope="{ errors }">  
   <b-form-group
      label="Enter a caption for your screenshot"
    >
      <b-form-input v-model="form.caption" trim />
    </b-form-group>
        <p>{{ errors[0] }}</p>
  </div>  
    </ValidationProvider>
          <b-form-checkbox name="accurate">The images i've uploaded do not depict nudity/hate speech/offensive material</b-form-checkbox>        
          <b-form-checkbox name="terms" value="that">I agree to WagerGames Terms and Conditions</b-form-checkbox>   
       <p style="color: red"> Incorrect entries or entries including profanity/hate speech will be deleted </p>

 <b-button block type="submit" variant="primary">Submit</b-button>
 <b-button block type="reset" variant="danger">Reset</b-button>
  </b-form>
  </b-card>
 
  

    </div>
    </template>

     <script>
  export default {
    data() {
      return {
        form: {
          caption: '',
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
        this.form.caption = ''
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
  </script>