<template>
  <div>
    <section class="hero is-dark is-large">
      <div class="hero-body">
        <div class="container">
          <div class="column is-half-mobile is-offset-half-mobile">
            <h1 class="title is-size-2-mobile has-text-weight-bold has-text-right">
              Justin Leniger
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title has-text-centered"><i class="fas fa-code"></i>Software Developer</p>
              <p>I write software both professionally and in my free time. This site is available on GitHub and was created using Nuxt.JS and Bulma.
              <p class="has-text-grey has-text-centered margin-top">
                <em>Find me on <a href="https://github.com/jtleniger" target="_blank">GitHub.</a></em>
              </p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title has-text-centered"><i class="fas fa-camera"></i>Amateur Photographer</p>
              <p>Pictures can share much more than a scene; they can share a feeling or tell a story. I love improving my skills in my freetime.</p>
              <p class="has-text-grey has-text-centered margin-top">
                <em>Find me on <a href="https://unsplash.com/@jtleniger" target="_blank">Unsplash.</a></em>
              </p>
            </div>
          </div>
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p class="title has-text-centered"><i class="fas fa-tree"></i>Outdoorsman</p>
              <p>When I'm not at work I try to get into nature as much as possible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .hero {
    background: url('~assets/images/orion.jpg')center center; background-size:cover;
  }
</style>