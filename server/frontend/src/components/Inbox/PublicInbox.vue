<template>
    <div style="margin-left: -25px;" id="public-inbox">  
        <strong style="float: left"> Public Chat</strong>
             <strong style="position: relative; left: 135px;"> Online Users</strong>
        <b-row style="  
 overflow-y: scroll; width: 110%">
            <b-col sm="8">
        <div v-if="isPublic">
      <div  class="chat-box">      
          <div v-if="messages" >  
            <div v-for="(msg,index) in messages" :key="index" 
            class="msg" v-bind:class="getClass(msg)"
            >

            <span v-if="!self"> 
            <div class="dropdown">
                <img class="avatar dropbtn" src="images/fortnite.jpg"/>
<!--PROFILE MENU -->
                  <div class="dropdown-content">
    <a >Message &nbsp;<font-awesome-icon style="bottom: 20px;" icon="envelope" class="fa-2x" /></a>
    <a >Challenge &nbsp;<font-awesome-icon  icon="comment-dollar" class="fa-2x" /></a>
  </div>
  </div>
                <strong>&nbsp;{{msg.Message.username}}:</strong> 
         
            
            &nbsp;</span> 

            <span>{{msg.Message.msg}}</span>    <br>
            <sub>{{msg.Time}} {{msg.Date}} {{msg.Day}}</sub>
            </div>  
        </div>              
      </div>   
         </div>
        
      <div v-if="!isPublic">
    <b-row>
        <b-col>
      <h1 style="font-size:20px; text-align: left;">Chatting with  <b-badge class="badge badge-pill badge-dark">{{ private_user.username }} <img class="avatar" src="images/fortnite.jpg"/></b-badge>           </h1> 

 </b-col>   
 <b-col>
                         <b-button variant="info" block
                         style="position: relative; top: 10px;"
           v-if="!isPublic"
           v-on:click="switch_to_public_chat">
           Return to the chat room</b-button> 
 </b-col>
 </b-row>  

      <div  class="private-chat-box">
        <div v-if="messages_private" >  
            
            <div v-for="(msg,index) in messages_private" :key="index" 
            class="msg" v-bind:class="getClass(msg)"
            ><span v-if="!self"><b-badge pill variant="dark">{{msg.Message.username}}:</b-badge>&nbsp;</span>
            <span>{{msg.Message.msg}}</span> <br> 
            <sub>{{msg.Date}} {{msg.Time}} {{msg.Day}}</sub>             
            </div>  
        </div> 
    </div>
    </div>                
      <div class="form">  
          <input type="text" class="write-msg-field" v-model="message"/>
          <button v-if="isPublic" class="btn btn-primary send-msg" v-on:click="send_msg">Send</button>    
          <button v-if="!isPublic" class="btn btn-primary" v-on:click="send_private_msg">Send</button>  
      </div>
</b-col>
      <b-col sm="4">
      <div v-if="isPublic"> 
     

          <b-list-group style=" text-align: left; align-content: left;" v-if="online_users">  
    
              <b-list-group-item  style=""  v-for="(user,index) in online_users" :key="index">        
            
               <div class="dropdown">   <b-img class="avatar dropbtn" src="images/fortnite.jpg" />
                  
                  <strong>&nbsp;{{ user.name }} </strong><br>
                  <span style="color:red;">{{ user.unseen_msgs }} unread messages  </span>

<div class="dropdown-content">
    <a v-on:click="private_chat(user)">Message &nbsp;<font-awesome-icon style="bottom: 20px;" icon="envelope" class="fa-2x" /></a>
    <a v-on:click="challenge_user(user)">Challenge &nbsp;<font-awesome-icon  icon="comment-dollar" class="fa-2x" /></a>
  </div>
              
</div>
              </b-list-group-item>       
                                
          </b-list-group>  
   
          <p v-else>0 users online</p>   
    
          </div>    
            <button class="btn btn-primary"
           v-if="!isPublic"
           v-on:click="switch_to_public_chat">
           public chat</button>       
  </b-col>
                    </b-row> 
                    
          <b-alert :show="showChallengeNotification"  dismissible variant="light" ref="challenge_notification" id="modal-1" title="Challenge" hide-footer>
    <p class="my-4">challenge notification</p>

         <span  >challenger name: {{challenge_notification.challenger}}</span><br>
         <span  >Game name:{{challenge_notification.game}}</span><br>
         <span  >Bet Amount:{{challenge_notification.bet}}</span>  <br>
         
    <b-button v-on:click="challenge_accepted" style="margin:5%;" variant="outline-primary">yes</b-button>   
    <b-button v-on:click="challenge_rejected" style="margin:5%;" variant="outline-primary">no</b-button>
 
          </b-alert>    
                        
    </div> 
       
