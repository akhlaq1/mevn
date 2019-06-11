<template>
  <div class="fans color" v-b-popover.hover="'View our top tournaments.'" title="Coming soon!">
		 <h4>FANS</h4>
		 <div class="bar">
		 	  <div class="uk">
			  	   <span style="color:#41c2ec">uk</span>
				   <img src="img/uk.png">
			  </div>
			  <div class="korea">
			  	   <img src="img/korea.png">
			  	   <span style="color:#fc611f">uk</span>
			  </div>
			  <div class="usa">
			  	   <span style="color:#da324b">uk</span>
			  	   <img src="img/usa.png">
			  </div>
			  <div class="other"><span style="color:#909da3">uk</span>
			  <img src="img/other.png">
			  </div>
		 </div>
		 <div class="txt">
		 	  <p>UK : 48 %</p>
			  <p>Korea : 22%</p>
			  <p>USA : 10%</p>
			  <p>Other : 20 %</p>
		 </div>
	</div>
</template>

<script>
export default {
  name: "Fans"
};
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