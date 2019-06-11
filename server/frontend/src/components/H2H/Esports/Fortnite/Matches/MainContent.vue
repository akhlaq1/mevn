<template>
    <div class="col-md-8 main-content">
         <div>
                  <h5 class="heading2">Esports H2H</h5>
                  <div v-if="h2h_esports_counter == 1">
    <b-card-group columns>
        <b-card 
                title="Fortnite">
               <b-card-img 
                src="/images/fortnite.jpg"
                alt="Img"
                top
                width="80%"/>
         <b-button href="#/h2h/esports/fortnite" variant="success" block>More Details</b-button>
               
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
      <b-button block variant="primary" v-on:click="h2h_esports_counter += 1">Next page</b-button>
       <b-button block href="#/h2h/esports/form" variant="success">Submit a game</b-button>
    </div>

     <div v-if="h2h_esports_counter == 2">
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
      <b-button block variant="primary" v-on:click="h2h_esports_counter += 1">Next page</b-button>
            <b-button block variant="primary" v-on:click="h2h_esports_counter -= 1">Previous page</b-button>

       <b-button block href="#/h2h/esports/form" variant="success">Submit a game</b-button>
    </div>
     
    <div v-if="h2h_esports_counter == 3">
   <b-alert show> No more games to show</b-alert>

      <b-button block variant="primary" v-on:click="h2h_esports_counter -= 1">Previous page</b-button>
       <b-button block href="#/h2h/esports/form" variant="success">Submit a game</b-button>
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
    h2h_esports_counter: 1,
    }
 }
    

}



</script>




