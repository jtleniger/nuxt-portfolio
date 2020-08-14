<template>
  <section class="content narrow">
    <h1>Posts</h1>
    <post-link v-for="post in posts" :key="post.title" :post="post" />
  </section>
</template>

<script>
import PostLink from '~/components/post-link.vue'

export default {
  async asyncData({ params, $content }) {
    const posts = await $content('posts').fetch();

    return {
      posts
    }
  },
  components: {
    'post-link': PostLink
  }
}
</script>