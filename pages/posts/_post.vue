<template>
  <section class="content narrow">
    <section class="title">
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
      <share />
      <em>{{ new Date(post.date).toLocaleDateString() }}</em>
    </section>
    <section v-if="post.hero" class="main-image">
      <lazy-image :src="post.hero" />
    </section>
    <section v-html="$md.render(post.body)">
    </section>
  </section>
</template>
<script>
import LazyImage from '~/components/lazy-image.vue'
import Share from '~/components/share.vue'

export default {
  async asyncData({ params, payload }) {
    if (payload) {
      return { post: payload }
    }
    else {
      return {
        post: await require(`~/assets/content/posts/${params.post}.json`)
      }
    }
  },
  head() {
    return {
      // meta: [
      //   { property: 'og:title', content: this.post.title },
      //   { property: 'og:image', content: require('~/assets/' + this.post.hero) }
      // ]
    }
  },
  components: {
    'lazy-image': LazyImage,
    'share': Share
  }
};
</script>
