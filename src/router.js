import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Logout from '@/components/auth/Logout.vue';
import TeamConfirmation from '@/components/Team/TeamConfirmation.vue';
import Portfolio from './views/Portfolio.vue';
import Termsandconditions from './views/Termsandconditions.vue'
import Media from './views/Media.vue'
import Team from './views/Team.vue'
import Privacypolicy from './views/PrivacyPolicy.vue'
import Dota2Search from './views/Dota2Search.vue'
import Posts from '@/components/Posts'
import NewPost from '@/components/NewPost'
import EditPost from '@/components/EditPost'
import Stats from '@/views/Stats.vue'
import Streams from '@/views/Streams.vue'
import StreamsForm from '@/views/StreamsForm.vue'
import Sponsors from '@/views/Sponsors.vue'
import SponsorsForm from '@/views/SponsorsForm.vue'
import Screenshots from '@/views/Screenshots.vue'
import ScreenshotsForm from '@/views/ScreenshotsForm.vue'
import Dota2 from '@/views/Dota2.vue'
import H2H from '@/views/H2H.vue'
import Tournaments from '@/views/Tournaments.vue'
import H2HMobile from '@/views/H2HMobile.vue'
import H2HMobileFortniteMatchesForm from '@/views/H2HMobileFortniteMatchesForm.vue'
import H2HMobile8ballpool from '@/views/H2HMobile8ballpool.vue'
import H2HMobile8ballpool1 from '@/views/H2HMobile8ballpool1.vue'
import H2HMobileForm from '@/views/H2HMobileForm.vue'
import H2HMobileFortniteDetails from '@/views/H2HMobileFortniteDetails.vue'
import H2HMobileFortniteMatches from '@/views/H2HMobileFortniteMatches.vue'
import H2HMobile8ballpoolDetails from '@/views/H2HMobile8ballpoolDetails.vue'
import H2HMobile8ballpoolMatches from '@/views/H2HMobileFortniteMatches.vue'
import H2HMobileMobileLegendsDetailsView from '@/views/H2HMobileMobileLegendsDetails.vue';
import H2HMobileMobileLegendsDetails from '@/components/H2H/Mobile/MobileLegends/Details.vue';
import H2HMobileMobileLegendsMatches from '@/views/H2HMobileMobileLegendsMatches.vue'
import H2HEsportsForm from '@/views/H2HEsportsForm.vue'
import H2HEsports from '@/views/H2HEsports.vue'
import H2HEsportsDota2 from '@/views/H2HEsportsDota2.vue'
import H2HEsportsDota21 from '@/views/H2HEsportsDota21.vue'
import H2HEsportsFortnite from '@/views/H2HEsportsFortnite.vue'
import H2HEsportsFortnite1 from '@/views/H2HEsportsFortnite1.vue'
import H2HEsportsFortniteDetails from '@/views/H2HEsportsFortniteDetails.vue'
import TournamentsMobile from '@/views/TournamentsMobile.vue'
import TournamentsMobile8ballpool from '@/views/TournamentsMobile8ballpool.vue'
import TournamentsMobile8ballpool1 from '@/views/TournamentsMobile8ballpool1.vue'
import TournamentsEsports from '@/views/TournamentsEsports.vue'
import TournamentsEsportsDota2 from '@/views/TournamentsEsportsDota2.vue'
import TournamentsEsportsDota21 from '@/views/TournamentsEsportsDota21.vue'
import TournamentsEsportsForm from '@/views/TournamentsEsportsForm.vue'
import TournamentsMobileForm from '@/views/TournamentsMobileForm.vue'
import Schedule from '@/views/Schedule.vue'
import Challenge from '@/components/game/challenge.vue';

Vue.use(Router)  

