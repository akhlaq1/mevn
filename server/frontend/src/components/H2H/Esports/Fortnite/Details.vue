<template>
 <div class="col-md-8 main-content">
  
     <b-container class="bv-example-row">
  <b-row>
    <b-col><div style="text-align: left">
<img style="text-align: left; width: 150px; height: 150px; border-radius: 150px" :src="fields.profilePic ? fields.profilePic : 'images/fortnite.jpg'" alt="Hero">
   </div></b-col>
<b-col><h5 style="color: white; font-size: 18px;"><b>Fortnite</b></h5>
    <h5 style="color: grey; font-size: 16px;">Battle Royale</h5>
<h5 style="color: skyblue; font-size: 16px;">Epic Games</h5>
<h5 style="color: skyblue; font-size: 14px;"><b-badge variant="danger">18+</b-badge></h5>
</b-col> 
    <b-col></b-col>
<b-col></b-col>
  </b-row>
</b-container>

<p class="detail" style="color: white; text-align: left; font-size: 16px;">Average Rating: <span class="detail" style="color: white; text-align: left; font-size: 20px;"> <b-badge pill variant="primary"> 4.5/5</b-badge></span>
</p> 
<h5 class="heading-90"><div class="online2"/>&nbsp; 0 players online</h5>
  <p style="color: white; text-align: left; font-size: 16px;">Price: 
 <span style="color: grey;" class="name">
 Free
 </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">Direct Download Link: 
 <span style="color: grey;" class="name">
https://www.epicgames.com/fortnite/en-US/download
 </span></p>
     <p style="color: white; text-align: left; font-size: 16px;">Compatibility: 
 <span style="color: grey;" class="name">
PC only.
 </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">Minimum Requirements: 
 <span style="color: grey;" class="name">
CPU: Core i3 2.4 Ghz
CPU SPEED: Info
RAM: 4 GB
OS: Windows 7/8/10 64-bit
VIDEO CARD: Intel HD 4000
PIXEL SHADER: 3.0
VERTEX SHADER: 3.0
 </span></p>
  <p style="color: white; text-align: left; font-size: 16px;">Recommended Requirements: 
 <span style="color: grey;" class="name">
CPU: Core i5 2.8 Ghz
CPU SPEED: Info
RAM: 8 GB
OS: Windows 7/8/10 64-bit
VIDEO CARD: Nvidia GTX 660 or AMD Radeon HD 7870 equivalent DX11 GPU
PIXEL SHADER: 5.0
VERTEX SHADER: 5.0
DEDICATED VIDEO RAM: 2048 MB
 </span></p>
   <p style="color: white; text-align: left; font-size: 16px;">Description: 
 <span style="color: grey;" class="name">
Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine: Fortnite: Save the World, a cooperative shooter-survival game for up to four players to fight off zombie-like creatures and defend objects with fortifications they can build, Fortnite Battle Royale, a free-to-play battle royale game where up to 100 players fight to be the last person standing, and Fortnite Creative, where players are given complete freedom to create worlds and battle arenas. The first two game modes were released in 2017 as early access titles and Creative was released on December 6, 2018. Save the World is available only for Windows, macOS, PlayStation 4, and Xbox One, while Battle Royale has been released for those platforms in addition for Nintendo Switch, iOS and mobile devices.
 </span></p>



  <b-button block variant="success">View Tournaments</b-button>

  



  

            </div>
          
  
     

        <!-- Modal Component -->
       
  
  
</template>
<style>

  .heading-90 {
    background-color: #222222;
    color: #fff;
    padding: 10px 0 10px 0px;
    width: 100%;
    text-align: center; }

    .online2 {
    height: 15px;
    width: 15px;
    background-color: #23dd2c;
    border-radius: 50%;
    display: inline-block;
    
}

    .offline2 {
    height: 15px;
    width: 15px;
    background-color: #ff0000;
    border-radius: 50%;
    display: inline-block;
    
}
</style>

