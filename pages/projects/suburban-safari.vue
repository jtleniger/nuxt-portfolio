<template>
  <div>
    <section>
      <div>
        <div>
          <div>
            <h1
             
            >Suburban Safari</h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div>
          <div>
            <div>
              <div class="gallery-container">
                <v-gallery :images="images" :index="index" @close="index = null" />
                <div
                  class="image"
                  v-for="(image, imageIndex) in images"
                  :key="imageIndex"
                  @click="index = imageIndex"
                  :style="{ backgroundImage: 'url(' + image + ')', width: '200px', height: '200px' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
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
  .gallery-container {
    display: flex;
    justify-content: center;
  }
  .image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>