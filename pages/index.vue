<template>
  <v-layout
    column
  >

    <v-flex
      xs12
    >
      <v-parallax
        :src="require('@/assets/panorama.jpg')"
        :height="parallaxHeight"
      >
        <v-layout
          column
          align-center
          justify-center
        >
          <h1 class="my-2 headline-font huge shadow text-xs-center">Justin Leniger</h1>
        </v-layout>
      </v-parallax>
    </v-flex>

    <v-container>
      <v-layout
        column
        wrap
        align-center
        class="my-5"
      >

        <v-flex
          xs12
        >
          <v-container
            grid-list-xl
          >
            <v-layout
              row
              wrap
              align-start
            >
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="blue--text text--lighten-2"
                    >
                      code
                    </v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">Software Developer</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    See my <a
                      href="https://github.com/jtleniger"
                      target="_blank">GitHub.</a>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="blue--text text--lighten-2"
                    >
                      photo_camera
                    </v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">Amateur Photographer</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center">
                    See my <a
                      href="https://unsplash.com/@jtleniger"
                      target="_blank">Unsplash.</a>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex
                xs12
                md4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon
                      x-large
                      class="blue--text text--lighten-2">terrain</v-icon>
                  </v-card-text>
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline text-xs-center">Outdoorsman</div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>

      </v-layout>
    </v-container>

  </v-layout>
</template>

<script>
export default {
  computed: {
    parallaxHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '400'
        case 'sm': return '500'
        case 'md': return '600'
        case 'lg': return '700'
        case 'xl': return '800'
      }
    }
  }
}
</script>

<style scoped>
  .headline-font {
    line-height: 1;
    font-weight: 300;
    letter-spacing: -0.06em;
  }

  .huge {
    font-size: 112px;
  }

  .shadow {
    text-shadow:
      0px 4px 4px rgba(0, 0, 0, 0.2),
      2px 4px 4px rgba(0, 0, 0, 0.2),
      -2px 4px 4px rgba(0, 0, 0, 0.2);
  }
</style>

