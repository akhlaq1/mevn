<template>
        <div class="row">
                <div class="col-md-12 pl-0 pr-0">
                        <h5 class="heading">Sponsors
                                <switches style="vertical-align: middle; float: right; margin-right: 60px" v-model="enabled"
                                        theme="bootstrap" color="success"></switches>
                                <i v-if="data.is_private" @click="showModal(false,'Add Sponsor')" class="fa fa-plus fa-1x"></i>  
                        </h5>
                        <div class="sponsors">
                                <flickity :options="{ initialIndex: Math.floor( (data.sponsors.length -1 ) / 2)}" ref="flickity-sponsors" v-if="data.sponsors && data.sponsors.length > 0">
                                        <div class="carousel-cell gallery-cell" v-for="(item, key) of data.sponsors" :key="key" >
                                                <img :src="item.picture" alt="" style="height: 80px;">
                                                <i v-if="data.is_private" @click="showModal(key, 'Edit Sponsor')" class="fa fa-pencil fa-1x update-team " ></i>
                                                <i v-if="data.is_private" @click="showDeleteSponsorModal(true,key)" class="fa fa-trash fa-1x delete-team " ></i>
                                        </div>
                                </flickity>
                                <div class="disabled-overlay" v-if="enabled == false"></div>
                        </div>
                </div>
    <b-modal ref="sponsorModal" id="modal1" :title="title" hide-footer>
        <EditSponsor  :request="(Object.keys(this.data).length === 0) ? 'post' : 'put'" @submit="closeModal" :index="editItem"
        :data="data.sponsors ? data.sponsors : []" />
    </b-modal>

        <b-modal ref="deleteSponsorModal" id="modal3" title="Delete Sponsor"  hide-footer>
        <div>
          <b-form @submit.prevent="submit($event)">
              <div>Are you sure to delete the sponsor?</div> 
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
import Switches from 'vue-switches';
import EditSponsor from '@/components/forms/EditSponsor';
import Flickity from 'vue-flickity';
import api from "@/services/RestService";
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Sponsors',
    components: {
            Switches,
            EditSponsor,
            Flickity
    },
    props: ['data'],
    data() {
            return {
                    title:'',
                    load:true,
                    enabled: true,
                    editItem: false
            }
    },
        methods: {
                ...mapGetters({
                        getUserId: "getUserId"
                }),
                showModal(edit = false, title) {
                        this.title = title
                        this.editItem = edit;
                        this.$refs.sponsorModal.show();
                },
                closeModal() {
                if (this.editItem !== false)
                        this.$emit("refresh");
                this.$refs.sponsorModal.hide();
                        this.$emit("refresh");
                },

                showDeleteSponsorModal(current,key) {
                        event.stopPropagation(); 
                        this.deleteSponsorIndex = key;
                        this.$refs.deleteSponsorModal.show();
                },
                closedeleteSponsorModal(res){
                        this.$refs.deleteSponsorModal.hide();
                },
                async submit(evt) {
                        let that = this;
                        this.load = true;
                        let dat = this.data.sponsors.splice(this.deleteSponsorIndex,1)
                        let payload = {};
                        payload.userId = this.getUserId();
                        payload['sponsors'] = [ ...this.data.sponsors];
                        api.put("/api/users/update-detail", payload).
                        then(res => {that.load = false; 
                        this.$emit("refresh");
                        // that.$emit("submit", res.data)
                        this.closedeleteSponsorModal()
                        })
                        .catch(err => console.log(err))
                }
        }
}
</script>

<style>
  .brands-list {
    position: relative;
  }
  .disabled-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
  }
</style>
