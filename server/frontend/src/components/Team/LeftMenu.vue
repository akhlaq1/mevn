<template>
<div>
  <div class="main_menu">
  	   <a href="/">Home</a>
  	   <a href="">Team History</a>
  	   <a href="/screenshots">ScreenShot</a>
  	   <a href="#">Stream</a>
  	   <a href="#">Stats</a>
  	   <a href="#">Schedule</a>
  	   <a href="#">Managers</a>
  	   <a href="#">Interviews</a>
	   <a href="#">Videos</a>
	   <a href="#">Gallery</a>
	   <a href="#">Interviews</a>
	   <a href="#">Online / LAN </a>
	   <a href="#">Matches</a>
	   <a href="#">Tournaments</a>
	   <a href="#">Connect</a>
  </div>
  <div class="res_menu">
    <div id="mySidenav"  v-bind:class="{ sidenav: true, open: isOpen }">
    <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav">×</a>
        <a href="#">Home</a>
        <a href="#">Team History</a>
        <a href="#">ScreenShot</a>
        <a href="#">Stream</a>
        <a href="#">Stats</a>
        <a href="#">Schedule</a>
        <a href="#">Managers</a>
        <a href="#">Interviews</a>
      <a href="#">Videos</a>
      <a href="#">Gallery</a>
      <a href="#">Interviews</a>
      <a href="#">Online / LAN </a>
      <a href="#">Matches</a>
      <a href="#">Tournaments</a>
      <a href="#">Connect</a>
    </div>
    <div v-on:click="openNav" class="icon-bar">
      <span>Menu</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "LeftMenu",
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    openNav: function() {
      this.isOpen = true;
    },
    closeNav: function() {
      this.isOpen = false;
    }
  }
};
</script>
