<template>
  <div>
    <section class="hero">
      <h1>Justin Leniger</h1>
    </section>
    <div class="body">
      <h2>Latest Post</h2>
      <post-link :post="latest" />
      <h2>Projects</h2>
      <post-link v-for="project in projects" :key="project.title" :post="project" />
    </div>
  </div>
</template>

<script>
import PostLink from '~/components/post-link.vue'

export default {
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
      meta: [
        { property: 'og:title', content: 'Justin Leniger' },
        { property: 'og:image', content: '/img/orion.jpg' }
      ]
    }
  },
  computed: {
    latest() {
      return this.$store.state.posts[0]
    }
  },
  components: {
    'post-link': PostLink
  },
  data: function() {
    return {
      projects: [
        {
          'title': 'Suburban Safari',
          'route': '/projects/suburban-safari',
          'description': 'Join me on an adventure.'
        },
        {
          'title': 'tldr.photography',
          'href': 'https://tldr.photography',
          'description': 'How the heck do I use my DSLR?'
        }
      ]
    }
  }
}
</script>

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
  background-image: url('/img/orion.jpg');
}
</style>