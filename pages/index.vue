<template>
  <div>
    <section class="hero">
      <h1>Justin Leniger</h1>
    </section>
    <section>
      <div class="cards">
        <div>
          <h1>Software Developer</h1>
          <p>I write software both professionally and in my free time. This site is available on GitHub and was created using Nuxt.JS and Bulma.</p>
          <p>
            <em>
              Find me on
              <a href="https://github.com/jtleniger" target="_blank">GitHub.</a>
            </em>
          </p>
        </div>
        <div>
          <h1>Amateur Photographer</h1>
          <p>Pictures can share much more than a scene; they can share a feeling or tell a story. I love improving my skills in my freetime.</p>
          <p>
            <em>
              Find me on
              <a href="https://unsplash.com/@jtleniger" target="_blank">Unsplash.</a>
            </em>
          </p>
        </div>
        <div>
          <h1>Outdoorsman</h1>
          <p>When I'm not at work I try to get into nature as much as possible.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-image: url("/img/orion.jpg");
}
</style>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  }
}
</script>