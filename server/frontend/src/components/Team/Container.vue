<template>
  <div class="container">
    <Raw />
    <Social />
    <Fans />
    <MainFooter style="width: 100%" />
  </div>
</template>

<script>
import Social from "./container/Social.vue";
import Raw from "./container/Raw.vue";
import Fans from "./container/Fans.vue";
import MainFooter from '@/components/MainFooter.vue';


export default {
  name: "Container",
  props: ['data'],
  components: {
    Social,
    Raw,
    Fans,
    MainFooter
  }
};
</script>
