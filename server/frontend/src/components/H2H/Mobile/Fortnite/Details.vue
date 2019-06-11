<template>
 <div class="col-md-8 main-content">
  <b-card>
     <b-container class="bv-example-row">
  <b-row>
    <b-col><div style="text-align: left; color: black;">
<img style="display: block; margin-left: auto; margin-right: auto; width: 150px; height: 150px; border-radius: 150px" :src="fields.profilePic ? fields.profilePic : 'images/fortnite.jpg'" alt="Hero">
 
 <h5 style="text-align: center; color: black; font-size: 18px;"><b>Fortnite </b> </h5>
  <h5 style="text-align: center; color: grey; font-size: 16px;">Battle Royale</h5>
  <h5 style="text-align: center; color: black; font-size: 16px;">Epic Games</h5>
     <p style="text-align: center; color: yellow; font-size: 18px;"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
<h6 style="text-align: center; font-size:16 px; color: black;">4.92 star average</h6>
     </div></b-col>
<b-col>
 <h5 class="heading-90">Fornite H2H Messenger</h5>
<v-container
      id="scroll-target"
      style="max-height: 400px"
      class="scroll-y"
    >
           <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar2
          >
        

            


          
     

             <v-avatar> <img :src="item.avatar"> </v-avatar>
           
                       <span style="font-size: 2em; color: Dodgerblue;">
            <i class="fas fa-comment"/>
              </span>
          </v-list-tile>
        </v-list>
          
         
      <v-layout
        v-scroll:#scroll-target="onScroll"
        column
        align-center
        justify-center
        style="height: 1000px"
      >
      </v-layout>
      
    </v-container>
    
          
     
    
      
  
</b-col>

  </b-row>

</b-container>
</b-card>
<h5 class="heading-90">
  <b-row>
    <b-col>
  <p style="text-align: left">
       <v-chip small>
          #BattleRoyale
          </v-chip>
         <v-chip small>
           #FPS
          </v-chip>
            <v-chip small>
           #Survival
          </v-chip>
            
         </p> </b-col>
         <b-col><div class="online2"/>&nbsp; 0 players online <v-chip color="red" small>
          18+
          </v-chip> </b-col> </b-row></h5>

  <p style="color: white; text-align: left; font-size: 16px;">Price: 
 <span style="color: grey;" class="name">
 Free
 </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">App Store Link: 
 <span style="color: grey;" class="name">
https://itunes.apple.com/au/app/fortnite/id1261357853?mt=8
 </span></p>
     <p style="color: white; text-align: left; font-size: 16px;">Compatibility: 
 <span style="color: grey;" class="name">
iOS only </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">Languages: 
 <span style="color: grey;" class="name">English, Spanish

 </span></p>
   <p style="color: white; text-align: left; font-size: 16px;">Description: 
 <span style="color: grey;" class="name">
Fortnite has come to mobile! Squad up and compete to be the last one standing in Battle Royale, or use your imagination to build your dream Fortnite in Creative.


Requires an internet connection and iOS 11.


On mobile, Fortnite is the same game you know from PlayStation 4, Xbox One, PC, and Mac. Same map, same gameplay, same weekly updates. Build your fort as you battle to be the last one standing. Jump in and squad up with friends around the world or in the same room!


Powered by Unreal Engine 4.


CREATIVE - Design games with friends and build your dream Fortnite experience. Your island, your friends, your rules. The most exciting and imaginative islands will be featured on the “The Block” in the Battle Royale map.


BUILD & DESTROY - Shape the battlefield by building your own cover. Opponent hiding behind a wall? Take out their cover to get the edge.


GEAR UP - Board the battle bus and drop in on your favorite zone. Gather resources, collect gear, and battle your opponents! Last one standing wins.


SQUAD UP WITH FRIENDS - Team up with your friends around the world or in the same room!


EPIC UPDATES & EVENTS - Weekly updates constantly fuel the fun. New gameplay modes, serious and insane new looks for your avatar, new weapons and items….Fortnite is always expanding.


CONSOLE GAMING ON THE GO - Play the full game anytime, anywhere. Complete quests on the go, progress your Battle Pass, and more. </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">Recommended Requirements: 
 <span style="color: grey;" class="name">
Works with: iPhone SE, 6S, 7, 8, X, XS, XR; iPad Mini 4, Air 2, 2017, 2018, Pro

Fortnite DOES NOT support: iPhone 5S, 6, 6 Plus; iPad Air, Mini 2, Mini 3, iPod Touch
 </span></p>



  <b-button block variant="success" href="#/h2h/mobile/fortnite/matches">View Tournaments</b-button>

  



  

            </div>
          
  
     

        <!-- Modal Component -->
       
  
  
</template>


<style>

  .heading-90 {
    background-color: #222222;
    color: #fff;
    padding: 10px 0 10px 0px;
    width: 100%;
    text-align: center; }

    .online2 {
    height: 15px;
    width: 15px;
    background-color: #23dd2c;
    border-radius: 50%;
    display: inline-block;
    
}

    .offline2 {
    height: 15px;
    width: 15px;
    background-color: #ff0000;
    border-radius: 50%;
    display: inline-block;
    
}
</style>
<script>

export default {
  props: {
    
  },
  name: 'Sponsors',
    data () {
    return {
      items: [
          { online: '1', icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { online: '1', title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { online: '1', title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
           { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
           { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
           { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
           { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
           { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
           { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' }
        ]
    }
    }
}
</script>