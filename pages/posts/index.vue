<template>
  <section class="content narrow">
    <h1>Posts</h1>
    <post-link v-for="post in posts" :key="post.title" :post="post" />
  </section>
</template>

<script>
import PostLink from '~/components/post-link.vue'

export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  components: {
    'post-link': PostLink
  }
}
</script>