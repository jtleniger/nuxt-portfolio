<template>
  <div class="body">
    <section>
      <h1>Suburban Safari</h1>
      <em>April 5, 2020</em>
      <p>A photographic exploration of suburbia in the quarantine of Spring 2020. Join me.</p>
    </section>
    <section>
      <div class="gallery-container">
        <v-gallery :images="images" :index="index" @close="index = null" />
        <div
          class="image"
          v-for="image in 6"
          :key="image"
          @click="index = image"
          :style="{ backgroundImage: 'url(/images/suburban-safari/' + image + '.jpg)', width: '300px', height: '300px' }"
        ></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      index: null
    };
  }
};
</script>

<style scoped>
.gallery-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 1px;
}
</style>