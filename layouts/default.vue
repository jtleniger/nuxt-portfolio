<template>
  <v-app dark>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      fixed
      app
    >
      <span>&copy; 2018, Justin Leniger</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Justin Leniger'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>