  <template>
 <div class="col-md-8 main-content">
        
                               <center> <h5 class="heading2" style="text-align: center;">Esports H2H - Game Submission</h5></center>
  <b-card>
  <b-form  @submit="onSubmit" @reset="onReset" >
    <h5>Game Submission</h5>
    <ValidationProvider name="name" rules="required|min:5|max:30">
  <div slot-scope="{ errors }">  
   <b-form-group
      label="Enter the title of the game"
    >
      <b-form-input v-model="form.name" trim />
    </b-form-group>
        <p>{{ errors[0] }}</p>
  </div>
</ValidationProvider>
    <ValidationProvider name="developer" rules="required|min:5|max:100">
  <div slot-scope="{ errors }">  
    <b-form-group
      label="Enter the developer of the game"
    >
      <b-form-input v-model="form.developer" trim />
    </b-form-group>
            <p>{{ errors[0] }}</p>
  </div>
  </ValidationProvider>
      <ValidationProvider name="genre" rules="required|min:5|max:100">
  <div slot-scope="{ errors }">  
    <b-form-group
      label="Enter the genre of the game"
    >
      <b-form-input v-model="form.genre" trim />
    </b-form-group>
            <p>{{ errors[0] }}</p>
  </div>
  </ValidationProvider>
<form action="/action_page.php">
  <input type="file" name="pic" accept="image/*">
</form> </br>
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
          developer: '',
          genre: '',

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
        this.form.developer = ''
        this.form.genre = ''
    
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
  </script>
  