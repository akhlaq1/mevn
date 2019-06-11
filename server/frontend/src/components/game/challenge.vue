<template>
    <div class="col-md-8 main-content">

  <b-card >  
            
  <h1 style=" font-family: Shojumaru; color: black;">{{getGame.game_name}}</h1>

  <v-divider/>

     




     
      <b-row>
<b-col>
      <b-card>
 <h3 class="Challenger">{{getChallenger}}
     </h3> 
      <img style="float: right;" class="avatar" src="images/fortnite.jpg"/>
 </b-card>
    </b-col>
    <b-col cols="auto">
          <h1 style=" font-family: Shojumaru; color: black; relative; margin-top: 20px;" >VS</h1>
          </b-col>
 <b-col>
 <b-card>

      <img style="float: left;" class="avatar" src="images/fortnite.jpg"/>
      <h3 class="Oponent">{{getOponent}}</h3>
</b-card>
</b-col>
      </b-row>

      <br>
      
<b-row>
    <b-col>
         <b-input-group size="lg" prepend="$" append="USD">
    <b-form-input
    v-if="!challenge_status"
          id="input-1"
          v-model="bet_ammount"
          type="number"
          required
          placeholder="Enter amount"
          style="width: 10%;"
          min="0"
        >  </b-form-input>
         </b-input-group>
    </b-col>

</b-row>
 <h1 style=" font-family: Shojumaru; color: black;">Win Amount: {{bet_ammount*1.8}} </h1>

     <br>
    <b-button v-if="!challenge_status" :disabled=" bet_ammount<=0" variant="outline-primary" v-on:click="()=>{this.showChallengeRequest=true;}" block>Challenge</b-button>

       <h1 v-if="challenge_status">{{challenge_status}}</h1>  

         <div v-if="challenge_status && challenge_status=='Finished'" class="Challenger">
             <h4>Winner {{winner}}</h4>
         </div>

         <div v-if="challenge_status && challenge_status=='Finished'" class="Oponent">
             <h4>Loser {{loser}}</h4>
         </div>
         <h4 v-if="getChallenge && challenge_status">challenge_id:{{getChallenge._id}}</h4>



<b-button v-if="getChallenge && (challenge_status && challenge_status!='Finished')"  variant="outline-primary" v-on:click="result_modal">submit results</b-button>

<b-button v-if="challenge_status && challenge_status=='Finished'" variant="outline-primary"  v-on:click="()=>{this.showChallengeDispute=true;}">Dispute</b-button>

<b-button v-if="challenge_status && (challenge_status=='Finished')" variant="outline-primary"  v-on:click="()=>{this.$router.push('/h2h/mobile/mobilelegends/details');}">Back to ChatRoom</b-button>


  </b-card>  

  
  
        

  
<b-alert :show="showGetChallengeResult"  dismissible variant="light" ref="result-modal" id="modal-2" title="Result" hide-footer>
    <p class="my-4">Did you win or lose?</p>
 
         
    <b-button v-on:click="win_notification" style="margin:5%;" variant="outline-primary">win</b-button>   
    <b-button v-on:click="lose_notification" style="margin:5%;" variant="outline-primary">lose</b-button>   
 
</b-alert>   



  <b-alert :show="showChallengeResult"  dismissible variant="light" ref="Result-modal" id="modal-3" title="Result" hide-footer>
    
    <h1>Winner:{{winner}}</h1><br>
    <h1>Loser:{{loser}}</h1>
         
    
  </b-alert>   

 

  <b-alert :show="showChallengeRequest"  dismissible variant="light" ref="my-modal" id="modal-1" title="Challenge" hide-footer>
    <p class="my-4">Are you sure ?</p>

         <span class="error" v-if="get_error">{{get_error.msg}}</span>
    <b-button v-on:click="send_notification" style="margin:5%;" variant="outline-primary">yes</b-button>   
    <b-button v-on:click="()=>{this.showChallengeRequest=false}" style="margin:5%;" variant="outline-primary">no</b-button>
 
  </b-alert>   


  <b-alert :show="showChallengeDispute"  dismissible variant="light" ref="my-modal" id="modal-1" title="Challenge" hide-footer>
    <p class="my-4"> Here at WagerGames we take disputes seriously.
         Both financial and account penalties will be applied upon verification of a party supplying false information,
          including false disputes</p>

        <br>
        
         <b-form-group label="Did you win or loose?">
      <b-form-radio v-model="selected" name="some-radios" value="win">Win</b-form-radio>
      <b-form-radio v-model="selected" name="some-radios" value="loose">Loose</b-form-radio>
    </b-form-group>
      <label>Upload screenshot of result screen</label>
      <input type="file"  v-on:change="handleFileUpload" />

      <label>Content Type</label>
       <b-form-select v-model="CT_selected" class="mb-3">
      <option :value="null">Please select an option</option>
      <option value="skype">Skype</option>
      <option value="email">Email</option>
      <option value="facebook">Facebook</option>
      <option value="telegram">Telegram</option>
    </b-form-select>
      
     <b-form-textarea
      id="textarea"
      v-model="contact_details"
      placeholder="Contact Details "
      rows="3"
      max-rows="6"
    ></b-form-textarea>

     <b-form-textarea
      id="textarea1"
      v-model="additional_comments"
      placeholder="Aditional Comments"
      rows="3"
      max-rows="6"
    ></b-form-textarea>

   <b-button v-on:click="submit_dispute" style="margin:5%;" variant="outline-primary" v-b-modal.dispute-1>submit dispute</b-button>   
 
  </b-alert>   
 

 
  <b-modal id="dispute-1" title="BootstrapVue" hide-footer>
    <p class="my-4">Thankyou. We will look into this and contact you as soon as possible</p>
  </b-modal>    


  
  
  

  



            </div>
          
  

     

