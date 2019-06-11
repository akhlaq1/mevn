<template>
  <div class="posts"></br>
    <div v-if="posts.length > 0" class="table-wrap">
      <table>
        <tr>
        </tr>
        <tr v-for="post in posts">
             <b-card border-variant="Dark"
            align="center"
            bg-variant="Dark">
            <b-media right-align vertical-align="center">
  <b-img slot="aside" blank blank-color="#ccc" width="80" alt="placeholder" />
  <h5 class="mt-0 mb-1">{{ post.title }}</h5>
   <p style="font-size: 14pt">by {{ post.author }}  &nbsp; &nbsp;<b-badge variant="primary">{{ post.subject }}</b-badge> </p>
{{ post.description }}
</b-media>

   
          <td align="center">
            <router-link v-bind:to="{ name: 'EditPost', params: { id: post._id } }">Edit</router-link> |
            <a href="#" @click="deletePost(post._id)">Delete</a>
          </td>
        </b-card>
        </tr>
      <div>
          </br>
        <router-link v-bind:to="{ name: 'NewPost' }" class=""><b-button variant="Dark" size="lg">
            Submit Article</b-button>
        </router-link>
      </div>
      </table>
    </div>
    <div v-else>
      There are no articles.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewPost' }" class="add_post_link">Submit Article</router-link>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data.posts
    },
    async deletePost (id) {
      await PostsService.deletePost(id)
      this.$router.push({ name: 'Posts' })
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>