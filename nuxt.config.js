const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Justin Leniger',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;1,300&display=swap' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    '~/scss/main.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-gallery.client.js', ssr: false }
  ],

  generate: {
    routes: function() {
      const fs = require('fs');
      const path = require('path');
      return fs.readdirSync('./assets/content/posts').map(file => {
        return {
          route: `/posts/${path.parse(file).name}`, // Return the slug
          payload: require(`./assets/content/posts/${file}`),
        };
      });
    },
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/markdownit'
  ],

  markdownit: {
    injected: true,
  },

  googleAnalytics: {
    id: 'UA-138863199-1',
    dev: false
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },

  sitemap: {
    hostname: 'https://justinleniger.com',
    gzip: true
  }
}
