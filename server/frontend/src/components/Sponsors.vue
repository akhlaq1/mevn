<template>
  <div>
    <div class="container">
      <main-header></main-header>
      <navigation></navigation>
        <section>
            <div class="row">
              <sidebar-left @createTeam="showCreateTeamDialog"></sidebar-left>
              <main-content></main-content>
              <sidebar-right></sidebar-right>
            </div>    
        </section>
    </div>
    <footer-social></footer-social>
    <main-footer></main-footer>
    <!-- Modal Component -->
    <b-modal ref="myModal" id="modal1" :title="modalTitle" hide-footer>
        <component :is="modalComponent" @finish="closeForm" :modalProps="modalProps"></component>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import GameNavigation from "@/components/GameNavigation.vue";
import Navigation from "@/components/Navigation.vue";
import SidebarRight from "@/components/SidebarRight.vue";
import SidebarLeft from "@/components/SidebarLeft.vue";
import MainContent from "@/components/Sponsors.vue";
import FooterSocial from "@/components/FooterSocial.vue";
import MainFooter from "@/components/MainFooter.vue";
export default {
  name: "home",
  components: {
    MainHeader,
    Navigation,
    SidebarLeft,
    SidebarRight,
    MainContent,
    FooterSocial,
    MainFooter,
    GameNavigation
  },
  mounted() {
    let SliderScript = document.createElement('script')
    SliderScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(SliderScript)
    // this.modalTitle = "My Form";
    // this.modalComponent = TeamUpcomingEvents;
    // this.$refs.myModal.show();
  },
  methods: {
    showCreateTeamDialog() {
      this.modalTitle = "Create Team";
      this.modalComponent = CreateTeam;
      this.$refs.myModal.show();
    },
    closeForm() {
      this.$refs.myModal.hide();
    }
  }
}
</script>
