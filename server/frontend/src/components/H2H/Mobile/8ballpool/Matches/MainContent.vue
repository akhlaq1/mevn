<template>
    <div class="col-md-8 main-content">
         <div>
                  <h5 class="heading2">H2H mobile 8-ball Pool</h5>
                  <div v-if="counter ==1">
    <b-card-group columns>
        <b-card 
                title="$5 H2H">
                <h5>$10 Prize pool</h5>
                   <h5>1/2 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" href="#/h2h/mobile/8ballpool/1" block>More Details</b-button>
               
        </b-card>
        
            <b-card 
                title="$10 H2H">
                <h5>$20 Prize pool</h5>
                   <h5>1/2 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
      
                  <b-card 
                title="$20 H2H">
                <h5>$40 Prize pool</h5>
                   <h5>1/2 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
       
          <b-card 
                title="$100 h2h">
                <h5>$200 Prize pool</h5>
                   <h5>1/2 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
                 <b-card 
                title="$500 h2h">
                <h5>$1000 Prize pool</h5>
                   <h5>1/2 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
        
            <b-card 
                title="$1000 h2h">
                <h5>$2000 Prize pool</h5>
                   <h5>1/2 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
      
                  <b-card 
                title="$10000 h2h">
                <h5>$20000 Prize pool</h5>
                   <h5>1/2 Entries</h5>
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
       <b-button block href="#/tournaments/form" variant="primary">Submit a game</b-button>
    </div>

 <div v-if="counter == 2">
    <b-card-group  columns>
            
    </b-card-group>
      <b-button block variant="primary" v-on:click="counter += 1">Next page</b-button>
      <b-button block variant="primary" v-on:click="counter -= 1">Previous page</b-button>
       <b-button block href="#/tournaments/form" variant="primary">Submit a game</b-button>
    </div>
     <div v-if="counter == 3">
     <b-button block variant="primary" v-on:click="counter += 1">Next page</b-button>
      <b-button block variant="primary" v-on:click="counter -= 1">Previous page</b-button>
       <b-button block href="#/tournaments/form" variant="primary">Submit a game</b-button>
    </div>
    <div v-if="counter > 3">
   <b-alert show> No more games to show</b-alert>

      <b-button block variant="primary" v-on:click="counter -= 1">Previous page</b-button>
       <b-button block href="#/tournaments/form" variant="primary">Submit a game</b-button>
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



