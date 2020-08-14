<template>
  <div>
    <section class="hero">
      <h1>Justin Leniger</h1>
    </section>
    <section class="content columns">
      <div>
        <h2>Latest Post</h2>
        <post-link :post="latest" />
      </div>
      <div>
        <h2>Projects</h2>
        <post-link v-for="project in projects" :key="project.title" :post="project" />
      </div>
    </section>
  </div>
</template>

<script>
import PostLink from '~/components/post-link.vue'

export default {
  async asyncData({ params, $content }) {
    const latest = await $content('posts').sortBy('date', 'desc').limit(1).fetch();

    return {
      latest: latest[0]
    }
  },
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
@import '~/scss/colors';

h2 {
  border-bottom: 2px solid $grey-900;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.hero {
  background-image: url('~assets/images/orion.jpg');
}
</style>