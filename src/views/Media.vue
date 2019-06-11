<template>
     <div>
    <div class="container">
        <main-header></main-header>
        <user-profile></user-profile>
        <section>
            <div class="row">
                <sidebar-left></sidebar-left>
                <main-content></main-content>
                <sidebar-right></sidebar-right>
            </div>   
            <sponsors></sponsors> 
            <brands></brands>
        </section>
    </div>
    <footer-social></footer-social>
    <main-footer></main-footer>
  </div>
</template>

<script>
import MainContent from "@/components/Media/MainContent.vue";
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import SidebarLeft from '@/components/SidebarLeft.vue';
import SidebarRight from '@/components/Portfolio/SidebarRight.vue';
import Navigation from '@/components/Navigation.vue'

export default {
    name: 'Media',
    components: {
    MainHeader,
    MainFooter,
    SidebarLeft,
    MainContent,
    Navigation,
    SidebarRight
  },
   mounted() {
    let SliderScript = document.createElement('script')
    SliderScript.setAttribute('src', 'js/main.js')
    document.head.appendChild(SliderScript)
  },
}
</script>

<style>

</style>
