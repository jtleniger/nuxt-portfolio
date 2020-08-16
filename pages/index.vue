<template>
  <div>
    <section class="hero">
      <h1>Justin Leniger</h1>
      <lazy-image src="orion.jpg" />
    </section>
    <section class="content columns">
      <div>
        <h2>Latest posts</h2>
        <post-link v-for="post in latest" :key="post.title" :post="post" />
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
    const latest = await $content('posts').sortBy('date', 'desc').limit(3).fetch();

    return {
      latest
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: 'true' }
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
          'title': 'tldr.photography',
          'href': 'https://tldr.photography',
          'description': 'How the heck do I use my DSLR?'
        }
      ]
    }
  }
}
</script>