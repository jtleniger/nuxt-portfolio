/*
 * Created by Martin Dünkelmann on 14.05.18 20:29
 * Copyright (c) 2018. All rights reserved.
 *
 * Last modified 14.05.18 18:41
 */

const nodeExternals = require('webpack-node-externals');

const routes = [
  {
    name: 'index',
    path: 'index',
    component: 'pages/index.vue'
  },
  {
    name: 'inspire',
    path: 'inspire',
    component: 'pages/inspire.vue'
  },
];

// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const basePath = process.env.DEPLOY_ENV === 'GH_PAGES' ? '/nuxt-starter/' : '/';

module.exports = {
  router: {
    mode: 'history',
    base: basePath,
    routes: routes,
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    publicPath: '',
    babel: {
      plugins: [
        ["transform-imports", {
          "vuetify": {
            "transform": "vuetify/es5/components/${member}",
            "preventFullImport": true
          }
        }]
      ]
    },
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
};
