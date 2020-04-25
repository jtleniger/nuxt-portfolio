<template>
  <div class="body">
    <post-link v-for="post in posts" :key="post.title" :post="post" />
  </div>
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