<template>
  <div>
    <button @click="show = true">Show</button>
    <ModalFullScreen :show="show" v-on:show="handleShow">
      <template slot="header">
        header
      </template>

      <template slot="body">
        <div v-for="n in 1000" :key="n">
          Body {{ n }}
        </div>
      </template>

      <template slot="footer">
        <button @click="show = false">Close</button>
      </template>
    </ModalFullScreen>
  </div>
</template>

<script>
  import ModalFullScreen from '../App.vue'

  export default {
    components: {
      ModalFullScreen
    },

    data () {
      return {
        bodyText: 'Lorem Ipsum',
        show: true
      }
    },

    methods: {
      handleShow (show) {
        alert(`show: ${show}`)
      }
    }
  }
</script>
