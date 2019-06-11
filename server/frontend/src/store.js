import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import UserService from '@/services/UserService';
import api from '@/services/RestService';
import vm from './main.js';
Vue.use(Vuex)
const BASE_URL = "/api/";
const game = {
  state:{
    Game:{},
    Challenge:{
      oponent:'',
      challenger:'',
      error:'',

    },
    challenge:{},
    ChallengeStatus:'',
    username:'',
  },
  mutations:{
    Set_Game:(state,data)=>{
      state.Game=data;
      console.log("game name fuckers:"+data.Name)
      let Data={
        room:data.Name,
        token:localStorage.getItem('token')
    };


    },
    Set_Challenge:(state,data)=>{
      console.log(data)
      state.challenge=data;
    },
    SetChallengeStatus:(state,data)=>{
      state.ChallengeStatus=data;
    },
    Set_Challenger:(state,data)=>{
      state.Challenge.oponent=data.oponent;
      state.Challenge.challenger=data.challenger;

    },
    c_error:(state,data)=>{
            state.error=data;
    },
    SetUserName:(state,data)=>{
      state.username=data;
    },
    ReSetChallenge:(state,data)=>{
      state.Challenge='';
      state.challenge='';
      state.ChallengeStatus='';
    }
  },

    actions:{
      AsyncSubmitDispute({commit},data){

        console.log(data)
          setTimeout(()=>{
            const fd=new FormData();
            fd.append('DisputeImage',data.DisputeImage)
            fd.append('challenge_id',data.challenge_id)
            fd.append('Contact_Source',data.Contact_Source)
            fd.append('Contact_Details',data.Contact_Details)
            fd.append('add_comments',data.add_comments)

           axios.post(BASE_URL+'registerDispute',fd)
          },1500);
      },
      AsyncChallengeStatus({commit},data){
        setTimeout(()=>{
          console.log(data)
            commit('SetChallengeStatus',data)
        },1500)
      },
      AsyncSetGame:({commit},data)=>{
        console.log("set name action")
        setTimeout(()=>{
          axios.post(BASE_URL+'getGame',{
            name:'Mobile Legends'
        }).then((data)=>{
          console.log("hello 66 dkasjdklas")
            console.log(data)
            commit('Set_Game',data.data);
        });

        },1500)
     },
     AsyncSetChallenger:({commit},data)=>{
           setTimeout(()=>{
            console.log("asjaksjkajsk akjskajs")
            console.log(data)

            commit('Set_Challenger',data);
           },1500)
     },
     AsyncStartChallenge:({commit},data)=>{
         setTimeout(()=>{
           console.log(data);
           axios.post(BASE_URL+'registerChallenge',{
            GameName:data.game,
            Oponent:data.oponent,
            Challenger:data.challenger,
            Bet:data.bet
           }).then((data)=>{
             commit('Set_Challenge',data.data)
           });
         },1500)
     },
     AsyncSetUserName:({commit},data)=>{
       setTimeout(()=>{
         commit('SetUserName',data);
       },1500)
     },
     AsyncResetChallenge:({commit})=>{
       setTimeout(()=>{
         commit('ReSetChallenge')
       },1500)
     }

    },
    getters:{
      getUserName:(state)=>{
          return state.username;
      },
      getChallengeStatus:(state)=>{
         return state.ChallengeStatus;
      },
      get_challenge:(state)=>{
        console.log(state.challenge)
        return state.challenge;
      },
      get_game:(state)=>{
        console.log("askjsljk")
        console.log(state.Game)
        return state.Game;

      } ,
      get_Oponent:(state)=>{
        return state.Challenge.oponent.name;
      },

      get_Challenger:(state)=>{
        return state.Challenge.challenger;
      },
      Get_game_Challenge:(state)=>{
        return {
          game_name:state.Game.Name,
          game_image:state.Game.GameImage,
          modes:state.Game.Modes
        }
      },
      Get_c_error:(state)=>{
        return state.error;
      },

  }
}



