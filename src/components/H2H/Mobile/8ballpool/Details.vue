<template>
<div class="col-md-8 main-content">
  <b-card>
     <b-container class="bv-example-row">
  <b-row>
    <b-col><div style="text-align: left; color: black;">
<img style="display: block; margin-left: auto; margin-right: auto; width: 150px; height: 150px; border-radius: 150px" :src="fields.profilePic ? fields.profilePic : 'images/8ballpool.jpg'" alt="Hero">
 
 <h5 style="text-align: center; color: black; font-size: 18px;"><b>8 Ball Pool </b> </h5>
  <h5 style="text-align: center; color: grey; font-size: 16px;">Sports</h5>
  <h5 style="text-align: center; color: black; font-size: 16px;">Miniclip SA</h5>
     <p style="text-align: center; color: yellow; font-size: 18px;"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
<h6 style="text-align: center; font-size:16 px; color: black;">4.92 star average</h6>
     </div></b-col>
<b-col>
 <h5 class="heading-90">8 Ball Pool H2H Messenger</h5>
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
          #Pool
          </v-chip>
         <v-chip small>
           #Billiards
          </v-chip>
            <v-chip small>
           #Miniclip
          </v-chip>
            
         </p> </b-col>
         <b-col><div class="online2"/>&nbsp; 0 players online <v-chip color="red" small>
          18+
          </v-chip> </b-col> </b-row></h5>

<p class="detail" style="color: white; text-align: left; font-size: 16px;">Average Rating: <span class="detail" style="color: white; text-align: left; font-size: 20px;"> <b-badge pill variant="primary"> 4.5/5</b-badge></span>
</p> 

  <p style="color: white; text-align: left; font-size: 16px;">Price: 
 <span style="color: grey;" class="name">
 Free
 </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">App Store Link: 
 <span style="color: grey;" class="name">
https://itunes.apple.com/au/app/8-ball-pool/id543186831?mt=8
 </span></p>
   <p style="color: white; text-align: left; font-size: 16px;">Google Play Store Link: 
 <span style="color: grey;" class="name">
https://play.google.com/store/apps/details?id=com.miniclip.eightballpool&hl=en </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">Recommended Requirements: 
 <span style="color: grey;" class="name">
System on Chip - 1.6 GHz Dual Core /
Graphics Chip - PowerVR SGX 544MP2 /
RAM - 256 MB /
Storage - 50 MB /
OS - Android 4.2/iOS 8.0 or later. Compatible with iPhone, iPad and iPod touch.


 </span></p>
   <p style="color: white; text-align: left; font-size: 16px;">Description: 
 <span style="color: grey;" class="name">
8 Ball Pool is the biggest & best multiplayer Pool game online! Play billiards for FREE against other players & friends in 1-on-1 matches, enter tournaments to win big! Level up and earn Pool Coins for your wins. Customize with cues & cloths in the Pool Shop.  </span></p>


  <b-button block variant="success">View H2H Matches</b-button>

  



  

            </div>
          
  
     

        <!-- Modal Component -->
       
  
  
</template>

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