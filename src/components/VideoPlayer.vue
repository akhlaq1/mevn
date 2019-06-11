<template>
  <div class="video-player">
      <div class="video-container">
      <iframe width="640" height="360" :src="this.activeVideo.youtubeURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
   <h3>{{this.activeVideo.title}}</h3>
<div class="row">
 <b-container class="bv-example-row">
    <b-row>
   
 <b-col style="color: white">{{this.activeVideo.views}} views</b-col>
   
<b-col style="color: white">{{this.activeVideo.likes}} likes </b-col>

      
        <b-col><b-button-group>
    <b-button variant="danger">Report</b-button>
      </b-button-group> </b-col>
       <b-col><b-button-group>
    <b-button variant="primary">Like</b-button>
  </b-button-group> </b-col>
    </b-row>
 </b-container>
    <p></p> 
    <p> </p>
</div>   
</div>
<b-container class="bv-example-row">
    <b-row>
        <b-col>


        <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class=" w-100 p-2">
    <div :key="video.id" v-for="video in videos" class="thumbnail"></div>
   
        <div class="thumbnail-img">
            <b-card
             :header="video.title"
             :img-src="video.thumbnail "
                img-alt="Card image"
                img-top
                center
                bg-variant="dark"
                class="w-75 p-3"
                style="color: white;">
                <h3></h3>
          <p>{{video.creator}}</p>
          <p class="thumbnail-views">{{video.views}} Views</p>
        </b-card>
        </div>
        </div>
             </b-col>
                     <b-col>


        <div @click="chooseVideo(video)" :key="video.id" v-for="video in videos" class=" w-100 p-2">
    <div :key="video.id" v-for="video in videos" class="thumbnail"></div>
   
        <div class="thumbnail-img">
            <b-card
             :header="video.title"
             :img-src="video.thumbnail "
                img-alt="Card image"
                img-top
                center
                bg-variant="dark"
                class="w-75 p-3"
                style="color: white;">
                <h3></h3>
          <p>{{video.creator}}</p>
          <p class="thumbnail-views">{{video.views}} Views</p>
        </b-card>
        </div>
        </div>
             </b-col>
             
             </b-row>
  
        </b-container>
    </div>
     

  <!-- </div> -->

  
</template>

<script>
let videos = [
  {
    id: 1,
    title: "Dota 2 - iceiceice Stream | Winning is living!",
    thumbnail:  "https://i.ytimg.com/vi/O6vT_ipqEOk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA",
    youtubeURL: "https://www.youtube.com/embed/O6vT_ipqEOk",
    creator: "DOTA 2 STREAM",
    likes: 0,
    views: 0
  },
  {
    id: 2,
    title: "Eclipse vs iG Vitality | ANGGAME China vs SEA #3 - China Qualifier",
    thumbnail:
      "https://i.ytimg.com/vi/-JmBKwZaamg/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDhlan32jHSvicGZezDFPjAOdXGUA",
    youtubeURL: "https://www.youtube.com/embed/-JmBKwZaamg",
    creator: "NyundaTV",
    likes: 0,
    views: 0
  },
  {
    id: 3,
    title: "Eclipse vs iG Vitality (Bo2) ANGGAME China vs SEA #3 - China Qualifier",
    thumbnail:
      "https://i.ytimg.com/vi/0tDMg29XCOA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBDnlrC2rVwXamNkicEEbc3Mf4T0w",
    youtubeURL: "https://www.youtube.com/embed/0tDMg29XCOA",
    creator: "Moodpecker TV",
    likes: 0,
    views: 0
  },
  {
    id: 4,
    title: "Talking Tech with Neil deGrasse Tyson!",
    thumbnail:
      "https://i.ytimg.com/vi/ZGevVq8Jat8/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA5hTiwkz4Tr1w1hSMhPlwtmQeyYw",
    youtubeURL: "https://www.youtube.com/embed/ZGevVq8Jat8",
    creator: "I xvrlee I",
    likes: 0,
    views: 0
  },
  {
    id: 5,
    title: "The Apple Ecosystem: Explained!",
    thumbnail:
      "https://i.ytimg.com/vi/KB4_WIPE7vo/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCxXm7aoPShOwON74nhMlGYMUkHw",
    youtubeURL: "https://www.youtube.com/embed/KB4_WIPE7vo",
    creator: "Marques Brownlee",
    likes: 0,
    views: 0
  }
];
export default {
  name: 'VideoPlayer', 
  data () {
    return {
        videos,
         activeVideo: videos[0]
    }
  },
methods:{
  chooseVideo(video){
      //SET VIDEO AS ACTIVE VIDEO
      this.activeVideo = video;
      //INCREASE THE VIDEOS VIEWS BY 1
      video.views += 1;
  }
}

}


</script>

<style scoped>

  .thumbnail{
    display:flex;
  }
  .thumbnail img{
    width:100%;
}

.thumbnail-info{
    margin-left:20px;
    width:100%;
}

.thumbnail h3{
    font-size:16px;
}

h3,
p{
    color: white;
    margin:0;
    padding:0;
}

.thumbnail-views{
    color: white;
    font-size:14px;
}

</style>