<template>
  <div class="col-md-2 p-0" id="sidebar">
    <div class="sidebar-left pl-0 collapse d-flex">
      <ul class="nav flex-column flex-nowrap">
     
        <li v-if="!loggedIn" class="nav-item"> 
            
          <router-link
            class="nav-link collapsed"
            to="#submenu1"
            data-toggle="collapse"
            data-target="#submenu1"
          >Join/login </router-link>
          <div class="collapse" id="submenu1" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link to="/login" class="nav-link collapsed py-1">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/register" class="nav-link collapsed py-1">Register</router-link>
              </li>
            </ul>
          </div>
   
        </li>


        <li v-if="loggedIn" class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu1"
            data-toggle="collapse"
            data-target="#submenu1"
          >Logout</router-link>
           
          <div class="collapse" id="submenu1" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link to="/logout" class="nav-link collapsed py-1">Logout</router-link>
              </li>
            </ul>
          </div>
                 <!-- <v-divider/> -->
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu2"
            data-toggle="collapse"
            data-target="#submenu2"
          >Play Games</router-link>
          <div class="collapse" id="submenu2" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link to="steam://run/730" class="nav-link collapsed py-1">CS:GO</router-link>
              </li>
              <li class="nav-item">
                <router-link to="steam://run/570" class="nav-link collapsed py-1">DotA 2</router-link>
              </li>
              <li class="nav-item">
                <router-link to="steam://run/578080" class="nav-link collapsed py-1">PUBG</router-link>
              </li>
              <li class="nav-item">
                <router-link to="steam://run/252950" class="nav-link collapsed py-1">Rocket League</router-link>
              </li>
            </ul>
          </div>
          <!-- <v-divider/> -->
        </li>
        <li class="nav-item" v-if="team">
          <router-link
            class="nav-link collapsed"
            to="#teams"
            data-toggle="collapse"
            data-target="#teams"
          >My Teams</router-link>

          <div class="collapse" id="teams" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link
                  :to="`/team/${team._id}`"
                  class="nav-link collapsed py-1"
                >{{team.teamName}}</router-link>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu3"
            data-toggle="collapse"
            data-target="#submenu3"
          >Create</router-link>

          <div class="collapse" id="submenu3" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <router-link :to="`/u/${user.portfolioUrl}`" class="nav-link collapsed py-1">Portfolio</router-link>
              </li>
              <li class="nav-item">
                <router-link @click="$emit('createTeam')" class="nav-link collapsed py-1">Team</router-link>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu10"
            data-toggle="collapse"
            data-target="#submenu10"
          >Streaming</router-link>

          <div class="collapse" id="submenu10" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <router-link to="#/streams" style="text-decoration: none;">Watch streams</router-link>
                  </li>
                </div>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu4"
            data-toggle="collapse"
            data-target="#submenu4"
          >Sponsor</router-link>
          <div class="collapse" id="submenu4" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item"></li>
              <li>
                <router-link to="#/sponsors" style="text-decoration: none;">Sponsors Page</router-link>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu5"
            data-toggle="collapse"
            data-target="#submenu5"
          >Hire</router-link>
          <div class="collapse" id="submenu5" aria-expanded="false"></div>
          <div class="collapse" id="submenu5" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Teams</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Players</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>

        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu6"
            data-toggle="collapse"
            data-target="#submenu6"
          >Advertise</router-link>
          <div class="collapse" id="submenu6" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Teams</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Players</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu7"
            data-toggle="collapse"
            data-target="#submenu7"
          >Fundraise</router-link>

          <div class="collapse" id="submenu7" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Teams</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Players</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu8"
            data-toggle="collapse"
            data-target="#submenu8"
          >Leaderboard</router-link>

          <div class="collapse" id="submenu8" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Teams</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Players</router-link>
                    <router-link to="#" id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu9"
            data-toggle="collapse"
            data-target="#submenu9"
          >Events</router-link>

          <div class="collapse" id="submenu9" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Create an event</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Buy tickets</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu11"
            data-toggle="collapse"
            data-target="#submenu11"
          >Results</router-link>

          <div class="collapse" id="submenu11" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item">
                <div class="active" id="line1">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Teams</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
                <div class="active" id="line2">
                  <li>
                    <router-link id="a" style="text-decoration: none;">Players</router-link>
                    <router-link id="b" style="text-decoration: none;">Coming Soon</router-link>
                  </li>
                </div>
              </li>
            </ul>
          </div>
           <!-- <v-divider/> -->
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link collapsed"
            to="#submenu12"
            data-toggle="collapse"
            data-target="#submenu12"
          >Forum</router-link>
          <div class="collapse" id="submenu12" aria-expanded="false">
            <ul class="flex-column pl-4 nav">
              <li class="nav-item"> 
                <router-link
                  to="http://wagergames.freeforums.net/"
                  class="nav-link collapsed py-1"
                >Enter forum</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UserService from "@/services/UserService";

export default {
  name: "SidebarLeft",
  data(){
    return{
      user:{}
    }
  },
  computed: {
    ...mapGetters({
      team: "team/activeTeam",

    }),
    loggedIn() {
      if (this.$store.getters.loggedIn) {
        this.$store.dispatch("getProfile");
        return true;
      }
      return false;
    }
  },
  created(){
    this.getUserData()
  },
  methods:{
    ...mapActions(["getProfile"]),
    async getUserData() {
            let res = await UserService.getProfile(localStorage.getItem('token'));
            console.log(res)
            this.user = res.data;
            this.showLoading = false;
    },
  },
};
</script>

<style>
.a {
  display: inline;
}
ul#line1:hover a#a {
  display: none;
}
ul#line1 a#b {
  display: none;
}
ul#line1:hover a#b {
  display: inline;
  color: yellow;
}

ul#line1 c#c {
  display: inline;
}
ul#line2:hover c#c {
  display: none;
}
ul#line2 c#d {
  display: none;
}
ul#line2:hover c#d {
  display: inline;
  color: yellow;
}
</style>

