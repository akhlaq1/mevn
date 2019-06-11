<template>
  <div>
    <div class="container">
      <main-header></main-header>
      <navigation></navigation>
      <GameNavigation></GameNavigation>
      <section>
        <b-container class="mt-5" fluid>
          <b-row>
            <b-col cols="4">
              <search-form></search-form>
            </b-col>
            <b-col cols="8">
              <b-row v-for="result in searchResults" :key="result.key" class="mb-3">
                <result-card v-bind="result"></result-card>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </div>
    <footer-social></footer-social>
    <main-footer></main-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MainHeader from "@/components/MainHeader.vue";
import GameNavigation from "@/components/GameNavigation.vue";
import Navigation from "@/components/Navigation.vue";
import SearchForm from "@/components/Search/SearchForm.vue";
import ResultCard from "@/components/Search/ResultCard.vue";
import FooterSocial from "@/components/FooterSocial.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "DotA2search",
  components: {
    MainHeader,
    Navigation,
    SearchForm,
    ResultCard,
    FooterSocial,
    MainFooter,
  GameNavigation
  },
  data() {
    return {
      searchResults: [
        {
          id: 1,
          username: "johndoe1111",
          skill: 5,
          main: ["carry", "mid"],
          tactical: ["captain"]
        },
        {
          id: 2,
          username: "janedoe2222",
          skill: 3,
          main: ["support"],
          tactical: ["coach"]
        }
      ]
    };
  },
  mounted() {
    let SliderScript = document.createElement("script");
    SliderScript.setAttribute("src", "js/main.js");
    document.head.appendChild(SliderScript);
  }
};
</script>

<style>
</style>
