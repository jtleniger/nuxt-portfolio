<template>
  <div class="body">
    <div class="posts">
      <div v-for="post in posts" :key="post.title" class="post">
        <nuxt-link :to="`/posts/${post.slug}`">{{ post.title }}</nuxt-link>
        <p>{{ post.description }}</p>
        <em>{{ new Date(post.date).toLocaleDateString() }}</em>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>