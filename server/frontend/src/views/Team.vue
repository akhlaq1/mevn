<template>
  <div class="team_container" style="z-index: -1">
    <div v-if="team" class="main_container" style="max-width:1170px;margin:0 auto;z-index:-2">
      <main-header />
      <InfoNav @invite="showInviteForm" />
      <Sponsers />
      <TopNav />
      <Profile />
      <sidebar-left style="z-index: 1; display: inline-block; width: 30%" />
      <Container style="float: right" />
      <div v-if="loading" class="load-overlay">
          <div class="cube-wrapper">
              <div class="cube-folding">
                  <span class="leaf1"></span>
                  <span class="leaf2"></span>
                  <span class="leaf3"></span>
                  <span class="leaf4"></span>
              </div>
              <span class="loading" data-name="Loading">Loading</span>
          </div>
      </div>
    </div>
    <!-- Modal Component -->
    <b-modal @hidden="modalComponent = null; modelProps = null" ref="myModal" id="modal1" :title="modalTitle" hide-footer>
        <component :is="modalComponent" @finish="closeForm" :modalProps="modalProps"></component>
    </b-modal>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import SidebarLeft from '@/components/Portfolio/SidebarLeft.vue';
import InfoNav from "@/components/Team/InfoNav.vue";
import Sponsers from "@/components/Team/Sponsers.vue";
import TopNav from "@/components/Team/TopNav.vue";
import Profile from "@/components/Team/Profile.vue";
import Container from "@/components/Team/Container.vue";
import TeamInvitation from "@/components/forms/TeamInvitation.vue";

import EditTeamDetail from "@/components/forms/EditTeamDetail.vue";
import TeamMatch from "@/components/forms/TeamMatch.vue";
import TeamNews from "@/components/forms/TeamNews.vue";
import TeamProduct from "@/components/forms/TeamProduct.vue";
import TeamUpcomingEvents from "@/components/forms/TeamUpcomingEvents.vue";
import TeamAchievement from "@/components/forms/TeamAchievement.vue";

import api from '@/services/RestService'
import notifications from '@/mixins/Notification'
import {mapGetters, mapActions, mapState} from 'vuex';

export default {
  name: "app",
  components: {
    MainHeader,
    SidebarLeft,
    Sponsers,
    TopNav,
    InfoNav,
    Profile,
    Container
  },
  mixins: [notifications],
  data() {
    return {
      loading: false,
      modalTitle: 'My Generic Modal',
      modalComponent: null,
      modalProps: {},
      dialog: {
        EditTeamDetail,
        TeamMatch,
        TeamNews,
        TeamProduct,
        TeamUpcomingEvents,
        TeamAchievement
      }
    }
  },
  computed: {
    ...mapGetters({
      team: 'team/activeTeam'
    })
  },
  mounted() {
    this.$root.$on("openDialog", data => {
      this.openDialog(data);
    });
    this.$root.$on("openEditDialog", data => {
      this.openDialog(data);
    });
  },
  methods: {
    ...mapActions(["getProfile"]),
    showInviteForm() {
      console.log('showing invitation form');
      this.modalComponent = TeamInvitation;
      this.modalTitle = "Team Invitaion";
      this.modalProps = {teamId: this.team._id}
      this.$refs.myModal.show();
    },
    openDialog(data) {
      if(data.component)
      {
        this.modalComponent = this.dialog[data.component];
        this.modalTitle = (data.component).replace(/([A-Z])/g, ' $1');
        this.modalProps = {teamId: this.team._id, model: data.data}
      }
      else
      {
        this.modalComponent = this.dialog[data];
        this.modalTitle = data.replace(/([A-Z])/g, ' $1');
        this.modalProps = {teamId: this.team._id}
      }
      this.$refs.myModal.show();
    },
    closeForm() {
      this.$refs.myModal.hide();
    }
  },
  created() {
    this.getProfile();
  }
};
</script>

