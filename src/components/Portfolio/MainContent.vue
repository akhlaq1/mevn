<template>
  <div class="col-md-8 main-content">
    <div class="row">
      <div class="col-md-6">
        <h5 class="heading">Current Teams</h5>
        <i v-if="data.is_private" @click="showTeamModal(true,false,false)" class="fa fa-plus fa-1x"></i>
          <template v-if="data.currentTeam && data.currentTeam.length > 0">
            <div class="current-team">
              <flickity  :options="{ initialIndex: Math.floor(this.data.currentTeam.length - 1 ) / 2 }"  ref="flickity" >
                <div class="carousel-cell" v-for="(item, key) of data.currentTeam" :key="key" >
                  <img :src="item.imgPath ? item.imgPath : 'img/team.png'" alt="Photo not found">
                  <h5>{{item.name}}</h5>
                  <i v-if="data.is_private" @click="showTeamModal(true, true, key)" class="fa fa-pencil fa-1x update-team " ></i>
                  <i v-if="data.is_private" @click="showDeleteTeamModal(true,key)" class="fa fa-trash fa-1x delete-team " ></i>
                </div>
              </flickity>
            </div>
          </template>
          <template v-else>
            <img  class="radius-50-cent height-90 " src="img/team.png" alt="Photo not found">
            <div class="text-white margin-top-10" >My Team</div>
          </template>    
      </div>
      <div class="col-md-6">
        <h5 class="heading">Past Teams</h5>
        <i v-if="data.is_private" @click="showTeamModal(false,false, false)" class="fa fa-plus fa-1x"></i>
          <template v-if="data.pastTeam && data.pastTeam.length > 0">
            <div class="current-team">
              <flickity :options="{ initialIndex: Math.floor(this.data.pastTeam.length - 1 ) / 2 }" ref="flickity-pastteam" >
                <div class="carousel-cell gallery-cell" v-for="(item, key) of data.pastTeam" :key="key" >
                  <img :src="item.imgPath ? item.imgPath : 'img/team.png'" alt="Team 1">
                  <h5>{{item.name}}</h5>
                  <i v-if="data.is_private" @click="showTeamModal(false,true, key)" class="fa fa-pencil fa-1x update-team " ></i>
                  <i v-if="data.is_private" @click="showDeleteTeamModal(false,key)" class="fa fa-trash fa-1x delete-team " ></i>
                  <!-- <i @click="showTeamModal(false,false, false)" class="fa fa-plus fa-1x"></i> -->
                </div>
              </flickity>
            </div>
          </template>
          <template v-else>
            <img class="radius-50-cent height-90" src="img/team.png" alt="Photo not found">
            <div class="text-white margin-top-10" >My Team</div>
          </template>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" style="margin-bottom:30px" >
        <h5 class="heading" >Badges</h5>
        <flickity ref="flickity" class="height-126" :options="flickityOptions">
            <div class="carousel-cell">
              <img src="img/badges1.png" alt="">
            </div>
            <div class="carousel-cell">
              <img src="img/badges2.png" alt="">
            </div>
            <div class="carousel-cell">
              <img src="img/badges3.png" alt="">
            </div>
            <div class="carousel-cell">
              <img src="img/badges4.png" alt="">
            </div>
        </flickity>
        <!-- <h5 class="heading">Badges</h5>
          <flickity  :options="flickityOptions" class="badges" ref="flickity">
            <div class="carousel-cell gallery-cell">
              <img src="img/badges1.png" alt="">
            </div>
            <div class="carousel-cell gallery-cell">
              <img src="img/badges2.png" alt="">
            </div>
            <div class="carousel-cell gallery-cell">
              <img src="img/badges3.png" alt="">
            </div>
            <div class="carousel-cell gallery-cell">
              <img src="img/badges4.png" alt="">
            </div>
          </flickity> -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 ">
        <h5 class="heading" >Acheivements</h5>
        <i v-if="data.is_private" @click="showAchievementModal(false, false)" class="fa fa-plus fa-1x"></i>
        <template v-if="data.acheivements && data.acheivements.length > 0"> 
          <div class="achivements">
            <flickity ref="flickity" :options="{ initialIndex: Math.floor( (data.acheivements.length - 1 ) / 2) }"  >
              <div class="carousel-cell gallery-cell"  @click="showAchievementModal(index,true)" v-for="(item, index) of data.acheivements" :key="index">
                <img :src="item.imgPath" alt="" style="height:80px" >
                <h5 class="rank">{{item.acheivementName}}</h5>
                <h5>{{(item.dateOfAcheivement.split('T'))[0]}}</h5>
                <h5>{{item.venueOfAcheivemnet}}</h5>
                <i v-if="data.is_private" @click="showDeleteAcheivementModal(true,key)" class="fa fa-trash fa-1x delete-team " ></i>

              </div>
            </flickity>
          </div>
        </template>
        <template v-else>
            <img class="radius-50-cent height-90" src="img/star.png" alt="Photo not found">
            <h5 class="rank">My Acheivement</h5>
            <h5>My Venue</h5>
            <h5>31/12/2012</h5>
        </template>

      </div>
    </div>
    <div class="row" >
      <div class="col-md-6 color" v-b-popover.hover="'View our top tournaments.'" title="Coming soon!">
        <h5 class="heading">Raised</h5>
        <div class="row t m-0">
          <div class="col-6 p-0">
            <h5>H2H</h5>
            <h5>783,450 WGT</h5>
            <h5 class="percentage">(30%)</h5>
            <a class="btn fund" href="#">Fund</a>
          </div>
          <div class="col-6 p-0">
            <h5>Tournaments</h5>
            <h5>1,000,000 WGT</h5>
            <h5 class="percentage">(25%)</h5>
            <a class="btn fund" href="#">Fund</a>
          </div>
        </div>
        <div class="row m-0">
          <div class="col-12 next-match">
            <h5>Next Match CS : GO 18 / 08 / 18
              <a class="btn btn-sm btn-more" href="#">More</a>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-md-6 color" v-b-popover.hover="'View popular prize pools.'" title="Coming soon!">
        <h5 class="heading">Vote</h5>
        <div class="vote">
          <ol>
            <li>
              <span>Summer Hit 5 Millon Prze Pool</span>
              <p class="like float-right">
                <i class="fa fa-thumbs-up"></i> 7k</p>
            </li>
            <hr>
            <li>
              <span>Tour De france 2 Millon Prze Pool</span>
              <p class="like float-right">
                <i class="fa fa-thumbs-up"></i> 5.1k</p>
            </li>
            <hr>
            <li>
              <span>Euro Cup CS : GO 1 Millon Prze Pool</span>
              <p style="padding-top: 5px" class="like float-right">
                <i class="fa fa-thumbs-up"></i> 4.1k</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
    <!-- Modal Component -->
    <b-modal ref="teamModal" id="modal1" :title="teamToEdit.title" hide-footer>
      <EditTeam @submit="closeTeamModal" :type="teamToEdit.type"
        :data="teamToEdit.data" :team="editTeamItem" />
    </b-modal>
    <b-modal ref="achievementModal" id="modal2" :title="title" hide-footer>
      <EditAchievement :request="(Object.keys(this.data).length == 0) ? 'post' : 'put'" @submit="closeAchievementModal" :index="editAchievementItem"
        :data="data.acheivements ? data.acheivements : []" />
    </b-modal>

    <b-modal ref="deleteTeamModal" id="modal3" title="Delete Team"  hide-footer>
      <DeleteTeam @submit="closeDeleteTeamModal"
        :type="teamToDelete.type"
        :data="teamToDelete.data"
        :team="deleteTeamIndex" />
    </b-modal>
        <b-modal ref="deleteAcheivementModal" id="modal3" title="Delete Acheivement"  hide-footer>
        <div>
          <b-form @submit.prevent="submit($event)">
              <div>Are you sure to delete the acheivement?</div> 
            <div style="margin-top: 20px; text-align: right">
              <div v-if="load" class="lds-ring"><div></div><div></div><div></div><div></div></div>
              <b-button type="submit" variant="danger">Delete</b-button>
            </div>
          </b-form>
        </div> 
    </b-modal>
  </div>

