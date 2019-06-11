<template>
    <div class="col-md-8 main-content">
         <div>
                  <h5 class="heading2">H2H Fortnite iOS</h5>
                  <div v-if="counter ==1">
    <b-card-group columns>
        <b-card 
                title="$5 h2h">
                <h5>$1000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" href="#/tournaments/ios/fortnite/1" block>More Details</b-button>
               
        </b-card>
        
            <b-card 
                title="$10 h2h">
                <h5>$2000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
      
                  <b-card 
                title="$20 h2h">
                <h5>$4000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
       
          <b-card 
                title="$100 h2h">
                <h5>$20000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
                 <b-card 
                title="$5 h2h">
                <h5>$1000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
        
            <b-card 
                title="$10 h2h">
                <h5>$2000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
      
                  <b-card 
                title="$20 h2h">
                <h5>$4000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
       
          <b-card 
                title="$100 h2h">
                <h5>$20000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>    <b-card 
                title="$5 h2h">
                <h5>$1000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
        
            <b-card 
                title="$10 h2h">
                <h5>$2000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
      
                  <b-card 
                title="$20 h2h">
                <h5>$4000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
       
          <b-card 
                title="$100 h2h">
                <h5>$20000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>

    </b-card-group>
      <b-button block variant="primary" v-on:click="counter += 1">Next page</b-button>
       <b-button block href="#/h2h/mobile/matches/form" variant="primary">Host a H2H match</b-button>
    </div>

 <div v-if="counter == 2">
   
      <b-button block variant="primary" v-on:click="counter += 1">Next page</b-button>
      <b-button block variant="primary" v-on:click="counter -= 1">Previous page</b-button>
       <b-button block href="#/h2h/matchform" variant="primary">Host a H2H match</b-button>
    </div>
     <div v-if="counter == 3">
    
     <b-button block variant="primary" v-on:click="counter += 1">Next page</b-button>
      <b-button block variant="primary" v-on:click="counter -= 1">Previous page</b-button>
       <b-button block href="#/h2h/matchform" variant="primary">Host a H2H match</b-button>
    </div>
    <div v-if="counter > 3">
   <b-alert show> No more games to show</b-alert>

      <b-button block variant="primary" v-on:click="counter -= 1">Previous page</b-button>
       <b-button block href="#/h2h/matchform" variant="primary">Host a H2H match</b-button>
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
      counter: 1,

    }
    }
}


</script>



