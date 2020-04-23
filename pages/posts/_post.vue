<template>
  <div class="body">
    <section>
      <h1>{{post.title}}</h1>
      <em>{{ new Date(post.date).toLocaleDateString() }}</em>
    </section>
    <section>
      {{ post.body }}
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
        post: await require(`~/assets/content/post/${params.post}.json`)
      }
    }
  }
};
</script>

