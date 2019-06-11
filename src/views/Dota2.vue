<template>
  <div>
    <div class="container">
      <main-header></main-header>
      <navigation></navigation>
        <section>
            <div class="row">
              <sidebar-left></sidebar-left>
              <main-content></main-content>
              <sidebar-right></sidebar-right>
            </div>    
        </section>
    </div>
    <footer-social></footer-social>
    <main-footer></main-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from '@/components/MainHeader.vue';
import Navigation from '@/components/Navigation.vue';
import SidebarRight from '@/components/SidebarRight.vue';
import SidebarLeft from '@/components/SidebarLeft.vue';
import MainContent from '@/components/Stats/Dota2.vue';
import FooterSocial from '@/components/FooterSocial.vue';
import MainFooter from '@/components/MainFooter.vue';
export default {
  name: 'home',
  components: {
    MainHeader,
    Navigation,
    SidebarLeft,
    SidebarRight,
    MainContent,
    FooterSocial,
    MainFooter
  },
  mounted() {
    let SliderScript = document.createElement('script')
    SliderScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(SliderScript)
  },
}
</script>
