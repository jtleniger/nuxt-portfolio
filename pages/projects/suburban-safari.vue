<template>
  <section class="content">
    <section>
      <h1>Suburban Safari</h1>
      <em>April 5, 2020</em>
      <p>A photographic exploration of suburbia in the quarantine of Spring 2020. Join me.</p>
    </section>
    <div class="gallery-container">
      <v-gallery :images="images" :index="index" @close="index = null" />
      <div
        class="image"
        v-for="(path, i) in images"
        :key="i"
        @click="index = i"
        :style="{ backgroundImage: `url(${path})` }"
      ></div>
    </div>
  </section>
</template>

<script>
const IMAGE_COUNT = 6;

export default {
  created() {
    for (let i = 1; i <= IMAGE_COUNT; i++) {
      this.images.push(`/img/suburban-safari/${i}.jpg`)
    }
  },
  data: function() {
    return {
      images: [],
      index: null
    };
  }
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  justify-content: center;
  margin: 1em 0;
  flex-wrap: wrap;
}
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 1px;
  width: 350px;
  height: 350px;
}
</style>