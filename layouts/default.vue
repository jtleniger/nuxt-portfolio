<template>
  <div>

    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': showNav }">
            <div class="navbar-start">

              <nuxt-link class="navbar-item" to="/">Home</nuxt-link>

              <!-- <a class="navbar-item">
                Resume
              </a> -->

              <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Projects
                  </a>

                  <div class="navbar-dropdown">
                    <nuxt-link class="navbar-item" to="/projects/intervalometer">Intervalometer</nuxt-link>
                    <a href="https://tldr.photography/" class="navbar-item">TL;DR Photography</a>
                  </div>
              </div>
            </div>
        </div>
    </nav>

    <div @click="showNav = false">
      <nuxt/>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          ©{{ new Date().getFullYear() }}, Justin Leniger
        </p>
        <a href="https://bulma.io">
          <img src="https://bulma.io/images/made-with-bulma--black.png" alt="Made with Bulma" width="128" height="24">
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  },
  watch: {
    '$route' () {
      this.showNav = false;
    }
  }
}
</script>

<style lang="scss">
  .margin-top {
    margin-top: 1.5rem;
  }

  .title {

    i {
      margin-right: 1rem;
    }

    &.has-text-weight-bold {
      @media screen and (min-width: 769px) {
        font-size: 6rem;
      }

      text-shadow: 0 4px 4px rgba(0,0,0,.3), 2px 4px 4px rgba(0,0,0,.3), -2px 4px 4px rgba(0,0,0,.3);
    }
  }
</style>
