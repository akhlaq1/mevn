<template>
    <div class="col-md-8 main-content">
         <div>
                  <h5 class="heading2">Fortnite iOS Tournaments</h5>
                  <div v-if="counter ==1">
    <b-card-group columns>
      <b-card>

                 
               <h5 class="heading-90">Come get wrecked!</h5>
               <b-card-img 
                src="/images/fortnite.jpg"
                alt="Img"
                top
                width="80%"/>      <h5 class="heading-90"> <v-avatar class="blue">$5</v-avatar>    Entry
      
              <v-chip small>
            <v-avatar class="yellow">$10</v-avatar>    Prize
          </v-chip>&nbsp; 
             <v-list dense dark >
               <span>
                 
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            avatar
            @click=""
          >
 
      
            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-avatar>
              <img :src="item.avatar">
            </v-list-tile-avatar>
          </v-list-tile>
   </span>
        </v-list>
        {{ H2HCount1 }}/{{ H2HCount2 }} players registered         <div class="online2"/>
              </h5> 
         <b-button variant="success" href="#/h2h/mobile/fortnite/details" block>Join Match</b-button>
        
        </b-card>
            <b-card 
                title="$10 Tournament">
                <h5>$2000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
      
                  <b-card 
                title="$20 Tournament">
                <h5>$4000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
       
          <b-card 
                title="$100 Tournament">
                <h5>$20000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
                 <b-card 
                title="$5 Tournament">
                <h5>$1000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
        
            <b-card 
                title="$10 Tournament">
                <h5>$2000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
      
                  <b-card 
                title="$20 Tournament">
                <h5>$4000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
       
          <b-card 
                title="$100 Tournament">
                <h5>$20000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>    <b-card 
                title="$5 Tournament">
                <h5>$1000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
        
            <b-card 
                title="$10 Tournament">
                <h5>$2000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
      
                  <b-card 
                title="$20 Tournament">
                <h5>$4000 Prize pool</h5>
                   <h5>120/200 Entries</h5>
                 <h5>Organizer: WagerGames</h5>
         <b-button variant="success" block>More Details</b-button>
               
        </b-card>
       
          <b-card 
                title="$100 Tournament">
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
               <b-card 
                img-src="/images/visa.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/redbull.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/amex.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/suncorp.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/ubuntu.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
          <b-card 
       
                img-src="/images/steam.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/woolworths.jpg"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/coles.jpg"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/bigw.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
    </b-card-group>
      <b-button block variant="primary" v-on:click="counter += 1">Next page</b-button>
      <b-button block variant="primary" v-on:click="counter -= 1">Previous page</b-button>
       <b-button block href="#/tournaments/form" variant="primary">Submit a game</b-button>
    </div>
     <div v-if="counter == 3">
    <b-card-group columns>
               <b-card 
                img-src="/images/visa.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/redbull.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/amex.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/suncorp.png"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/ubuntu.png"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
         <b-card 
       
                img-src="/images/steam.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
               <b-card 
                img-src="/images/woolworths.jpg"
                img-alt="Img"
                img-top
                footer="Razer is the world leader in high-performance gaming hardware, software and systems. We live by our motto: For Gamers. By Gamers.">
        </b-card>
              <b-card 
                img-src="/images/coles.jpg"
                img-alt="Img"
                img-top
                footer="Red Bull is well-known for its Red Bull energy drink. The company is also known for its sponsorship of a range of sporting events and teams.">
        </b-card>
           <b-card 
                img-src="/images/bigw.png"
                img-alt="Img"
                img-top
                footer="Steam is a digital distribution platform developed by Valve Corporation for purchasing and playing video games. ">
        </b-card>
    </b-card-group>
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



