<template>
    <!-- <div class="row profile" -->
    <!-- :style="{'background-image':'url('+data.coverPhoto+')'}" -->
     <!-- > -->
      <div class="profile"
     >
            <div class="row">
                <div class="col-md-12">
                    <img style="height:150px;width:100%;object-fit:cover"  :src="data.coverPhoto ? data.coverPhoto : 'img/coverPhoto.jpg'"  />
                </div>
            </div>
        <!-- <div class="padding-15" > -->
        
    <div class="padding-15" >
            <div class="row">
                <div class="col-md-2 person">
                <img class="floating-img" :src="data.profilePic ? data.profilePic : 'img/profile.png'" alt="Hero">
        </div>
        <div class="col-md-10">
            <div class="row">

                <div class="col-md-6 text-left">
                    <h5 class="inline-profile" ><div class="width-10">Name :</div> <div class="sky-blue">{{data.name ? data.name : "Not available"}}</div></h5>
                    <h5 class="inline-profile"><div class="width-10">Age : </div> <div class="sky-blue">{{data.age ? data.age : "Not available"}}</div></h5>
                    <h5 class="inline-profile"><div class="width-10">Favourite Role :</div> <div class="sky-blue">{{data.favRole ? data.favRole : "Not available"}}</div></h5>
                    <!-- <h5>Alternative ID :<span class="sky-blue">CAT / TOKO</span></h5> -->
                </div>
                <div class="col-md-6 text-left">
                    <h5>Description:</h5>
                    <p class="bio">{{data.UserFulldescription ? data.UserFulldescription : " Not available"}}</p>
                    <div v-if="data.is_private" >
                        <b-form style="margin-left:0px" @submit.prevent="updatePortfolioUrl">
                            <b-input-group
                                class="mb-3"
                            >
                                <b-form-input id="PortfolioUrl"
                                                type="text"
                                                v-model="usr.portfolioUrl"
                                                placeholder="Portfolio Url"
                                                ></b-form-input>
                                <b-input-group-append>
                                <b-button size="sm" type="submit" text="Button" variant="success">Save Portfolio-Url</b-button>
                                </b-input-group-append>
                            </b-input-group>
                        </b-form>
                    </div>
                </div>
             
            </div>
            <i v-if="data.is_private" @click="showModal" class="fa fa-pencil fa-1x"></i>
        </div>
        </div>
        </div>
        <div>

        <!-- Modal Component -->
        <b-modal ref="modal1" id="modal1" title="Edit Profile" hide-footer>
            <EditProfile @submit="closeModal" :data="Object.keys(data).length == 0? {} : data" />
        </b-modal>
        </div>
    </div>
</template>

<script>
import EditProfile from '@/components/forms/EditProfile';
import UserService from '@/services/UserService';
import { mapGetters, mapActions } from "vuex";
import router from 'vue-router';
import api from "@/services/RestService"

export default {
    name: 'UserProfile',
    components: {
        EditProfile
    },
    props: ["data","user"],
    computed: {
        fields() {
            return this.newData || this.data;
        }
    },
    data()  {
        return {
            showLoading: true,
            newData: '',
            usr:{}
        }
    },
    updated(){
        // this.portfolioUrl = this.user.portfolioUrl
        console.log(this.data)
    },
    methods: {
        showModal() {
            this.$refs.modal1.show();
        },
        async closeModal(obj) {
            this.newData = {...(obj.response || obj)};
            this.$refs.modal1.hide();
            this.$emit("refresh");
        },
        async updatePortfolioUrl(){
            let usr
            usr = await api.put(`/api/users/portfolioUrl/${this.user._id}`,{"portfolioUrl":this.usr.portfolioUrl});
            this.usr = usr.data
            this.$router.replace({ name: "portfolio", params: {username:this.usr.portfolioUrl}})
        }
    },
    watch: {
        data(){
            this.usr = this.user;
        }
  }
}
</script>

<style>
    .profile {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        padding: 0 !important; 
        margin-left: -15px;
        margin-right: -15px

    }
    /* It's overwriting the style in app.scss */
    .bio {
        font-size: 14px;
        /* padding-top: 20px; */
        padding-bottom: 10px;
    }
    .padding-15{
        padding: 15px;
        width: 100%;
    }
    .floating-img{
        width: 150px;
        height: 150px;
        border-radius: 150px;
        position: absolute;
        left: 20px;
        top: -75px;
    }
    #modal1 {
        color: black;
    }
    header {
        margin-top: 0px;
    }
</style>
