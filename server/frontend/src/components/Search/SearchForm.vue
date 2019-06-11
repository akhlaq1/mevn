<template>
  <b-card bg-variant="dark" text-variant="white" :style="{textAlign: 'left'}">
    <b-tabs pills>
    </br>
      <b-tab title="Search Players" active>
    <b-form>
      <b-form-group id="username">
        <b-form-input type="text" v-model="form.username" placeholder="Search by Username"></b-form-input>
      </b-form-group>
      <b-button v-if="form.username" variant="primary">SHOW PLAYERS</b-button>
      <div class="filter-options-divider">
        <strong>Filter</strong>
        <b-button size="sm" variant="primary" @click="reset" :disabled="!!form.username">RESET</b-button>
      </div>
      <b-form-group id="skill_level" label="Skill Level" label-for="skill_level">
        <vue-slider
          ref="slider"
          v-model="form.skillLevel"
          v-bind="sliderSettings"
          :disabled="!!form.username"
        ></vue-slider>
      </b-form-group>
      <b-form-group id="main_roles" label="Main Roles" label-for="main_roles">
        <b-form-checkbox-group v-model="form.mainRoles" :disabled="!!form.username">
          <b-form-checkbox value="carry">Carry</b-form-checkbox>
          <br>
          <b-form-checkbox value="support">Support</b-form-checkbox>
          <br>
          <b-form-checkbox value="mid">Mid</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group id="tactical_roles" label="Tactical Roles" label-for="tactical_roles">
        <b-form-checkbox-group v-model="form.tacticalRoles" :disabled="!!form.username">
          <b-form-checkbox value="captain">Captain</b-form-checkbox>
          <br>
          <b-form-checkbox value="coach">Coach</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group id="server_regions" label="Server Regions" :disabled="!!form.username">
        <b-button
          variant="primary"
          :disabled="!!form.username"
          v-b-modal.server-select-modal
        >Select Matchmaking Regions</b-button>
      </b-form-group>
      <b-form-group id="hours_played" label="Min. Hours Played" label-for="hours_played">
        <b-form-input type="number" min="0" v-model="form.hoursPlayed" :disabled="!!form.username"></b-form-input>
      </b-form-group>
      <b-modal
        class="disable-selectable"
        ref="serverSelectModal"
        id="server-select-modal"
        v-bind="modalSettings"
      >
        <b-container>
          <h5 class="text-center">Select Matchmaking Regions</h5>
          <b-form-checkbox
            class="mt-4"
            v-model="form.autoSelectServer"
            disabled
          >Automatically pick the best region based on my location.</b-form-checkbox>
          <p class="text-center mt-4">OR</p>
          <p>Select up to three matchmaking regions. Select only the regions closest to you for the best experience.</p>
          <b-form-checkbox-group v-model="form.servers" :disabled="form.autoSelectServer">
            <b-row class="mx-auto" v-for="(chunk, i) in chunkedServerOptions" :key="i">
              <b-col v-for="server in chunk" :key="server.id">
                <b-form-checkbox :key="server.id" :value="server.value">{{server.text}}</b-form-checkbox>
              </b-col>
            </b-row>
          </b-form-checkbox-group>
          <div class="text-center mt-5">
            <b-button class="mr-2" variant="primary" @click="apply">OK</b-button>
            <b-button @click="cancel">Cancel</b-button>
          </div>
        </b-container>
      </b-modal>
    </b-form>
      </b-tab>
      <b-tab title="Search Teams">
    <b-form>
      <b-form-group id="username">
        <b-form-input type="text" v-model="teamform.username" placeholder="Search by name"></b-form-input>
      </b-form-group>
      <b-button v-if="form.username" variant="primary">SHOW PLAYERS</b-button>
      <div class="filter-options-divider">
        <strong>Filter</strong>
        <b-button size="sm" variant="primary" @click="reset" :disabled="!!teamform.username">RESET</b-button>
      </div>
      <b-form-group id="skill_level" label="Skill Level" label-for="skill_level">
        <vue-slider
          ref="slider"
          v-model="teamform.skillLevel"
          v-bind="slider2Settings"
          :disabled="!!teamform.username"
        ></vue-slider>
      </b-form-group>
      <b-form-group id="server_regions" label="Server Regions" :disabled="!!teamform.username">
        <b-button
          variant="primary"
          :disabled="!!teamform.username"
          v-b-modal.server-select-modal
        >Select Matchmaking Regions</b-button>
      </b-form-group>
      <b-modal
        class="disable-selectable"
        ref="serverSelectModal"
        id="server-select-modal"
        v-bind="modalSettings"
      >
        <b-container>
          <h5 class="text-center">Select Matchmaking Regions</h5>
          <b-form-checkbox
            class="mt-4"
            v-model="teamform.autoSelectServer"
            disabled
          >Automatically pick the best region based on my location.</b-form-checkbox>
          <p class="text-center mt-4">OR</p>
          <p>Select up to three matchmaking regions. Select only the regions closest to you for the best experience.</p>
          <b-form-checkbox-group v-model="form.servers" :disabled="teamform.autoSelectServer">
            <b-row class="mx-auto" v-for="(chunk, i) in chunkedServerOptions" :key="i">
              <b-col v-for="server in chunk" :key="server.id">
                <b-form-checkbox :key="server.id" :value="server.value">{{server.text}}</b-form-checkbox>
              </b-col>
            </b-row>
          </b-form-checkbox-group>
          <div class="text-center mt-5">
            <b-button class="mr-2" variant="primary" @click="apply">OK</b-button>
            <b-button @click="cancel">Cancel</b-button>
          </div>
        </b-container>
      </b-modal>
    </b-form>
    </b-tab>
      </b-tabs>
  </b-card>
