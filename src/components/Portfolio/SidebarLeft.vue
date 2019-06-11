<template>
  <div class="col-md-2 p-0" id="sidebar" style="top: -50px;">
    <div class="sidebar-left pl-0 d-flex">
      <ul class="nav flex-column flex-nowrap">
     
        <li class="nav-item hvr-fade"> 
            
          <a
            class="nav-link collapsed"
            href="/"
          >Home </a>
     
   
        </li>


        <li v-if="loggedIn" class="nav-item hvr-fade">
          <a
            class="nav-link collapsed "
            href="#"
          >Team History</a>
           

                 <!-- <v-divider/> -->
        </li>

        <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/screenshots"
          >Screenshots</a>

          <!-- <v-divider/> -->
        </li>
        <li class="nav-item  hvr-fade" v-if="team">
          <a
            class="nav-link collapsed"
            href="/streams"
          >Streams</a>

   
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Stats</a>

           <!-- <v-divider/> -->
           </li>
        <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Schedule</a>

           <!-- <v-divider/> -->
                </li>
                   <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Managers</a>

           <!-- <v-divider/> -->
                </li>
                   <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Inteviews</a>

           <!-- <v-divider/> -->
                </li>
                   <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Streams</a>

           <!-- <v-divider/> -->
                </li>
                   <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Online/LAN</a>

           <!-- <v-divider/> -->
                </li>
                                 <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Matches</a>

           <!-- <v-divider/> -->
                </li>
                                 <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Tournament</a>

           <!-- <v-divider/> -->
                </li>
                                 <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Head to Head</a>

           <!-- <v-divider/> -->
                </li>
                                 <li class="nav-item  hvr-fade">
          <a
            class="nav-link collapsed"
            href="/schedule"
          >Connect</a>

           <!-- <v-divider/> -->
                </li>
      </ul>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SidebarLeft",
  computed: {
    ...mapGetters({
      team: "team/activeTeam"
    }),
    loggedIn() {
      if (this.$store.getters.loggedIn) {
        this.$store.dispatch("getProfile");
        return true;
      }

      return false;
    }
  }
};
</script>

<style>

.hvr-fade {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  overflow: hidden;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.hvr-fade:hover, .hvr-fade:focus, .hvr-fade:active {
  background-color: #2098D1;
  color: white;
}
</style>

