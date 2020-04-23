<template>
  <div class="body">
    <section>
      <h1>{{post.title}}</h1>
      <em>{{ new Date(post.date).toLocaleDateString() }}</em>
    </section>
    <section v-html="$md.render(post.body)">
    </section>
  </div>
</template>

<script>
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
      meta: [
        { property: 'og:title', content: this.post.title },
        { property: 'og:image', content: this.post.thumbnail }
      ]
    }
  }
};
</script>