</template>  
<script>  
import { mapActions,mapGetters } from 'vuex';
import { constants } from 'fs';

export default { 
           
    name:'PublicInbox',  
    data(){
        return {
       messages:[],
       message:'',      
       chatRoom:'',       
       self:'',
       username:'',
       notification_msg:'',    
       online_users:[],
       isPublic:true,  
       private_user:'',  
       messages_private:[], 
       H2HMobileMobileLegendsPlayers: 500,
       challenge_notification:{}, 
       showChallengeNotification:false,
        } 
       },  
       computed:{
         ...mapGetters({
                get_Game:'get_game',
                
         }),
         
         
       },
        sockets:{
        
        Challenge_notification:function(data){
            console.log("hello got challlenge request");
            console.log(data);
            this.challenge_notification=data.data;
            this.showChallengeNotification=true;
      },
       notification:function(data){
           //this.messages.push(data.data);
          this.online_users=data.online_users.filter((value)=>{
               console.log(this.username)
               if(value.name != this.username) 
               {
                   console.log(value.name)
                  
                  return value;
               }
           });
           console.log("hello:"+this.online_users)
       }, 
       join_room:function(data){
           console.log("msgsksjdasjdask")
           console.log(data.msgs)    
           this.messages=data.msgs;
           console.log(this.messages[0].Message.username);
           console.log(this.messages[0].Message.msg);
           console.log(this.messages[0].Day);
       this.username=data.data; 
       
       this.SetUserName(this.username); 
     this.online_users = data.online_users.filter((value)=>{
           console.log(this.username)
               if(value.name != this.username)
               {
                   console.log(value)
                  return value;
               }      
           });         
           console.log("179 online users");
       console.log(typeof this.online_users)
       console.log(this.online_users)    
       console.log("no of online users"+this.online_users.length) 
       },    
       notification_msg:function(data){   
          
          console.log(data.data.msg)
          if(data.data.msg.Message.username!=this.username){
        var audio=new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
           audio.play();
          
          }
           console.log(data.data.msg)
           this.messages.push(data.data.msg);     

       }, 
       notification_private:function(data){
           var audio=new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
           console.log("audio")
           console.log(audio)
           audio.play();
           
          this.messages_private.push(data.data);
          console.log(this.messages_private.length)
       }, 
       private_msg:function(data){
           if(data.data.Message.username!=this.username){
                
            var audio=new Audio('http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3');
           console.log("audio")
           console.log(audio)
           audio.play();
           }
           console.log("private msgs hello hello ")
           console.log(data.data);
          this.messages_private.push(data.data);
          console.log(this.isPublic)
          if(this.isPublic){
              this.online_users.filter((value)=>{
                  console.log(value.name+"=="+data.data.Message.username);
                  
                  if(value.name == data.data.Message.username){
                      value.unseen_msgs=value.unseen_msgs+1;  
                      console.log("increased unseen");
                  } 
              })
          }
       },
       leave:function(data){
       this.online_users=data.online_users.filter((value)=>{
               if(value.name != this.username  )
               {
                   console.log(value.username)  
                   return value.username;
               }
           });     
           
       },
       Private_Inbox:function(data){
           this.messages_private=data.msgs;
       }   
    },       
    mounted(){         
        this.messages=[]; 

        this.chatRoom='Mobile Legends:Bang Bang';
        
        let data={     
            room:this.chatRoom,    
            token:localStorage.getItem('token')     
        };  
       this.$socket.emit('join_room',data); 
         
      },
 
    methods:{
        ...mapActions({
              set_challenger:'AsyncSetChallenger',     
              SetStatus:'AsyncChallengeStatus',
              SetUserName:'AsyncSetUserName',
              StartChallenge:'AsyncStartChallenge'
        }),



        challenge_user(user){      
             this.set_challenger({
                 oponent:user,
                 challenger:this.username
             });
             
         this.$router.push('/h2h/mobile/mobilelegends/challenge');
        },
     
     challenge_accepted(){ 

         this.$socket.emit('challenge_accepted',{    
             
             challenger:this.challenge_notification.challenger,
             game:'Mobile Legends:Bang Bang',   
             bet:this.challenge_notification.bet_ammount,
             receiver:this.challenge_notification.challenger,
             room:'Mobile Legends:Bang Bang',  
              
            });    

            this.SetStatus('Started');  
            
         this.showChallengeNotification=false;

         this.set_challenger({
                 oponent:this.username,
                 challenger:this.challenge_notification.challenger,
                            });     
   
         this.$router.push('/h2h/mobile/mobilelegends/challenge');     

        },  
        challenge_rejected(){
          this.$socket.emit('challenge_rejected',{ 
           challenger:this.challenge_notification.challenger,
             game:"Mobile Legends:Bang Bang",   
             bet:this.challenge_notification.bet_ammount,
             room:'Mobile Legends:Bang Bang',    
            });    
         this.showChallengeNotification=false;
        },




        check_private_user(user){
            console.log(user);
          if(user==this.private_user){
              return true;
          }
          else{
              return false;
          }
        },
       switch_to_public_chat(){
            this.isPublic=true;
            this.messages_private=[];  
            this.private_user='';
             this.messages=[]; 

        this.chatRoom='Mobile Legends:Bang Bang';
        
        let data={     
            room:this.chatRoom,    
            token:localStorage.getItem('token')     
        };  
       this.$socket.emit('join_room',data); 
       }, 
      send_msg(e){       
          e.preventDefault();
        console.log(this.message)
        let data={  
            msg:this.message,    
            room:'Mobile Legends:Bang Bang',    
            token:localStorage.getItem('token')  
        }
        this.message='';
        this.$socket.emit('public_msg',data);   
    
        
      },
      send_private_msg(e){
            console.log(this.private_user)
            e.preventDefault();  
            let data={
            msg:this.message,  
            room:'Mobile Legends:Bang Bang',    
            token:localStorage.getItem('token'),
            receiver:this.private_user,
            }
             
            this.$socket.emit('private_msg',data);  
             this.message='';  
             console.log("155:"+this.message);  
      },   
      private_chat(name){
             console.log("name:"+name.name)
             this.private_user=name.name;
             this.isPublic=false;       
             
             let data={
                token:localStorage.getItem('token'),
                 username:name.name,
                 room:'Mobile Legends:Bang Bang'
             }
             this.$socket.emit('private_inbox',data);
      },       
        getClass(data){ 
            
             if(data.type=='notification'){
                 this.self=true;
               return 'notification'
           }       
          else if(data.name==this.username){
              this.self=true;
            return 'self'
            }
           else{
               this.self=false;
               return 'other'
           }    
         
        }
      
  
    }
}
</script>
<style scoped>