export default new Router({
  routes: [
    { path: '/schedule',
      name: 'Schdeule', 
      component: Schedule 
    },
    { 
      path: '/H2H/mobile/mobilelegends',
      component: H2HMobileMobileLegendsDetailsView,
      children:[
        { 
          path:'', 
          redirect:'/H2H/mobile/mobilelegends/details',

        },
     {     
      path: 'details',      
      name: 'H2HMobileMobileLegendsDetails',  
      component: H2HMobileMobileLegendsDetails,
     },  
        {
          path: 'challenge',    
          name:'H2HMobileMobileLegendsChallenge',
          component:Challenge           
       },
      
      ]
    },   
    { 
      path: '/H2H/mobile/mobilelegends/matches',
      name: 'H2HMobileMobileLegendsMatches',
      component: H2HMobileMobileLegendsMatches
    },
    {
      path: '/H2H/mobile/fortnite/matches/form',
      name: 'H2HMobileFortniteMatchesForm',
      component: H2HMobileFortniteMatchesForm 
    },
    {
      path: '/H2H/mobile/8ballpool/details',
      name: 'H2HMobile8ballpoolDetails',
      component: H2HMobile8ballpoolDetails
    },
    {
      path: '/H2H/mobile/8ballpool/matches',
      name: 'H2HMobile8ballpoolMatches',
      component: H2HMobile8ballpoolMatches
    },
    {
      path: '/H2H/mobile/fortnite/matches',
      name: 'H2HMobileFortniteMatches',
      component: H2HMobileFortniteMatches
    },
    {
      path: '/H2H/mobile/fortnite/details',
      name: 'H2HEmobileFortniteDetails',
      component: H2HMobileFortniteDetails
    },
    {
      path: '/H2H/esports/fortnite/details',
      name: 'H2HEsportsFortniteDetails',
      component: H2HEsportsFortniteDetails
    },
    {
      path: '/H2H/esports/fortnite',
      name: 'H2HEsportsFortnite',
      component: H2HEsportsFortnite
    },
    {
      path: '/H2H/esports/fortnite/1',
      name: 'H2HEsportsFortnite1',
      component: H2HEsportsFortnite1
    },


    {
      path: '/H2H/Mobile/form',
      name: 'H2HIOSForm',
      component: H2HMobileForm
    },

    {
      path: '/H2H/Esports/form',
      name: 'H2HEsportsForm',
      component: H2HEsportsForm
    },
    {
      path: '/tournaments/Mobile/form',
      name: 'TournamentsMobileForm',
      component: TournamentsMobileForm
    },
    {
      path: '/tournaments/esports/form',
      name: 'TournamentsEsportsForm',
      component: TournamentsEsportsForm
    },
    
    {
      path: '/h2h/esports',
      name: 'H2HEsports',
      component: H2HEsports
    },
    {
      path: '/h2h/esports/dota2',
      name: 'H2HEsportsDota2',
      component: H2HEsportsDota2
    },
    {
      path: '/h2h/esports/dota2/1',
      name: 'H2HEsportsDota21',
      component: H2HEsportsDota21
    },
    
    {
      path: '/tournaments/esports',
      name: 'TournamentsEsports',
      component: TournamentsEsports
    },
    {
      path: '/tournaments/esports/dota2',
      name: 'TournamentsEsportsDota2',
      component: TournamentsEsportsDota2
    },
    {
      path: '/tournaments/esports/dota2/1',
      name: 'TournamentsEsportsDota21',
      component: TournamentsEsportsDota21
    },
    
    {
      path: '/h2h/Mobile/8ballpool',
      name: 'H2HMobile8ballpool',
      component: H2HMobile8ballpool
    },  
    {
      path: '/h2h/Mobile/8ballpool/1',
      name: 'H2HMobile8ballpool1',
      component: H2HMobile8ballpool1
    },
    {
      path: '/h2h/',
      name: 'H2H',
      component: H2H
    },
    {
      path: '/h2h/Mobile',
      name: 'H2HMobile',
      component: H2HMobile
    },
    {
      path: '/tournaments/Mobile',
      name: 'TournamentsMobile',
      component: TournamentsMobile
    },
    {
      path: '/tournaments/Mobile/8ballpool',
      name: 'TournamentsMobile8ballpool',
      component: TournamentsMobile8ballpool
    },
    {
      path: '/tournaments/Mobile/8ballpool/1',
      name: 'TournamentsMobile8ballpool1',
      component: TournamentsMobile8ballpool1
    },
    {
      path: '/tournaments',
      name: 'Tournaments',
      component: Tournaments
    },
    {
      path: '/screenshots/form',
      name: 'ScreenshotsForm',
      component: ScreenshotsForm
    },
    {
      path: '/screenshots',
      name: 'Screenshots',
      component: Screenshots
    },
    {
      path: '/streams/form',
      name: 'StreamsForm',
      component: StreamsForm
    },
    {
      path: '/sponsors/form',
      name: 'SponsorsForm',
      component: SponsorsForm
    },
      {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors
    },
    {
      path: '/streams',
      name: 'Streams',
      component: Streams
    },
    {
      path: '/dota2/stats',
      name: 'Stats',
      component: Stats
    },
    {
      path: '/posts/:id',
      name: 'EditPost',
      component: EditPost
    },
    {
      path: '/posts/new',
      name: 'NewPost',
      component: NewPost
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/dota2/search',
      name: '/dota2search',
      component: Dota2Search,
      meta: {
        requiresAuth: true,
      }
    }, 
    {
      path: '/dota2',
      name: '/dota2',
      component: Dota2
      ,
      meta: {
        requiresAuth: true,
      }
    }, 
    {
      path: '/media',
      name: 'media',
      component: Media
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/termsandconditions',
      name: 'termsandconditions',
      component: Termsandconditions
    },
    {
      path: '/privacypolicy',
      name: 'privacypolicy',
      component: Privacypolicy
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/u/:username',
      name: 'portfolio',
      component: Portfolio,
      // meta: {
      //   requiresAuth: true,
      // }
    },
    {
      path: '/team/:teamId',
      name: 'team',
      component: Team,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/teamconfirmation/:token',
      name: 'team-confirmation',
      component: TeamConfirmation,
      // meta: {
      //   requiresAuth: true,
      // }
    }
  ]
})
