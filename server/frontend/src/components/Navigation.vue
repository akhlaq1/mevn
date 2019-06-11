<template>
     <b-navbar toggleable="md" type="dark" variant="dark" sticky="true">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/">Home</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>

     <b-nav-item ><router-link to="#" > Players</router-link></b-nav-item>
     <b-nav-item ><router-link to="#" > Clubs</router-link></b-nav-item>
     <b-nav-item ><router-link to="#" > Managers</router-link></b-nav-item>
     <b-nav-item ><router-link to="#" > Coaches</router-link></b-nav-item>
     <b-nav-item ><router-link to="#" > Sponsors</router-link></b-nav-item>
     <b-nav-item ><router-link to="#" > Analysers</router-link></b-nav-item>
     <b-nav-item ><router-link to="#" > Mentors</router-link></b-nav-item>
   
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
      </b-nav-form>

      <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item ><router-link to="#" > EN</router-link></b-dropdown-item>
        <b-dropdown-item ><router-link to="#" > ES></router-link></b-dropdown-item>
        <b-dropdown-item ><router-link to="#" > RU</router-link></b-dropdown-item>
        <b-dropdown-item ><router-link to="#" > FA</router-link></b-dropdown-item>
      </b-nav-item-dropdown>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>User</em>
        </template>
          <b-dropdown-item > <router-link to="/#/inbox" > Inbox</router-link></b-dropdown-item>
        <b-dropdown-item ><router-link to="/#/account" >Account</router-link></b-dropdown-item>
        <b-dropdown-item ><router-link to="/profile#/portfolio" > Profile</router-link></b-dropdown-item>
        <b-dropdown-item ><router-link to="/#/logout" >Signout</router-link></b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>

</template>
<script>
export default {
  name: 'Navigation',
}

</script>
<style>
#navbar {
  overflow: hidden;
  background-color: #333;
}

/* Navbar links */
#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}
/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}