const team = {
  namespaced: true,
  state: {
    teams: [],
    activeTeam: null,

  },
  mutations: {
    "SET_TEAM": (state, data) => {
      Vue.set(state, "activeTeam", data);
    },
    "SET_ACTIVE_TEAM": (state, data) => {
      Vue.set(state, "activeTeam", data);
    },
      },
  getters: {
    teams: (state) => {
      return state.teams;
    },
    activeTeam: (state) => {
      return state.activeTeam;
    }
  },
  actions: {
    getAllTeams: ({commit}, userId) => {

    },
    getTeam: async ({commit}, id) => {
      console.log('get team');
      const res = await api.get("/api/user/get-team/" + id)
      commit("SET_TEAM", res.data);
    },
    createTeam: ({commit, state, rootState}, payload) => {
        payload.userId = rootState.user._id;
        return new Promise ((resolve, reject) => {
          api.post("/api/user/add-team", payload)
            .then(res => {
              commit("SET_TEAM", res.data.response);
              resolve(res.data)
            })
            .catch(err => reject(err.message))
        })
    },
    updateTeam: ({commit, state, rootState}, payload) => {
      payload.userId = rootState.user._id;
      return new Promise ((resolve, reject) => {
        api.put("/api/user/update-team", payload)
          .then(res => {
            commit("SET_TEAM", res.data);
            resolve(res.data)
          })
          .catch(err => reject(err))
      })
    },
  },
}

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    user: null
  },
  getters: {
    loggedIn(state) {
      return (state.token != null);
    },
    getUserId(state) {
      console.log(state.user);
      return state.user ? state.user._id : null
    },
    getUserData(state) {
      return state.user;
    },
    // getUserAdditionalData(state) {
    //   return UserService.getAdditionalData(state.user.id);
    // }
  },
  mutations: {
    retriveToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.token = null;
    },
    'SET_PROFILE'(state, data) {
      state.user = data;
    }
  },
  actions: {
    retriveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        UserService.login(credentials)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          context.dispatch('getProfile');
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
     })
    },
    retriveTokenSocial(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post("/api/users/auth/facebook", credentials)
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        })
     })
    },
    retriveTokenMeta(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/users/auth/meta', {
          address: credentials.address
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },
    retriveTokenFB(context, credentials) {
      return new Promise((resolve, reject) => {

        axios.post('/users/auth/facebook/token', {
          email: credentials.email,
          name: credentials.name,
          id: credentials.id,
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },
    retriveTokenTwitch(context, credentials) {
      return new Promise((resolve, reject) => {

        axios.post('/api/users/auth/twitch', {
          name: credentials.name,
          email: credentials.email,
          id: credentials.id
        })
        .then(response => {
          const token = response.data.token;
          localStorage.setItem('token', token);
          context.commit('retriveToken', token);
          resolve(response);
          // console.log(response);
        })
        .catch(error => {
          // console.log(error);
          reject(error);
        })
     })
    },
    destroyToken(context) {
      axios.defaults.headers.common['Authorization'] = context.state.token;
      if (context.getters.loggedIn) {
        return new Promise((resove, reject) => {
          axios.post('/api/users/logout')
          .then(response => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            resove(response)
          })
          .catch( error => {
            localStorage.removeItem('token')
            context.commit('destroyToken')
            reject(error);
          })
        })
      }
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        UserService.register(data)
          .then(response => {
            const token = response.data.token;

            localStorage.setItem('token', token);
            context.commit('retriveToken', token);
            resolve(response);
            // console.log(response);
          })
          .catch(error => {
            console.log("error");
            reject(error);
          })
     })
    },
    async getProfile({commit, state, dispatch}) {
      console.log("getting profile");
      if(state.token){
      let res = await UserService.getProfile(state.token)
      dispatch("team/getTeam", res.data._id);
      commit("SET_PROFILE", res.data);
      } else{
        // dispatch("team/getTeam", res.data._id);
        commit("SET_PROFILE", {_id:null});
      }
      // dispatch("team/getTeam", res.data._id);
      // commit("SET_PROFILE", res.data);
    }
  },
  modules: {
    team: team,
    game: game
  }
})