</template>

<script>
import DeleteTeam from '@/components/forms/deleteTeam';
import EditTeam from '@/components/forms/EditTeam';
import EditAchievement from '@/components/forms/EditAchievement';
import UserService from '@/services/UserService';
import {
  mapGetters,
  mapActions
} from "vuex";
import api from "@/services/RestService"
import Flickity from 'vue-flickity';

export default {
  name: 'MainContent',
  components: {
    EditTeam,
    EditAchievement,
    Flickity,
    DeleteTeam
  },
  props: ["data"],
  data() {
    
    return {
      flickityOptions: {
        initialIndex: Math.floor(4/2) - 1,
        pageDots: true,
      },
      title:'',
      load:'',
      teamToEdit: "",
      editTeamItem: false,
      teamToDelete: "",
      deleteAcheivementIndex:'',
      deleteTeamIndex:false,
      editAchievementItem: false,
      modalComponent: EditTeam
    }
  },
  created(){
    console.log(this.data)
    console.log('get')
  },
  computed: {
    fields() {
      return this.newData || this.data;
    }
  },
  methods: {
        showDeleteAcheivementModal(current,key) {
      event.stopPropagation(); 
      this.deleteAcheivementIndex = key;
      this.$refs.deleteAcheivementModal.show();
    },
    closedeleteAcheivementModal(res){
        this.$refs.deleteAcheivementModal.hide();
    },
    async submit(evt) {
      let that = this;
      this.load = true;
      console.log(this.data)
      let dat = this.data.acheivements.splice(this.deleteAcheivementIndex,1)
      let payload = {};
        payload.userId = this.getUserId();
        payload['acheivements'] = [ ...this.data.acheivements];
        api.put("/api/users/update-detail", payload).
        then(res => {that.load = false; 
          this.$emit("refresh");
          // that.$emit("submit", res.data)
          this.closedeleteAcheivementModal()
        })
        .catch(err => console.log(err))
    },
    showTeamModal(current = true, edit = false, key = false) {
      let title='';
      let request= '';
      if(edit){
        title ="Edit Team";
        request = 'put';
      } else {
        title ="Add Team"
        request = 'post';

      }
      this.teamToEdit = current ? {
        data: this.data.currentTeam,
        type: 'currentTeam',
        title: title,
      } : {
        data: this.data.pastTeam,
        type: 'pastTeam',
        title: title,
        key: key
      };
      this.editTeamItem = key;
      this.$refs.teamModal.show();
    },
    showDeleteTeamModal(current,key) {
    
      event.stopPropagation(); // let title='';
      this.teamToDelete = current ? {
        data: this.data.currentTeam,
        type: 'currentTeam',
      } : {
        data: this.data.pastTeam,
        type: 'pastTeam',
      };
      this.deleteTeamIndex = key;
      this.$refs.deleteTeamModal.show();
    },
    closeDeleteTeamModal(res){
      if (this.deleteTeamIndex !== false)
        this.$emit("refresh");
        this.$refs.deleteTeamModal.hide();
        this.$emit("refresh");
    },
    closeTeamModal(res) {
      if (this.editTeamItem !== false)
        this.$emit("refresh");
      this.$refs.teamModal.hide();
        this.$emit("refresh");
    },
    showAchievementModal(acheivementIndex, edit) {
      if(edit){
        this.title= "Edit Acheivement"
      } else{
        this.title= "Add Acheivement"
      }
      this.editAchievementItem = acheivementIndex;
      this.$refs.achievementModal.show();
    },
    closeAchievementModal() {
      if (this.editAchievementItem !== false)
        this.$emit("refresh");
      this.$refs.achievementModal.hide();
        this.$emit("refresh");
    }
  }
}
</script>

<style>
.color div{
filter: grayscale(100%);
-webkit-filter: grayscale(100%);
-webkit-transition: all 1s ease;
}

.color div:hover{
filter: grayscale(0%);
filter: gray;
-webkit-filter: grayscale(0%);
filter: none;
transition: 1s ease;
}
</style>
