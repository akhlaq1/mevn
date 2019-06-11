<template>
<div class="col-md-8 main-content">
      <h5 class="heading2">Your Screenshots</h5> 
      <b-card title="MOBA">
    <b-button @click="openLightbox" variant="primary">DotA 2</b-button>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="dota2images"
      @change="changeImage"
      >
             
    </vue-image-lightbox-carousel>
     &nbsp; 
     <b-button @click="openLightbox" variant="primary">LoL</b-button>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="lolimages"
      @change="changeImage"
      >
    </vue-image-lightbox-carousel>
   &nbsp; 
     <b-button @click="openLightbox" variant="primary">HoN</b-button>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="honimages"
      @change="changeImage"
      >
    </vue-image-lightbox-carousel>
      </b-card>
         <b-card title="FPS">
    <b-button @click="openLightbox" variant="primary">PUBG</b-button>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="pubgimages"
      @change="changeImage"
      >
</vue-image-lightbox-carousel>
     &nbsp; 
              <b-button @click="openLightbox" variant="primary">Paladins</b-button>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="paladinsimages"
      @change="changeImage"
      >

    </vue-image-lightbox-carousel>
     &nbsp; 
     <b-button @click="openLightbox" variant="primary">CS:GO</b-button>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="csgoimages"
      @change="changeImage"
      >
    </vue-image-lightbox-carousel>
   &nbsp; 
     <b-button @click="openLightbox" variant="primary">Overwatch</b-button>
    <vue-image-lightbox-carousel
      ref="lightbox"
      :show="showLightbox"
      @close="showLightbox = false"
      :images="overwatchimages"
      @change="changeImage"
      >
    </vue-image-lightbox-carousel>
      </b-card>
      <b-button href="#/screenshots/form" block size="lg">Upload Screenshot</b-button>
  </div>
</template>
 
<script>
import VueImageLightboxCarousel from 'vue-image-lightbox-carousel'
 
export default {
  name: 'app',
  data () {
    return {
      showLightbox: false,
      dota2images: [
        {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ],
      honimages: [
        {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ],
       lolimages: [ 
        {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ],
      pubgimages: [
        {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ],
      paladinsimages: [ {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ],
        csgoimages: [ {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ],
        overwatchimages: [ {
          path: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg',
          caption: 'Elephant',
        },
        {
          path: 'https://i-thethao.vnecdn.net/2018/05/27/000-15E0FA-1527377507_680x0.jpg',
          caption: 'Kiss',
        },
      ],
    }
  },
  components: {
    VueImageLightboxCarousel
  },
  methods: {
    openLightbox () {
      this.showLightbox = true
      this.$refs.lightbox.showImage(1)
    },
    changeImage (index) {
      console.log(index)
    }
  }
}
</script> 
<style lang="css" scoped>
</style> 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> 