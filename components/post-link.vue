<template>
  <div class="post-link">
    <a v-if="post.href" :href="post.href" target="_blank">{{ post.title }}</a>
    <nuxt-link v-else :to="route">{{ post.title }}</nuxt-link>
    <p v-if="post.description">{{ post.description }}</p>
    <em v-if="post.date">{{ new Date(post.date).toLocaleDateString() }}</em>
  </div>
</template>

<script>
/**
 * Accepts a post that has a title, description, and date.
 */
export default {
  props: ['post', 'href'],
  computed: {
    route() {
      return this.post.slug ? `/posts/${this.post.slug}` : this.post.route
    }
  }
}
</script>

<style lang="scss">
@import '~/scss/colors';

.post-link {
  * {
    margin: 1rem 0;
  }
  
  a {
    display: block;
    font-size: 2rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid $grey-900;
  }

  em {
    display: block;
    color: $grey-600;
    margin: 1rem 0 2rem 0;
  }
}
</style>