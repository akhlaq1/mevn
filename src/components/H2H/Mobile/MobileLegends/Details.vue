<template>
<div class="col-md-8 main-content">

  <b-card>  
            
     <b-container class="bv-example-row">
  <b-row>
    <b-col><div style="text-align: left; color: black;">
<img style="display: block; margin-left: auto; margin-right: auto; width: 150px; height: 150px; border-radius: 150px" :src="game_data.GameImage" alt="Hero"> <br/>
 <h5 v-if="game_data.Name" style="text-align: center; color: black; font-size: 18px;"><b>{{game_data.Name}} </b> </h5> 
 <br>
    <b-row><b-col>  

</b-col><b-col></b-col></b-row><div class="is-divider-vertical" data-content="OR"></div>
<b-row>
    <b-col>
  <h5 style="font-weight: bold; text-align: left; color: black; font-size: 16px;">Genre</h5>
  <h5 style="text-align: left; color: black; font-size: 16px;">    {{game_data.Genre}}  </h5>
  </b-col>
  <v-divider vertical></v-divider><b-col>
  <h5 style="font-weight: bold; text-align: left; color: black; font-size: 16px;">Publisher</h5>
  <h5 style="text-align: left; color: black; font-size: 16px;">    {{game_data.Publisher}}  </h5>
  </b-col>
  <v-divider vertical></v-divider>
  <b-col>
  <h5 style="font-weight: bold; text-align: left; color: black; font-size: 16px;">Size</h5>
  <h5 style="text-align: left; color: black; font-size: 16px;">  {{game_data.Size}}</h5>
  </b-col> 
  <b-col>
  <h5 style="font-weight: bold; text-align: left; color: black; font-size: 16px;">Google Play Store</h5>
<a :href="game_data.GooglePlayStoreLink">  <h5 style="text-align: left; color: black; font-size: 16px;">Play Store</h5></a> 
  </b-col></b-row>

<v-divider></v-divider>
<b-row>
    <b-col>
  <h5 style="font-weight: bold; text-align: left; color: black; font-size: 16px;">Price</h5>
  <h5 style="text-align: left; color: black; font-size: 16px;">{{game_data.Price}} </h5>
  </b-col>
  <v-divider vertical></v-divider><b-col>
  <h5 style="font-weight: bold; text-align: left; color: black; font-size: 16px;">Users</h5>
  <h5 style="text-align: left; color: black; font-size: 16px;"> {{game_data.Users}}
 </h5>
  </b-col>
  <v-divider vertical></v-divider>
  <b-col>
  <h5 style="font-weight: bold; text-align: left; color: black; font-size: 16px;">Rating</h5>
  <h5 style="text-align: left; color: black; font-size: 16px;">{{game_data.Rating}}</h5>
  </b-col> 
  <b-col>
 <h5 style="font-weight: bold; text-align: left; color: black; font-size: 16px;">iTunes App Store</h5>
<a :href="game_data.ItunesStoreLink">  <h5 style="text-align: left; color: black; font-size: 16px;">Play Store</h5></a> 
    </b-col>
  
  </b-row>

  
     </div></b-col>


  </b-row>
  <v-divider></v-divider>
</b-container> 
<b-col>
 <div>
  <PublicInbox style="position: relative; top: -30px;" class="col"/>
  
 </div>
</b-col>   
</b-card>



  



  

            </div>
          
  
     

        <!-- Modal Component -->
       
  
  
</template>
<style>

</style>

<script>
import PublicInbox from '@/components/Inbox/PublicInbox.vue';

import {mapActions, mapGetters} from 'vuex';
import { constants } from 'fs';
export default {
  props: {
    
  },
  name: 'Sponsors',
    data () {
    return {
    
    }
    },
    components:{
      PublicInbox
    },    
    methods:{
       ...mapActions({
      setGame:'AsyncSetGame'
  }),

     
 
    },
    computed:{
      ...mapGetters({
        game_data:'get_game', 
      })
    },
    beforeMount(){
      console.log("hello 189 blah bla ")
      this.setGame();      
      
    }
}
</script>