/* PROFILE MENU */


/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}

/****OTHER CSS****/
.headshot {
	flex-shrink: 0;
	margin: 20px;
	height: calc(150px + 6vw);
	width: calc(150px + 6vw);
	border: calc(8px + 0.2vw) solid transparent;
	background-origin: border-box;
	background-clip: content-box, border-box;
	background-size: cover;
	box-sizing: border-box;
	box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
}

.headshot-1 {
	border-radius: 30%;
	background-image: var(--img-url), linear-gradient(#f9f047, #0fd850);
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
#public-inbox{
     
}
.private-chat-box{
 background-color: white;
 border-color: black;
 border-style: solid;
 width: 100%;
 height: 300px; 
 color: black;    
 overflow-y: auto;
}
.chat-box{
 background-color: white;
 width: 100%;
 height: 300px; 
 color: black; 
 overflow-y: auto;
}
.form{
    display: flex;
    flex-direction: row;
    margin: 1%;
}
.write-msg-field{ 
    background-color: white;
    color: #0081FF;
    width: 100%;
}
.msg{
    color:black; 
}
.self{
    text-align: right;
    color: white;
    position: relative; 
	background: #4267B2;
    border-radius: .6em;
    margin: 1%;
    padding-right: 10px;
}


.other{
    text-align: left;
    	position: relative;
	background: #F5F6F7;
    border-radius: .4em;
    color: #4267B2;
    margin: 1%;
    
}

.notification{
    text-align: center;   
}
li{
list-style: none;
margin: 1%;
width: 153%;
padding-right: 130px;
position: relative;
right: 43px;

}
.online_users_list_item{
    float: left;
}
.chat_button_for_list_item{
    float: right;
}
.heading-800 {
    background-color: #222222;
    color: #fff;
    border-radius: 20px;
     padding: 10px 0 10px 0px;
}

</style>
