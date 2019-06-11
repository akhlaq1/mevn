<style scoped>
@font-face {
  font-family: "Esports";
  src: url("/css/fonts/EsportsFont.ttf");
}

#GameNav {
  display: inline-block;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

i {
  font-family: "Esports";
  font-size: 1.7em;
  margin-left: 50%;
  color: #007bff;
}

i:hover {
  color: gray;
  cursor: pointer;
}

i:active {
  color: red;
}

a {
  text-decoration: none !important;
}
</style>


<template>
  <div class="row">
    <nav
      id="GameNav"
      class="navbar navbar-expand navigation mt-5 bg-dark navbar-dark justify-content-center mx-auto"
    >
      <!-- Brand -->
      <!-- <router-link class="navbar-brand" to="#">Navbar</router-link> -->
      <!-- Toggler/collapsibe Button -->
      <!-- Navbar links -->
      <ul class="navbar-nav p-1">
        <li class="nav-item">
          <i class="flaticon-a"></i>
        </li>
        <li class="nav-item">
          <i class="flaticon-b"></i>
        </li>
        <li class="nav-item">
          <router-link to="/dota2search">
            <i class="flaticon-c"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <i class="flaticon-d"></i>
        </li>
        <li class="nav-item">
          <i class="flaticon-e"></i>
        </li>
        <li class="nav-item">
          <i class="flaticon-f"></i>
        </li>
        <li class="nav-item">
          <i class="flaticon-g"></i>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: "GameNavigation",
  beforeMount() {
    var this_ = this;
    let AddStyle = document.createElement("link");
    AddStyle.type = "text/css";
    AddStyle.rel = "stylesheet";
    AddStyle.to = "css/EsportsFont.css";
    AddStyle.id = "auth";
    document.head.appendChild(AddStyle);
  }
};
</script>
