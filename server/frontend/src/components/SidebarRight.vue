<template>
  <div class="col-md-2 p-0">
    <div class="sidebar-right">
      <div class="card mb-4">
        <div class="card-header">Afilliates</div>
        <div class="card-body">
          <div class="teams" v-if="random < 6">
            <b-img class="gameimg" src="img/plaak.png" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">PLAAK</strong>
            <div style="position: relative; top: 10px;">
              Be your own bank. This high tech cold storage device controls and manages your digital funds with 0% fees.
              <br>

              <b-button style="position: relative; top:5px;">View offer</b-button>
            </div>
          </div>
           <div class="teams" v-if="random < 7 && random > 5">
        <b-img class="gameimg" src="img/promo4.jpg" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">Gaming Godfather</strong>
            <div style="position: relative; top: 10px;">
              How wholesale video games allowed me to turn $200 into a full time business with the help of reliable dropshippers!
              <br>
              <b-button style="position: relative; top:5px;">Read more</b-button>
            </div>
          </div>
           <div class="teams" v-if="random < 8 && random > 6">
            <b-img class="gameimg" src="img/promo3.png" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">WoW Guides</strong>
            <div style="position: relative; top: 10px;">
              Learn how to level World of Warcraft characters solo from level 1 to 120 the FASTEST way possible.
              <br>
              <b-button style="position: relative; top:5px;" href="https://fca06bm9tly0ht42kw425z1o80.hop.clickbank.net/?tid=WAGERGAMES">View offer</b-button>
            </div>
          </div>
           <div class="teams" v-if="random < 9 && random > 7">
             <b-img class="gameimg" src="img/promo2.png" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">Video Game Tester</strong>
            <div style="position: relative; top: 10px;">
              Jobs available for video game testers with a variety of payout options, including cash, gaming products and gift cards.
              <br>
              <b-button style="position: relative; top:5px;" href="https://347ae4eardn-6kfbe8rdhz953p.hop.clickbank.net/?tid=WAGERGAMES">Apply for job</b-button>
            </div>
          </div>
           <div class="teams" v-if="random < 10 && random > 8">
            <b-img class="gameimg" src="img/plaak.png" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">PLAAK</strong>
            <div style="position: relative; top: 10px;">
              Be your own bank. This high tech cold storage device controls and manages your digital funds with 0% fees.
              <br>

              <b-button style="position: relative; top:5px;">View offer</b-button>
            </div>
          </div>
    </div>


  </div> 
  
  
  <div class="card mb-4">
        <div class="card-header">Sponsors</div>
        <div class="card-body">
          <div class="teams" v-if="random2 < 6">
            <b-img class="gameimg" src="img/a1.png" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">Gamers Assembly</strong>
            <div style="position: relative; top: 10px;">
              Be your own bank. This high tech cold storage device controls and manages your digital funds with 0% fees.
              <br>

              <b-button style="position: relative; top:5px;">View offer</b-button>
            </div>
          </div>
           <div class="teams" v-if="random2 < 7 && random2 > 5">
        <b-img class="gameimg" src="img/promo4.jpg" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">Gaming Godfather</strong>
            <div style="position: relative; top: 10px;">
              How wholesale video games allowed me to turn $200 into a full time business with the help of reliable dropshippers!
              <br>
              <b-button style="position: relative; top:5px;">Read more</b-button>
            </div>
          </div>
           <div class="teams" v-if="random2 < 8 && random2 > 6">
            <b-img class="gameimg" src="img/promo3.png" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">WoW Guides</strong>
            <div style="position: relative; top: 10px;">
              Learn how to level World of Warcraft characters solo from level 1 to 120 the FASTEST way possible.
              <br>
              <b-button style="position: relative; top:5px;" href="https://fca06bm9tly0ht42kw425z1o80.hop.clickbank.net/?tid=WAGERGAMES">View offer</b-button>
            </div>
          </div>
           <div class="teams" v-if="random2 < 9 && random2 > 7">
             <b-img class="gameimg" src="img/promo2.png" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">Video Game Tester</strong>
            <div style="position: relative; top: 10px;">
              Jobs available for video game testers with a variety of payout options, including cash, gaming products and gift cards.
              <br>
              <b-button style="position: relative; top:5px;" href="https://347ae4eardn-6kfbe8rdhz953p.hop.clickbank.net/?tid=WAGERGAMES">Apply for job</b-button>
            </div>
          </div>
           <div class="teams" v-if="random2 < 10 && random2 > 8">
            <b-img class="gameimg" src="img/plaak.png" alt="Fluid image"></b-img>
            <strong style="position: relative; top: 10px; font-size: 13pt;">PLAAK</strong>
            <div style="position: relative; top: 10px;">
              Be your own bank. This high tech cold storage device controls and manages your digital funds with 0% fees.
              <br>

              <b-button style="position: relative; top:5px;">View offer</b-button>
            </div>
          </div>
    </div>
  </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "SidebarRight",
  data() {
    return {
      random: Math.floor(Math.random()*(10-5)+5),
      random2: Math.floor(Math.random()*(10-5)+5),
    };
  },
  methods: {
    randomnumber() {
    }
}
}

</script>

<style>
.gameimg {
  position: relative;
  bottom: -5px;
  height: 150px;
  width: 100%;
}
.explore {
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 16px;
  letter-spacing: 3.4px;
  word-spacing: -0.6px;
  color: #ffffff;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: none;
  top: 2.5px;
  position: relative;
}
</style>
