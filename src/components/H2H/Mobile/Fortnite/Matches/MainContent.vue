<template>
    <div class="col-md-8 main-content">
         <div>
                  <h5 class="heading2">Mobile H2H Fortnite</h5>
                  <div v-if="counter ==1">
    <b-card-group columns>
           
        
           <b-card 
        title="8-ball Pool">
        <b-card-img 
                src="/images/fortnite2.jpg"
                alt="Img"
                top
                width="80%"/> <h5 class="heading-90"><div class="online2"/>&nbsp; {{ H2HMobile8ballpoolPlayers }} players online</h5>
                <b-button variant="success" href="#/h2h/mobile/8ballpool/details" block>Join Room</b-button>
        </b-card>
      
                <b-card 
                title="Soccer Stars">
               <b-card-img 
                src="/images/fortnite3.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
       
           <b-card 
        title="Golf Battle">
        <b-card-img 
                src="/images/fortnite4.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
                <b-card 
                title="Basketball Stars">
               <b-card-img 
                src="images/basketballstars.jpg/"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
       
           <b-card 
        title="Archery">
        <b-card-img 
                src="/images/archery.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
       
                <b-card 
                title="Mobile Legends">
               <b-card-img 
                src="/images/mobilelegends.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
       
           <b-card 
        title="PUBG">
        <b-card-img 
                src="/images/pubg.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
                <b-card 
                title="Bowling King">
               <b-card-img 
                src="/images/bowlingking.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
           <b-card 
        title="Football Strike">
        <b-card-img 
                src="/images/icon_football.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
               <b-card 
        title="Hockey Stars">
        <b-card-img 
                src="/images/hockeystars.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
        </b-card>
          <b-card 
        title="WCC2">
        <b-card-img 
                src="/images/wc2.jpg"
                alt="Img"
                top
                width="80%"/><h5 class="heading-90"><div class="offline2"/>&nbsp; 0 players online</h5>
                <b-button variant="success" block>Join Room</b-button>
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
      H2HMobileFortnitePlayers: 22,     
      H2HMobile8ballpoolPlayers: 100,   
      counter: 1,  
      H2HCount1: 1,
      H2HCount2: 2,
       items: [
          { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
        ]
    }
    }
}


</script>
<style>

  .heading-90 {
    background-color: #222222;
    color: #fff;
    padding: 10px 0 10px 0px;
    width: 100%;
    text-align: center; 
    font-size: 14px;}

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

