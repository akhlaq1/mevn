<template>
  <div v-bind:class="{ responsive: isOpen, topnav: true }" id="myTopnav">
  	    <a href="#home" class="active">Management </a>
  		<a href="#news">Staff </a>
  		<a href="#contact">Members</a>
  		<a href="#about">WGT VIPS </a>
  		<a href="#contact">Sponsors</a>
  		<a href="#about">Tickets</a>
		<a href="#about">Stats</a>  		 
		<a href="javascript:void(0);" class="icon" v-on:click="handleShowNav">
    	 ☰
 		  </a>
 	</div>

</template>

<script>
export default {
  name: "TopNav",
  data: function() {
    return {
      isOpen: false,
      staticClass: "topnav"
    };
  },
  methods: {
    handleShowNav: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
