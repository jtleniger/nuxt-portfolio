<template>
  <section class="content">
    <section>
      <h1>Suburban Safari</h1>
      <em>April 5, 2020</em>
      <p>A photographic exploration of suburbia in of Spring 2020. Join me.</p>
    </section>
    <section class="gallery">
      <div
        class="thumb"
        v-for="(path, i) in images"
        :key="i"
        @click="openModal(i)"
        :style="{ backgroundImage: `url(${path})` }"
      ></div>
    </section>
    <transition name="page">
      <section v-if="isOpen" class="modal" @click="closeModal()">
        <img :src="images[index]" />
      </section>
    </transition>
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
      index: null,
      isOpen: false
    };
  },
  methods: {
    openModal: function(i) {
      this.index = i
      this.isOpen = true
    },
    closeModal: function() {
      this.isOpen = false
    }
  }
};
</script>

<style lang="scss">
@import '~/scss/colors';

$thumb-size: 250px;

section.content {
  section.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .thumb {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
      margin: 1px;
      width: $thumb-size;
      height: $thumb-size;
    }
  }

  section.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    margin: 0;
    display: flex;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>