<style lang="scss">
  .team_container {

        .fa-pencil {
            position: absolute; top: 2.5px; right: 20px; color: white; cursor: pointer;
        }
        .load-overlay {
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background: #00c6ff;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        @import url(https://fonts.googleapis.com/css?family=Archivo+Narrow);
        .cube-folding {
            width: 50px;
            height: 50px;
            display: inline-block;
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            font-size: 0;
        }

        .cube-folding span {
            position: relative;
            width: 25px;
            height: 25px;
            -moz-transform: scale(1.1);
            -ms-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.1);
            display: inline-block;
        }

        .cube-folding span::before {
            content: '';
            background-color: white;
            position: absolute;
            left: 0;
            top: 0;
            display: block;
            width: 25px;
            height: 25px;
            -moz-transform-origin: 100% 100%;
            -ms-transform-origin: 100% 100%;
            -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
            -moz-animation: folding 2.5s infinite linear both;
            -webkit-animation: folding 2.5s infinite linear both;
            animation: folding 2.5s infinite linear both;
        }

        .cube-folding .leaf2 {
            -moz-transform: rotateZ(90deg) scale(1.1);
            -ms-transform: rotateZ(90deg) scale(1.1);
            -webkit-transform: rotateZ(90deg) scale(1.1);
            transform: rotateZ(90deg) scale(1.1);
        }

        .cube-folding .leaf2::before {
            -moz-animation-delay: 0.3s;
            -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s;
            background-color: #f2f2f2;
        }

        .cube-folding .leaf3 {
            -moz-transform: rotateZ(270deg) scale(1.1);
            -ms-transform: rotateZ(270deg) scale(1.1);
            -webkit-transform: rotateZ(270deg) scale(1.1);
            transform: rotateZ(270deg) scale(1.1);
        }

        .cube-folding .leaf3::before {
            -moz-animation-delay: 0.9s;
            -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s;
            background-color: #f2f2f2;
        }

        .cube-folding .leaf4 {
            -moz-transform: rotateZ(180deg) scale(1.1);
            -ms-transform: rotateZ(180deg) scale(1.1);
            -webkit-transform: rotateZ(180deg) scale(1.1);
            transform: rotateZ(180deg) scale(1.1);
        }

        .cube-folding .leaf4::before {
            -moz-animation-delay: 0.6s;
            -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s;
            background-color: #e6e6e6;
        }

        @-moz-keyframes folding {
            0%,
            10% {
                -moz-transform: perspective(140px) rotateX(-180deg);
                transform: perspective(140px) rotateX(-180deg);
                opacity: 0;
            }
            25%,
            75% {
                -moz-transform: perspective(140px) rotateX(0deg);
                transform: perspective(140px) rotateX(0deg);
                opacity: 1;
            }
            90%,
            100% {
                -moz-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
                opacity: 0;
            }
        }

        @-webkit-keyframes folding {
            0%,
            10% {
                -webkit-transform: perspective(140px) rotateX(-180deg);
                transform: perspective(140px) rotateX(-180deg);
                opacity: 0;
            }
            25%,
            75% {
                -webkit-transform: perspective(140px) rotateX(0deg);
                transform: perspective(140px) rotateX(0deg);
                opacity: 1;
            }
            90%,
            100% {
                -webkit-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
                opacity: 0;
            }
        }

        @keyframes folding {
            0%,
            10% {
                -moz-transform: perspective(140px) rotateX(-180deg);
                -ms-transform: perspective(140px) rotateX(-180deg);
                -webkit-transform: perspective(140px) rotateX(-180deg);
                transform: perspective(140px) rotateX(-180deg);
                opacity: 0;
            }
            25%,
            75% {
                -moz-transform: perspective(140px) rotateX(0deg);
                -ms-transform: perspective(140px) rotateX(0deg);
                -webkit-transform: perspective(140px) rotateX(0deg);
                transform: perspective(140px) rotateX(0deg);
                opacity: 1;
            }
            90%,
            100% {
                -moz-transform: perspective(140px) rotateY(180deg);
                -ms-transform: perspective(140px) rotateY(180deg);
                -webkit-transform: perspective(140px) rotateY(180deg);
                transform: perspective(140px) rotateY(180deg);
                opacity: 0;
            }
        }

        .cube-wrapper {
            position: fixed;
            left: 50%;
            top: 50%;
            margin-top: -50px;
            margin-left: -50px;
            width: 100px;
            height: 100px;
            text-align: center;
        }

        .cube-wrapper:after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -20px;
            margin: auto;
            width: 90px;
            height: 6px;
            background-color: rgba(0, 0, 0, 0.1);
            -webkit-filter: blur(2px);
            filter: blur(2px);
            -moz-border-radius: 100%;
            -webkit-border-radius: 100%;
            border-radius: 100%;
            z-index: 1;
            -moz-animation: shadow 0.5s ease infinite alternate;
            -webkit-animation: shadow 0.5s ease infinite alternate;
            animation: shadow 0.5s ease infinite alternate;
        }

        .cube-wrapper .loading {
            font-size: 12px;
            letter-spacing: 0.1em;
            display: block;
            color: white;
            position: relative;
            top: 25px;
            z-index: 2;
            -moz-animation: text 0.5s ease infinite alternate;
            -webkit-animation: text 0.5s ease infinite alternate;
            animation: text 0.5s ease infinite alternate;
        }

        @-moz-keyframes text {
            100% {
                top: 35px;
            }
        }

        @-webkit-keyframes text {
            100% {
                top: 35px;
            }
        }

        @keyframes text {
            100% {
                top: 35px;
            }
        }

        @-moz-keyframes shadow {
            100% {
                bottom: -18px;
                width: 100px;
            }
        }

        @-webkit-keyframes shadow {
            100% {
                bottom: -18px;
                width: 100px;
            }
        }

        @keyframes shadow {
            100% {
                bottom: -18px;
                width: 100px;
            }
        }
        * {
      padding: 0;
      margin: 0;
    }

    .container {
      width: 80%;
      float: left;
    }
    .main_menu {
      width: 18%;
      margin-right: 2%;
      float: left;
      height: 100px;
    }
    @media screen and (max-width: 768px) {
      .container {
        width: 100%;
      }
      .main_menu {
        display: none;
      }
    }
    .main_menu a {
      width: 100%;
      float: left;
      text-align: center;
      padding: 10px 0;
      background: #2b2a2f;
      border-bottom: 1px solid white;
      transition-duration: 0.4s;
      font-size: 11pt;
    }
    .main_menu a:hover {
      background: #5a5859;
    }
    .icon-bar {
      position: fixed;
      top: 50%;
      -webkit-: translateY(-50%);
      -ms-transform: translateY(-50%);
      -ms-transform: rotate(20deg); /* IE 9 */
      -webkit-transform: rotate(20deg); /* Safari 3-8 */
      transform: rotate(90deg);
      left: -40px;
    }
    .icon-bar span {
      padding: 10px 40px;
      background: white;
      background-color: yellow;
      -ms-transform: rotate(20deg); /* IE 9 */
      -webkit-transform: rotate(20deg); /* Safari 3-8 */
      transform: rotate(90deg);
    }
    a.link-blue {
      text-decoration: none;
      color: white;
      background: #22afdd;
    }
    .top {
      width: 100%;
      float: left;
      padding: 20px 0;
      color: white;
      background: black;
    }
    .top .logo {
      margin-left: 10px;
    }
    .top .logo img {
      position: relative;
      float: left;
    }
    .top .logo p {
      position: absolute;
      float: left;
      margin-top: 55px;
      font-size: 11pt;
      left: 90px;
    }
    .top .txt {
      float: right;
      margin-right: 10px;
      font-size: 11pt;
      padding-top: 15px;
    }
    .top .txt p a {
      padding: 3px 20px;
    }
    .nav1 {
      width: 100%;
      float: left;
      background: #3d3d3d;
      color: white;
    }
    .nav1 span {
      padding: 7px 20px;
      float: left;
      border-right: 1px solid white;
      font-size: 11pt;
    }
    .nav1 a {
      float: left;
      padding: 7px 20px;
    }
    .sponsers {
      width: 90%;
      float: left;
      padding: 20px 5%;
      background: black;
    }
    .sponsers .logo {
      width: 20%;
      float: left;
    }
    .nav2 {
      width: 100%;
      float: left;
      background: #3d3d3d;
    }
    .nav2 a {
      padding: 7px 20px;
      background: #3d3d3d;
      float: left;
      border-right: 1px solid lightgrey;
    }
    .nav2 a:hover {
      background: #5a5859;
    }

    .topnav {
      background-color: #3d3d3d;
      overflow: hidden;
      float: left;
      width: 100%;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 7px 20px;
      text-decoration: none;
      font-size: 14px;
      background: #3d3d3d;
      border-right: 1px solid white;
    }

    /* Change the color of links on hover */
    .topnav a:hover {
      background-color: #5a5859;
    }

    /* Add an active class to highlight the current page */
    .active {
      background-color: #5a5859;
      color: white;
    }

    /* Hide the link that should open and close the topnav on small screens */
    .topnav .icon {
      display: none;
    }

    @media screen and (max-width: 600px) {
      .topnav a:not(:first-child) {
        display: none;
      }
      .topnav a.icon {
        float: right;
        display: block;
      }
    }

    /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
    @media screen and (max-width: 600px) {
      .topnav.responsive {
        position: relative;
      }
      .topnav.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0;
      }
      .topnav.responsive a {
        float: none;
        display: block;
        text-align: left;
      }
    }

    .profile {
      width: 100%;
      float: left;
      background-size: 100% 100%;
      position: relative;
      overflow: hidden;
      background: #0b0b23;
    }

    .profile .txt {
      width: 100%;
      float: left;
      padding: 30px 0;
      background: #0b0b23;
      padding-left: 30%;
      color: white;
      font-weight: 600;
      bottom: 0;
      position: relative;
    }
    .profile img {
      border-radius: 50%;
      float: left;
      position: absolute;
      display: block;
      top: 75px;
      left: 20px;
    }

    @media only screen and (max-width: 768px) {
      .profile img {
        left: 50%;
        transform: translate(-50%, 0%);
      }
    }

    .profile .txt ul {
      float: left;
      list-style-type: none;
      padding-left: 10%;
    }
    .profile .txt ul li {
      padding: 7px 0;
    }
    .profile .txt ul li a {
      padding: 10px 20px;
      margin-top: 5px;
      float: left;
    }

    @media only screen and (max-width: 768px) {
      .profile img {
        left: 50%;
        transform: translate(-50%, 0%);
      }
      .profile .txt {
        margin-top: 50px;
        padding-left: 10px;
      }
    }

    .col-1 {
      width: 8.33%;
    }
    .col-2 {
      width: 16.66%;
    }
    .col-3 {
      width: 25%;
    }
    .col-4 {
      width: 33.33%;
    }
    .col-5 {
      width: 41.66%;
    }
    .col-6 {
      width: 50%;
    }
    .col-7 {
      width: 58.33%;
    }
    .col-8 {
      width: 66.66%;
    }
    .col-9 {
      width: 75%;
    }
    .col-10 {
      width: 83.33%;
    }
    .col-11 {
      width: 91.66%;
    }
    .col-12 {
      width: 100%;
    }

    [class*="col-"] {
    }

    @media only screen and (max-width: 768px) {
      /* For mobile phones: */
      [class*="col-"] {
        width: 100%;
      }
    }
    @media only screen and (max-width: 768px) {
      .top .logo {
        width: 100%;
        float: left;
      }

      .top .txt {
        width: 90%;
        float: left;
        margin-top: 20px;
        margin-left: 20px;
      }
      .nav1 span {
        width: 50%;
        float: left;
        border: none;
      }
      .nav1 a {
        width: 50%;
        float: left;
        padding: 55px 0;
        text-align: center;
      }
      .responsive_txt {
        width: 50%;
        float: left;
      }
      .sponsers .logo {
        width: 50%;
      }
    }

    .raw1 {
      width: 100%;
      float: left;
      background: #050511;
    }
    .raw1 .nav {
      float: left;
      width: 100%;
      background: #3d3d3d;
    }
    .raw1 .nav span {
      padding: 10px 30px;
      float: left;
      border-right: 1px solid white;
      color: white;
    }
    .raw1 .col_1 {
      width: 40%;
      float: left;
      padding: 10px 0;
      background: #111020;
      color: white;
      border-right: 20px solid #262628;
    }
    .raw1 .col_1 .block {
      width: 100%;
      float: left;
      padding: 10px 0;
    }
    .raw1 .col_1 .block p {
      width: 100%;
      padding-left: 8%;
      padding-bottom: 5px;
    }

    .raw1 .col_1 .block .box {
      width: 25%;
      float: left;
      font-size: 11pt;
      cursor: pointer;
    }
    .raw1 .col_1 .block .box img {
      border-radius: 50%;
    }
    .raw1 .col_1 .block .box span {
      width: 100%;
      float: left;
      text-align: center;
    }
    .raw1 .col_1 a {
      padding: 7px 15px;
      border-radius: 20px;
      margin-left: 5%;
      float: left;
      margin-top: 10px;
      border: 1px solid #22afdd;
      transition-duration: 0.3s;
    }

    .raw1 .col_1 a:hover {
      background: #111020;
      color: #22afdd;
    }
    .gallery .gallery-cell {
      width: 30%;
      margin: 0 1.5%;
    }

    .gallery .gallery-cell img {
      float: left;
      border-radius: 50%;
    }
    .gallery .gallery-cell h4 {
      float: left;
      padding: 20px 0 0 10px;
    }

    @media screen and (max-width: 768px) {
      .gallery .gallery-cell {
        width: 80%;
        margin: 0 10%;
      }
    }
    .raw1 .col_2 {
      width: 55%;
      float: left;
      background: #050511;
    }
    .gallery {
      margin-top: 100px;
    }
    .gallery.js-flickity.flickity-enabled.is-draggable {
      width: 100%;
      float: left;
    }
    .gallery-cell {
      padding: 20px 0;
    }
    .raw1 .gallery-cell .img {
      width: 100%;
      float: left;
      height: 120px;
      border-radius: 10px 10px 0 0;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: 100px auto !important;
      background-repeat: no-repeat !important;
      background-position: center !important;
    }

    .gallery-cell p {
      width: 100%;
      float: left;
      text-align: center;
      color: white !important;
      background: #22afdd !important;
      border-radius: 0 !important;
      font-size: 10pt;
      padding: 10px 0;
      border-radius: 0 0 10px 10px !important;
    }

    .raw1 .nav {
      width: 100%;
      float: left;
    }

    @media screen and (max-width: 768px) {
      .raw1 .col_1 {
        width: 100%;
        float: left;
        border: none;
      }
      .raw1 .col_2 {
        width: 100%;
        float: left;
      }
      .raw1 .nav span {
        width: 100%;
        float: left;
        border: none;
        padding: 10px 0;
        text-align: center;
      }
    }
    .raw_2 .gallery-cell {
      width: 23%;
      margin: 0 1%;
    }
    .raw_2 .gallery-cell p {
      background-color: transparent !important;
    }
    .raw_2 .gallery .gallery-cell img {
      float: none !important;
      border-radius: 0;
      margin-top: 20px;
    }
    .raw_2 .title {
      width: 100%;
      float: left;
      margin-top: 10px;
    }
    .raw_2 .gallery {
      margin-top: 10px;
    }
    .raw_2 .title p {
      width: 98%;
      float: left;
      color: white;
      padding: 10px 1%;
      background: #3d3d3d;
    }
    .raw_2 .content {
      width: 100%;
      float: left;
    }
    .raw_2 .gallery .gallery-cell .txt p {
      font-weight: bold;
    }
    @media screen and (max-width: 768px) {
      .raw_2 .gallery .gallery-cell {
        width: 80%;
        margin: 0 10%;
      }
    }
    .raw_3 {
      width: 98%;
      float: left;
      color: white;
      padding: 20px 1%;
    }
    .raw_3 .col1 {
      width: 25%;
      float: left;
      box-sizing: border-box;
    }
    .raw_3 .col1 a {
      width: 50%;
      float: left;
      padding: 10px 0;
      margin: 20px 0;
      text-align: center;
    }
    .raw_3 .col1 a:hover {
      opacity: 0.9;
    }
    .raw_3 .col1 h2 {
      width: 100%;
      text-align: center;
      float: left;
    }
    .raw_3 .col2 p {
      font-size: 10pt;
    }
    .raw_3 .col2 .team {
      width: 100%;
      float: left;
      padding: 10px 0;
      padding-bottom: 40px;
      border-bottom: 1px solid white;
    }
    .raw_3 .col2 .team .col {
      width: 25%;
      float: left;
    }
    .raw_3 .col2 .team .col a {
      padding: 2px 10px;
      margin-top: 10px;
      float: left;
      border: 1px solid #22afdd;
      transition-duration: 0.3s;
    }
    .raw_3 .col2 .team .col a:hover {
      background: transparent;
      color: #22afdd;
    }
    @media screen and (max-width: 768px) {
      .raw_3 .col1 {
        width: 80%;
        margin: 0 10%;
      }
      .raw_3 .col2 {
        width: 90%;
      }
    }
    .raw_4 {
      width: 100%;
      float: left;
      color: white;
    }
    .raw_4 h4 {
      width: 100%;
      float: left;
      padding: 5px 0;
      background: #222222;
      margin: 10px 0;
    }
    .raw4 .badges {
      width: 100%;
      float: left;
    }
    .raw_4_txt {
      float: left;
      width: 100%;
      margin-top: 50px;
      color: white;
      text-align: center;
      background: #111020;
      padding: 30px 0;
    }
    .raw_4_txt .col {
      width: 25%;
      float: left;
      font-size: 12pt;
    }
    .raw_4_txt .col a {
      padding: 7px 20px;
      margin-top: 10px;
      display: inline-block;
      border-radius: 10px;
    }
    @media screen and (max-width: 768px) {
      .raw_4_txt .col {
        width: 100%;
        margin-top: 20px;
      }
    }

    .shop {
      width: 100%;
      float: left;
      color: white;
      padding: 10px 0;
    }
    .shop h4 {
      width: 98%;
      padding: 10px 1%;
      background: #222222;
      margin-bottom: 10px;
    }
    .shop .col {
      width: 18%;
      float: left;
      padding: 20px 0;
      font-size: 11pt;
      font-weight: 600;
      margin: 0 1%;
      background: #111020;
    }
    .shop .col a {
      padding: 3px 20px;
      margin-top: 10px;
      display: inline-block;
    }
    @media screen and (max-width: 768px) {
      .shop .col {
        width: 98%;
        float: left;
        margin-top: 10px;
      }
    }

    .news {
      width: 100%;
      float: left;
      padding: 40px 0;
      display: block;
    }
    .news .col {
      width: 23%;
      margin: 0 1%;
      float: left;
      color: white;
      font-size: 10pt;
      margin-bottom: 10px;
    }
    .news .col:hover .img {
      opacity: 0.7;
      cursor: pointer;
    }
    .news .col .txt {
      padding: 10px 0;
      background: #222222;
      border-radius: 0 0 10px 10px !important;
    }
    .news .col a {
      margin-top: 5px;
      display: inline-block;
      background: transparent;
      color: #41c2ec;
      border-radius: 0 0 10px 10px !important;
    }
    .news h4 {
      width: 98%;
      padding: 10px 1%;
      background: #222222;
      margin-bottom: 10px;
      color: white;
      margin-bottom: 40px;
    }
    @media screen and (max-width: 768px) {
      .news {
        width: 90%;
        float: left;
        margin: 0 5%;
      }
      .news .col {
        width: 98%;
        margin: 0 1%;
        float: left;
        margin-top: 10px;
      }
    }
    .social {
      width: 100%;
      float: left;
      background: #111020;
    }
    .social .col {
      float: left;
      width: 30%;
      padding: 20px 1.5%;
      color: white;
      background: #111020;
      font-size: 11pt;
    }

    .social .col i.fab.fa-twitter {
      float: left;
      padding: 10px 12px;
      background: white;
      color: black;
      margin: 0 10px;
      border-radius: 50%;
    }
    @media screen and (max-width: 768px) {
      .social .col {
        width: 97%;
        text-align: center;
      }
    }
    .social .col i {
      float: left;
      padding: 10px 12px;
      background: white;
      color: black;
      margin: 0 10px;
      border-radius: 50%;
    }
    .fans {
      width: 100%;
      float: left;
      color: white;
      padding: 60px 0;
    }
    .fans .bar {
      width: 80%;
      float: left;
      text-align: center;
      margin-top: 50px;
    }
    .fans .bar .uk {
      width: 48%;
      float: left;
      background: #41c2ec;
      padding: 10px 0;
    }
    .fans .bar .korea {
      width: 22%;
      float: left;
      background: #fc611f;
      padding: 10px 0;
    }
    .fans .bar .usa {
      width: 10%;
      float: left;
      background: #da324b;
      padding: 10px 0;
    }
    .fans .bar .other {
      width: 20%;
      float: left;
      background: #909da3;
      padding: 10px 0;
    }

    .fans .txt {
      width: 18%;
      margin-left: 2%;
      float: left;
    }

    .fans h4 {
      width: 98%;
      padding: 10px 1%;
      background: #222222;
      margin-bottom: 10px;
      color: white;
      margin-bottom: 40px;
    }

    @media screen and (max-width: 768px) {
      .fans .bar {
        width: 100%;
      }

      .fans .txt {
        width: 96%;
        text-align: center;
        margin-top: 20px;
      }
    }
    .follow {
      width: 100%;
      float: left;
      text-align: center;
      margin-top: 150px;
      margin-bottom: 30px;
    }
    .follow a {
      padding: 7px 14px;
      border-radius: 50%;
      margin-left: 5px;
      background: #fffffd;
      color: lightgrey;
      transition-duration: 0.3s;
    }
    .follow a:hover {
      background: lightgrey;
      color: white;
    }

    .footer {
      width: 100%;
      float: left;
      color: white;
    }
    .footer .col {
      width: 33%;
      float: left;
      text-align: center;
    }
    .footer .col a {
      background: transparent;
      width: 100%;
      float: left;
      padding: 2px 0;
      transition-duration: 0.3s;
      color: lightgrey;
    }
    .footer .col a:hover {
      color: grey;
      text-decoration: underline;
    }

    /* The side navigation menu */
    .sidenav {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1; /* Stay on top */
      top: 0; /* Stay at the top */
      left: 0;
      background-color: #2b2a2f !important; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
    }

    /* The navigation menu links */
    .sidenav a {
      padding: 15px 0;
      text-align: center;
      text-decoration: none;
      font-size: 25px;
      color: white !important;
      display: block;
      transition: 0.3s;
      background: #2b2a2f !important;
      border-bottom: 1px solid white;
    }

    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover {
      color: #f1f1f1;
    }

    /* Position and style the close button (top right corner) */
    .sidenav .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }

    /* Style page content - use this if you want to push the page content to the right when you open the side navigation */
    #main {
      transition: margin-left 0.5s;
      padding: 20px;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
      .sidenav {
        padding-top: 15px;
      }
      .sidenav a {
        font-size: 18px;
      }
    }
    @media screen and (min-width: 768px) {
      .res_menu {
        display: none;
      }
    }
    .gallery.js-flickity.flickity-enabled.is-draggable {
      padding: 0 10%;
      float: left;
    }
    .raw1 .gallery.js-flickity.flickity-enabled.is-draggable {
      padding: 0 12.5%;
      float: left;
    }
    @media only screen and (max-width: 768px) {
      .nav1 span {
        width: 100%;
        float: left;
        border: none;
        text-align: center;
      }
    }
    @media only screen and (max-width: 768px) {.nav1 a {
      width: 100%;
      float: left;
      padding: 10px 0;
      text-align: center;
      margin-top: 10px;
    }}

    @media only screen and (max-width: 768px) {
      .responsive_txt {
        width: 100%;
        float: left;
      }
    }
    @media only screen and (max-width: 768px) {
      .nav1 a {
        width: 100%;
        float: left;
        padding: 10px 0;
        text-align: center;
      }
    }
    .fans {
      padding: 20px 0;
      float: left;
    }
    .fans .bar {
      font-size: 10pt;
    }

    .button17 {
      color: red;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      position: relative;
      border: 1px solid rgba(255, 255, 255, 0.5);
      overflow: hidden;
      background-color: #22afdd;
      padding: 7px 0;
      border-radius: 10px;
      margin-top: 20px;
      color: white;
    }
    .sim-button {
      text-align: center;
      margin-right: auto;
      margin-left: auto;
      width: 80%;
      cursor: pointer;
    }
    .button17:hover::before,
    .button17:hover::after {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    .button17::before,
    .button17::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.25);
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      -webkit-transform: translate(-13%, -190%) rotate(-30deg);
      transform: translate(-13%, -190%) rotate(-30deg);
      -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }
    .button17:hover::before,
    .button17:hover::after {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
    }
    .button17::before,
    .button17::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background-color: rgba(255, 255, 255, 0.25);
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      -webkit-transform: translate(-13%, -190%) rotate(-30deg);
      transform: translate(-13%, -190%) rotate(-30deg);
      -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
      transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }
    .wrapper-inner-tab-backgrounds-second {
      float: left;
      width: 100px;
    }

    .wrapper-inner-tab-backgrounds-second {
      width: 80%;
      margin: 0 10%;
      border-radius: 20px !important;
    }
    @media only screen and (max-width: 768px) {
      .sim-button {
        width: 50%;
      }
    }
    .shop .button17 {
      padding: 3px 0;
      margin-top: 10px;
      border-radius: 1px;
    }
    .flickity-slider {
      transform: translateX(-37.49%);
    }
    .social i.fab.fa-facebook-f {
      padding: 10px 15px;
    }
    .uk img {
      position: absolute;
      margin-bottom: 10px;
      /* bottom: -10px; */
      /* float: left; */
      margin-top: 30px;
      /* left: 230px; */
      /* right: 20px; */
      margin-right: 20px;
      margin-left: -80px;
    }
    .usa img {
      position: absolute;
      margin-bottom: 10px;
      /* bottom: -10px; */
      /* float: left; */
      margin-top: 30px;
      /* left: 230px; */
      /* right: 20px; */
      margin-right: 20px;
      margin-left: -40px;
    }
    .korea img {
      position: absolute;
      margin-bottom: 10px;
      /* bottom: -10px; */
      /* float: left; */
      margin-top: -70px;
      /* left: 230px; */
      /* right: 20px; */
      margin-right: 20px;
      margin-left: -20px;
    }
    .other img {
      position: absolute;
      margin-bottom: 10px;
      /* bottom: -10px; */
      /* float: left; */
      margin-top: -65px;
      /* left: 230px; */
      /* right: 20px; */
      margin-right: 20px;
      margin-left: -40px;
    }

    .open {
      width: 250px;
    }
    .profile .img {
      width: 100%;
      float: left;
      background: url("~/img/cover.png");
      height: 150px;
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .raw_2 .gallery {
      background: url("~/img/raw2_bg.jpg");
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-repeat: no-repeat !important;
      background-size: 100% 100%;
    }
    .raw_3 .col2 {
      float: left;
      width: 65%;
      padding: 20px 2.5% 20px 7.5%;
      background: url("~/img/match_bg.jpg");
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .news .col .img {
      width: 100%;
      height: 140px;
      background: url("~/img/n1.jpg");
      border-radius: 10px 10px 0 0 !important;
    }
  }
.sidebar-left-page3 ul li {
  background-color: #2b2b2e !important;
}
</style>
