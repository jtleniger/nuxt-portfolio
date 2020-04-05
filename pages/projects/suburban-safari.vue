<template>
  <div>
    <section class="hero is-dark is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="column">
            <h1
              class="title is-size-2-mobile has-text-weight-bold has-text-right-mobile"
            >Suburban Safari</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <v-gallery :images="images" :index="index" @close="index = null" />
        <div
          class="image"
          v-for="(image, imageIndex) in images"
          :key="imageIndex"
          @click="index = imageIndex"
          :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
        ></div>
      </div>
    </section>
  </div>
</template>

<script>
const baseDir = '/images/suburban-safari/';

export default {
  data: function() {
    return {
      images: [
        `${baseDir}01.jpg`,
        `${baseDir}02.jpg`,
      ],
      index: null
    };
  }
};
</script>

<style scoped>
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>