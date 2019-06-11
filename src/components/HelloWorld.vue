<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For guide and recipes on how to configure / customize this project,<br>
      check out the
      <router-link to="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</router-link>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><router-link to="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</router-link></li>
      <li><router-link to="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</router-link></li>
    </ul>
    <h3>Essential Links</h3> 
    <ul>
      <li><router-link to="https://vuejs.org" target="_blank" rel="noopener">Core Docs</router-link></li>
      <li><router-link to="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</router-link></li>
      <li><router-link to="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</router-link></li>
      <li><router-link to="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</router-link></li>
      <li><router-link to="https://news.vuejs.org" target="_blank" rel="noopener">News</router-link></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><router-link to="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</router-link></li>
      <li><router-link to="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</router-link></li>
      <li><router-link to="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</router-link></li>
      <li><router-link to="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</router-link></li>
      <li><router-link to="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