</template>

<script>
import vueSlider from "vue-slider-component";

export default {
  components: { vueSlider },
  data() {
    return {
      form: {
        username: "",
        mainRoles: [],
        tacticalRoles: [],
        servers: [],
        autoSelectServer: false,
        hoursPlayed: null,
        skillLevel: [0, 10]
      },
      teamform: {
        username: "",
        servers: [],
        autoSelectServer: false,
        skillLevel: [0, 10]
      },
      serverOptions: [
        { id: 1, value: "australia", text: "Australia" },
        { id: 2, value: "se_asia", text: "SE Asia" },
        { id: 3, value: "india", text: "India" },
        { id: 4, value: "japan", text: "Japan" },
        { id: 5, value: "south_africa", text: "South Africa" },
        { id: 6, value: "dubai", text: "Dubai" },
        { id: 7, value: "china_tc_guangdong", text: "China TC Guandong" },
        { id: 8, value: "china_tc_Zhejiang", text: "China TC Zhejiang" },
        { id: 9, value: "china_tc_wuhan", text: "China TC Wuhan" },
        { id: 10, value: "china_tc_shanghai", text: "China TC Shanghai" },
        { id: 11, value: "china_uc", text: "China UC" },
        { id: 12, value: "china_uc2", text: "China UC2" },
        { id: 13, value: "russia", text: "Russia" },
        { id: 14, value: "chile", text: "Chile" },
        { id: 15, value: "europe_east", text: "Europe East" },
        { id: 16, value: "europe_west", text: "Europe West" },
        { id: 17, value: "south_america", text: "South America" },
        { id: 18, value: "us_west", text: "US West" }
      ],
      sliderSettings: {
        piecewise: true,
        piecewiseLabel: true,
        labelStyle: { color: "#fff" },
        labelActiveStyle: { color: "#3498db" },
        sliderStyle: [
          { backgroundColor: "#3498db" },
          { backgroundColor: "#3498db" }
        ],
        min: 0,
        max: 10,
        tooltip: false
      },
          slider2Settings: {
        piecewise: true,
        piecewiseLabel: true,
        labelStyle: { color: "#fff" },
        labelActiveStyle: { color: "#3498db" },
        sliderStyle: [
          { backgroundColor: "#3498db" },
          { backgroundColor: "#3498db" }
        ],
        min: 0,
        max: 10,
        tooltip: false
      },
      modalSettings: {
        size: "lg",
        hideHeader: true,
        hideFooter: true,
        bodyBgVariant: "dark",
        bodyTextVariant: "light"
      }
    };
  },
  computed: {
    chunkedServerOptions() {
      const chunkSize = 3;
      let i = 0;
      let output = [];
      while (i < this.serverOptions.length) {
        output.push(this.serverOptions.slice(i, i + chunkSize));
        i += chunkSize;
      }
      return output;
    }
  },
  methods: {
    apply() {
      this.$refs.serverSelectModal.hide();
    },
    cancel() {
      this.$refs.serverSelectModal.hide();
    },
    reset() {
      Object.assign(this.$data, this.$options.data.call(this));
    }
  }
};
</script>

<style scoped>
.filter-options-divider {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 10px;
}

h5 {
  font-weight: bold;
  text-transform: uppercase;
}

.disable-selectable {
  user-select: none;
}
</style>
