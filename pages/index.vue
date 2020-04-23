<template>
  <div>
    <section class="hero">
      <h1>Justin Leniger</h1>
    </section>
    <div class="body">
      <h2>Latest Post</h2>
      <div class="posts">
        <div class="post">
          <nuxt-link :to="`/posts/${latest.slug}`">{{ latest.title }}</nuxt-link>
          <p>{{ latest.description }}</p>
          <em>{{ new Date(latest.date).toLocaleDateString() }}</em>
        </div>
      </div>
      <h2>Projects</h2>
      <div class="posts">
        <div class="post">
          <nuxt-link to="/projects/suburban-safari">Suburban Safari</nuxt-link>
          <p>Join me on an adventure.</p>
        </div>
        <div class="post">
          <nuxt-link to="https://tldr.photography">tldr.photography</nuxt-link>
          <p>How the heck do I use my DSLR?</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container .page .body {

  h2 {
    font-weight: 300;
    padding: 1rem;
  }

  .posts {
    flex-grow: 1;

    .post {
      a {
        margin: 1rem 0;
      }
    }
  }
}

.hero {
  background-image: url("/img/orion.jpg");
}
</style>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ],
      meta: [
        { property: 'og:title', content: 'Justin Leniger' },
        { property: 'og:image', content: '/img/orion.jpg' }
      ]
    };
  },
  computed: {
    latest() {
      return this.$store.state.posts[0];
    }
  }
};
</script>