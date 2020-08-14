<template>
  <picture>
    <source :srcSet="require('~/assets/images/' + src + '?webp')" type="image/webp" />
    <source :srcSet="require('~/assets/images/' + src)" type="image/jpeg" />
    <img :src="require('~/assets/images/' + src)" />
  </picture>
</template>

<script>
export default {
  props: ['src']
}
</script>