</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { constants } from 'fs';
import { setTimeout } from 'timers';
export default {
    data(){
        return{
         selected:null, 
         bet_ammount:0,
         challenge_started:false,
         challenge_notification:{},
          winner:'',
          loser:'',
          showGetChallengeResult:false,
          showChallengeRequest:false,
          showChallengeResult:false,
          showDisputeForm:false,
          showChallengeDispute:false,
          selected:'',
          file:'',
          CT_selected:'',
          contact_details:'',
          additional_comments:'',
          winamount: 0,
        }  
    },
    sockets:{
    
      Challenge_acception:function(data){
          console.log(data);
          this.challenge_started=true;
          this.SetStatus('Started');  
          this.start_challenge();
      }, 
      Challenge_rejection:function(data){

      },
      Result:function(data){
           this.winner=data.data.Winner;
           this.loser=data.data.Loser;
          
           this.SetStatus('Finished');
           this.showChallengeResult=true;     
   
      }
    },
    computed:{ 
        ...mapGetters({
            getOponent:'get_Oponent',
            getChallenger:'get_Challenger',
            getGame:'Get_game_Challenge',
            get_error:'Get_c_error',
            get_Challenge:'Get_Challenge',
            get_Game:'get_game',
            challenge_status:'getChallengeStatus',
            getChallenge:'get_challenge',
            getUserName:'getUserName',

        }),
        
    },
    beforeDestroy(){
          this.SetStatus('');
    },

    methods:{
  getTotal()
{
    var winamount = bet_ammount * 1.8                      
},

        submit_dispute(){
            
         this.RegisterDispute({
             challenge_id:this.getChallenge._id,
             Contact_Source:this.CT_selected,
             Contact_Details:this.contact_details,
             add_comments:this.additional_comments,
             DisputeImage:this.file
         });
         setTimeout(()=>{
            this.$router.push('/h2h/mobile/mobilelegends/details');
         },15000)  
        },
        
        result_modal(){
            console.log("asjakj")
           this.showGetChallengeResult=true;
        },
        win_notification(){
            let loser='';
            
            if(this.getChallenger==this.getUserName){
                loser=this.getOponent;
            }
            else{
                loser=this.getChallenger
            }
            console.log("winnner") 
            console.log(this.getChallenge._id)
         this.$socket.emit('result_notification',{
             receiver:loser,
             room:'Mobile Legends:Bang Bang',    
             challenge_id:this.getChallenge._id,
             Winner:this.getUserName,
             Loser:loser,
         });
          this.showGetChallengeResult=false;
        },
        lose_notification(){
            let winner='';
            if(this.getChallenger==this.getUserName){
                winner=this.getOponent;
            }
            else{
                winner=this.getChallenger
            }
            console.log("loser")
         this.$socket.emit('result_notification',{  
             receiver:winner,
             room:'Mobile Legends:Bang Bang',    
             challenge_id:this.getChallenge._id,
             Winner:winner,
             Loser:this.getUserName,
         });  
          this.showGetChallengeResult=false;
        },
         send_notification(){
             
         this.$socket.emit('challenge_notification',{ 
             challenger:this.getChallenger,
             game:this.getGame.game_name,   
             bet:this.bet_ammount,
             receiver:this.getOponent,
             room:this.get_Game.ShortName.toLowerCase(),    
            });   
            this.showChallengeRequest=false;
            this.SetStatus('waiting');
            console.log(this.challenge_status);
         },
        
        start_challenge(){   
            let data={    
             oponent:this.getOponent, 
             challenger:this.getChallenger,
             game:'Mobile Legends:Bang Bang',   
              
         };
         console.log(data)
         this.Start_Challenge(data);
         this.$refs['my-modal'].hide()
        },   
        handleFileUpload(event){
           
         event.preventDefault();
         this.file=event.target.files[0];  
         console.log(this.file);  

        }, 
        ...mapActions({
            Start_Challenge:'AsyncStartChallenge', 
            SetStatus:'AsyncChallengeStatus',
            RegisterDispute:'AsyncSubmitDispute',
        }),
    }
}
</script>
 <style scoped>
.title{
    text-align: center;
}
.CO{
    display: flex;
    flex-direction: row;
}
.Challenger,.modes{
    float: left;
    
}
.Oponent{
    float: right;
    
}
.error{
    color: red;
}
.modes{
    float: left;
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
 @font-face { font-family: Shojumaru; src: url('/css/fonts/shojumaru-regular.ttf'); }

</style>


