<template>
  <div class="row switch-container">
    <div class="col-md-12 pl-0 pr-0">
      <h5 class="heading">Brands
      <switches style="vertical-align: middle; float: right; margin-right: 60px" v-model="enabled"
      theme="bootstrap" color="success"></switches>
      <i v-if="data.is_private" @click="showModal(false, 'Add Brand')" class="fa fa-plus fa-1x"></i>  
      </h5>
      <template v-if="data.brands && data.brands.length > 0" >
      <div class="sponsors">
        <flickity :options="{ initialIndex: Math.floor( (data.brands.length -1 ) / 2) }" ref="flickity-brand" v-if="data.brands && data.brands.length > 0">
          <div style="color: white; display: flex; flex-direction: column; align-items: center" class="carousel-cell gallery-cell" v-for="(item, key) of data.brands" :key="key" >
            <p>{{item.name}}</p>
            <img :src="item.picture" alt="t shirt" style="height: 70px">
            <p class="mt-3">{{item.price}} WGT</p>
            <a class="btn buy_now" :href="item.link" style="background-color: white">Buy Now </a>
              <i v-if="data.is_private" @click="showModal(key, 'Edit Brand')" style="margin-top:25px" class="fa fa-pencil fa-1x update-team " ></i>
              <i v-if="data.is_private" @click="showDeleteBrandModal(true,key)" style="margin-top:25px" class="fa fa-trash fa-1x delete-team " ></i>
          </div>
        </flickity>
        <div class="disabled-overlay" v-if="enabled == false"></div>
      </div>
      </template>
    </div>
    <b-modal ref="brandModal" id="modal1" :title="title" hide-footer>
        <EditBrand    :request="(Object.keys(this.data).length == 0) ? 'post' : 'put'" @submit="closeModal" :index="editItem"
        :data="data.brands ? data.brands : []" />
    </b-modal>

    <b-modal ref="deleteBrandModal" id="modal3" title="Delete Brand"  hide-footer>
        <div>
          <b-form @submit.prevent="submit($event)">
              <div>Are you sure to delete the brand?</div> 
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
import EditBrand from '@/components/forms/EditBrand';
import DeleteBrand from '@/components/forms/deleteBrand';
import Flickity from 'vue-flickity';
import api from "@/services/RestService"
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Brands',
  components: {
    Switches,
    EditBrand,
    DeleteBrand,
    Flickity
  },
  props: ['data'],
  data() {
    return {
      title:'',
      brandToDelete:"",
      deleteBrandIndex:"",
      enabled: true,
      load:true,
      editItem: false
    }
  },
  methods: {
    ...mapGetters({
        getUserId: "getUserId"
    }),
    showModal(edit,title) {
      this.title = title
      this.editItem = edit;
      // alert(edit)
      this.$refs.brandModal.show();
    },
    closeModal() {
      if (this.editItem !== false)
        this.$emit("refresh");
      this.$refs.brandModal.hide();
        this.$emit("refresh");
    },
    showDeleteBrandModal(current,key) {
      event.stopPropagation(); 
      this.deleteBrandIndex = key;
      this.$refs.deleteBrandModal.show();
    },
    closedeleteBrandModal(res){
        this.$refs.deleteBrandModal.hide();
    },
    async submit(evt) {
      let that = this;
      this.load = true;
      let dat = this.data.brands.splice(this.deleteBrandIndex,1)
      let payload = {};
        payload.userId = this.getUserId();
        payload['brands'] = [ ...this.data.brands];
        api.put("/api/users/update-detail", payload).
        then(res => {that.load = false; 
          this.$emit("refresh");
          // that.$emit("submit", res.data)
          this.closedeleteBrandModal()
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
