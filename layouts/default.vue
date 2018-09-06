<template>
  <v-app dark>
    
    <v-content>
      <v-container
        class="pa-0"
        fluid
      >
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      fixed
      app
    >
      <v-spacer />
      <div class="pr-2">&copy; {{ new Date().getFullYear() }}, Justin Leniger</div>
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