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

              <a class="navbar-item">
                Home
              </a>

              <!-- <a class="navbar-item">
                Resume
              </a>

              <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Projects
                  </a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item">
                      Intervalometer
                    </a>
                  </div>
              </div> -->
            </div>
        </div>
    </nav>

    <nuxt/>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          ©{{ new Date().getFullYear() }}, Justin Leniger
        </p>
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
  }
}
</script>
