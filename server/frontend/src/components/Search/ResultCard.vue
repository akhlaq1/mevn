<template>
  <b-card no-body class="full-width" bg-variant="dark" text-variant="white" align="left">
    <b-container fluid>
      <b-row>
        <b-col cols="3" class="dark-bg">
          <b-row class="mt-3" align-h="center">
            <img src="/img/user.png" width="128" height="128" draggable="false">
          </b-row>
          <b-row class="mt-2 mb-3" align-h="center">
            <div class="skill-level-circle mt-2" v-b-tooltip.hover title="skill level">
              <span class="skill-level-text">{{skill}}</span>
            </div>
          </b-row>
        </b-col>
        <b-col class="ml-3" cols="8">
          <b-card-body>
            <b-row>
              <a class="username" href="#">{{username}}</a>
            </b-row>
            <b-row class="mt-4" align-v="center">
              <b-col cols="3">
                <p class="role">Main</p>
              </b-col>
              <b-col>
                <b-row>
                  <div v-if="main && main.includes('carry')">
                     <b-badge pill href="#" variant="primary">Carry</b-badge>
                     <hr>
                  </div>
                  <div v-if="main && main.includes('support')">
                     <b-badge pill href="#" variant="primary">Support</b-badge>
                  </div>
                  <div v-if="main && main.includes('mid')">
                     <b-badge pill href="#" variant="primary">Mid</b-badge>
                  </div>
                </b-row>
              </b-col>
            </b-row>
            <b-row class="mt-4" align-v="center">
              <b-col cols="3">
                <p class="role">Tactical</p>
              </b-col>
              <b-col >
                <b-row>
                  <div v-if="tactical && tactical.includes('captain')">
                     <b-badge pill href="#" variant="success">Mid</b-badge>
                  </div>
                  <div v-if="tactical && tactical.includes('coach')">
                             <b-badge pill href="#" variant="success">Mid</b-badge>
                  </div>
                </b-row>
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  props: ["username", "skill", "main", "tactical"]
};
</script>

<style scoped>
.full-width {
  width: 100%;
}

.role {
  margin: 0 !important;
  font-size: 0.9em;
  font-weight: bold;
}

.dark-bg {
  background: #444;
}

.skill-level-circle {
  width: 3.5em;
  height: 3.5em;
  background: white;
  border-radius: 50%;
  display: flex;
}

.skill-tag {
  display: inline-block;
  width: 3.5em;
  height: 2.5em;
  margin-right: 1.5em;
  background: white;
  border-radius: 25%;
  transform: rotateZ(-15deg);
  display: flex;
}

.skill-level-text {
  display: block;
  font-size: 2.5em;
  font-weight: bold;
  color: #444;
  line-height: 0;
  margin: auto;
  user-select: none;
}

.skill-tag-text {
  font-size: 0.8em;
  font-weight: bold;
  color: #343a40;
  line-height: 0;
  margin: auto;
  user-select: none;
}

.username {
  display: block;
  color: white;
  font-size: 2.5em;
  font-weight: bold;
  text-decoration: none;
}
</style>
