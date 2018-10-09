<template>
  <div>

    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">

              <a class="navbar-item">
                Home
              </a>

              <a class="navbar-item">
                About
              </a>

              <a class="navbar-item">
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
              </div>
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
