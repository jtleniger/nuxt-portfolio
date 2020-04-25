<template>
  <section class="content narrow">
    <section>
      <h1>{{ post.title }}</h1>
      <p>{{ post.description }}</p>
      <em>{{ new Date(post.date).toLocaleDateString() }}</em>
    </section>
    <section v-if="post.thumbnail">
      <img :src="post.thumbnail" />
    </section>
    <section v-html="$md.render(post.body)">
    </section>
  </section>
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
