<template>
    <div>
        <div class="container" v-if="userData">
            <main-header></main-header>
            <user-profile :user="user" :data="userData" @refresh="refresh"></user-profile>
            <section>
                <div class="row">
                    <sidebar-left></sidebar-left>
                    <main-content :data="userData" @refresh="refresh"></main-content>
                    <sidebar-right></sidebar-right>
                </div>
                <sponsors :data="userData" @refresh="refresh"></sponsors>
                <brands :data="userData" @refresh="refresh"></brands>
            </section>
        </div>
        <footer-social></footer-social>
        <main-footer></main-footer>
        <div v-if="showLoading" class="load-overlay">
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
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import FooterSocial from '@/components/FooterSocial.vue';
import MainFooter from '@/components/MainFooter.vue';
import UserProfile from '@/components/Portfolio/UserProfile.vue';
import SidebarLeft from '@/components/Portfolio/SidebarLeft.vue';
import MainContent from "@/components/Portfolio/MainContent.vue";
import SidebarRight from '@/components/Portfolio/SidebarRight';
import Sponsors from '@/components/Portfolio/Sponsors.vue';
import Brands from '@/components/Portfolio/Brands.vue';
import {
    mapGetters,
    mapActions
} from 'vuex';
import UserService from "@/services/UserService";
import { setTimeout } from 'timers';

export default {
    name: 'Portfolio',
    data() {
        return {
            showLoading: true,
            userData: {},
            data: {},
            // user: {username:null, portfolioUrl:null}
        }
    },
    components: {
        MainHeader,
        UserProfile,
        FooterSocial,
        MainFooter,
        SidebarLeft,
        MainContent,
        SidebarRight,
        Sponsors,
        Brands
    },
    computed: {
        ...mapGetters({
            user: "getUserData"
        })
    },
    mounted() {
        let SliderScript = document.createElement('script')
        SliderScript.setAttribute('src', 'js/main.js')
        document.head.appendChild(SliderScript)
        this.getProfile();
    },
    
    methods: {
        ...mapActions(["getProfile"]),
        async getUserData() {
            let res = await UserService.getAdditionalData(this.user._id); 
            this.userData = res.data == null ? {} : res.data;
            this.userData.is_private = true;  
            if(res.data){
                this.userData.is_bio = true;   
            } else{
                this.userData.is_bio = false;   
            }
            this.showLoading = false;
        },
        async getUserPublicData() {
            let res = await UserService.getPublicProfile(this.$route.params.username); 
            this.userData = res.data == null ? {} : res.data.userAdditionalDetail[0]; 
            this.userData.is_private = false;   
            this.user = res.data == null ? {} : res.data;  
            if(res.data){
                this.userData.is_bio = true;   
            }else{
                this.userData.is_bio = false;   
            }
            this.showLoading = false;
            console.log(res.data)
        },
        refresh() {
            this.userData = null;
            setTimeout(() => {
                this.getUserData();
            }, 500)
        }
    },
    watch: {
        user() {
            if(this.user._id){
                this.getUserData();
            } else{
                this.getUserPublicData();
            }
        }
    }
}
</script>

<style>
    /* .flickity-viewport{
        margin-bottom: 30px !important;
    } */
    .update-team{
        color: white;
        padding: 7px !important;
        cursor: pointer !important ;
        position: absolute !important ;
        top: 15px !important ;
        right: 40px !important ;
        border-radius: 50%;
    }
    .delete-team{
        color: red;
        padding: 7px;
        cursor: pointer;
        position: absolute;
        top: 15px;
        right: 8px;
        border-radius: 50%;
    }
    .height-90{
        height: 90px;
    }
    .inline-profile{
        display: flex;
    }
    .width-10{
        width:130px
    }
    .margin-top-10{
      margin-top: 10px;
    }
    .radius-50-cent{
        border-radius: 50%;
    }
    .margin-bottom-10{
        margin-bottom: 10px;
    }
    .flickity-page-dots {
        bottom: 1px !important ;
    }
    .slick-track{
        width: 100% !important;
    }
    .slick-track div{
        width: 100% !important;
    }
    .height-126 > .flickity-viewport{
        height: 126px !important;
    }
    .margin-r-20{
        margin-right: 20px;
    }
    .margin-bottom-30{
        margin-bottom: 30px;
    }
    .fa-pencil {
        position: absolute; top: 2.5px; right: 20px; color: white; cursor: pointer;
    }
    .fa-plus {
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
</style>
