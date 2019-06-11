<template>
    <div class="col-md-8 main-content">
         <div>
                  <h5 class="heading2">Tournaments mobile</h5>
                  <div v-if="tournaments_mobile_counter ==1">
    <b-card-group columns>
                    
           <b-card 
        title="8-ball Pool">
        <b-card-img 
                src="/images/8ballpool.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" href="#/tournaments/mobile/8ballpool" block>More Details</b-button>
        </b-card>

        <b-card 
                title="Fortnite">
               <b-card-img 
                src="/images/fortnite.jpg"
                alt="Img"
                top
                width="80%"/>
         <b-button href="#/tournaments/mobile/fortnite" variant="success" block>More Details</b-button>
               
        </b-card>

                <b-card 
                title="Soccer Stars">
               <b-card-img 
                src="/images/soccerstars.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
       
           <b-card 
        title="Golf Battle">
        <b-card-img 
                src="/images/golfbattle.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
                <b-card 
                title="Basketball Stars">
               <b-card-img 
                src="/images/basketballstars.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
       
           <b-card 
        title="Archery">
        <b-card-img 
                src="/images/archery.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
       
                <b-card 
                title="Mobile Legends">
               <b-card-img 
                src="/images/mobilelegends.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
       
           <b-card 
        title="PUBG">
        <b-card-img 
                src="/images/pubg.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
                <b-card 
                title="Bowling King">
               <b-card-img 
                src="/images/bowlingking.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
           <b-card 
        title="Football Strike">
        <b-card-img 
                src="/images/icon_football.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
               <b-card 
        title="Hockey Stars">
        <b-card-img 
                src="/images/hockeystars.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
          <b-card 
        title="WCC2">
        <b-card-img 
                src="/images/wc2.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>

    </b-card-group>
      <b-button block variant="primary" v-on:click="tournaments_mobile_counter += 1">Next page</b-button>
       <b-button block href="#/tournaments/mobile/form" variant="success">Submit a game</b-button>
    </div>

    <div v-if="tournaments_mobile_counter ==2">
    <b-card-group columns>
        <b-card 
                title="Fortnite">
               <b-card-img 
                src="/images/fortnite.jpg"
                alt="Img"
                top
                width="80%"/>
         <b-button href="#/tournaments/ios/fortnite" variant="success" block>More Details</b-button>
               
        </b-card>
        
           <b-card 
        title="8-ball Pool">
        <b-card-img 
                src="/images/8ballpool.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
      
                <b-card 
                title="Soccer Stars">
               <b-card-img 
                src="/images/soccerstars.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
       
           <b-card 
        title="Golf Battle">
        <b-card-img 
                src="/images/golfbattle.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
                <b-card 
                title="Basketball Stars">
               <b-card-img 
                src="/images/basketballstars.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
       
           <b-card 
        title="Archery">
        <b-card-img 
                src="/images/archery.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
       
                <b-card 
                title="Mobile Legends">
               <b-card-img 
                src="/images/mobilelegends.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
       
           <b-card 
        title="PUBG">
        <b-card-img 
                src="/images/pubg.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
                <b-card 
                title="Bowling King">
               <b-card-img 
                src="/images/bowlingking.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
           <b-card 
        title="Football Strike">
        <b-card-img 
                src="/images/icon_football.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
               <b-card 
        title="Hockey Stars">
        <b-card-img 
                src="/images/hockeystars.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>
          <b-card 
        title="WCC2">
        <b-card-img 
                src="/images/wc2.jpg"
                alt="Img"
                top
                width="80%"/>
                <b-button variant="success" block>More Details</b-button>
        </b-card>

    </b-card-group>
      <b-button block variant="primary" v-on:click="tournaments_mobile_counter += 1">Next page</b-button>
            <b-button block variant="primary" v-on:click="tournaments_mobile_counter -= 1">Previous page</b-button>

       <b-button block href="#/tournaments/mobile/form" variant="success">Submit a game</b-button>
    </div>
     <div v-if="tournaments_mobile_counter > 2">

   <b-alert show> No more games to show</b-alert>

      <b-button block variant="primary" v-on:click="tournaments_mobile_counter -= 1">Previous page</b-button>
       <b-button block href="#/tournaments/mobile/form" variant="success">Submit a game</b-button>
    </div>

</div>

<div>

    <br> 
  </div>                              
  </div>
                            
                           
</template>

<script>
export default {
  name: 'Sponsors',
    data () {
    return {
      tournaments_mobile_counter: 1,

    }
    }
}


</script>



