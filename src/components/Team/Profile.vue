<template>
	<div class="profile" v-if="team">
		<div style="position: absolute; right: 10px; top: 10px"><i @click="$root.$emit('openDialog', 'EditTeamDetail')" style="font-size: initial" class="fa fa-pencil"></i></div>
		<div class="img" :style="{'background-image' : 'url(' + team.coverImg + ')'}">
	   		
		</div>
		<div class="txt">
				<ul>
				<li>{{team.teamName || '------'}}</li>
				<li>Founded :  <span style="color:#22afdd"> {{team.createdAt.replace(/^([0-9]*)(.*)/, '$1') || '------'}}</span></li>
				<li>Location : <span style="color:#22afdd"> {{team.location || '-------'}}</span></li>
			</ul>
				<ul>
				<li>Owner : {{team.ownerName || '------'}}</li>
				<li>Latest Badge : <span style="color:#22afdd"> Gold Medal</span></li>
				<li><a class="link-blue" href="#">Become a member</a></li>
			</ul>	   
		</div>
		  	   
   <div class="pro_img">
	   		<center><b-img rounded="circle" :src="team.profileImg" width="200" height="200" blank-color="#777" alt="img" class="m-1" /></center>
	   </div> 
	   </div> 
  	
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
	name: "Profile",
	computed: {
		...mapGetters({
			team: 'team/activeTeam'
		})

	},
	methods: {
		setLoad() {
		
		}
},
}

</script>
