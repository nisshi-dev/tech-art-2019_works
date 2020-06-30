module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      prefix: 'og: https://ogp.me/ns#'
    },
    titleTemplate: 'Technology×Art2019 作品集',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '当サイトはTechnology×Art2019で制作した作品の情報を提供するために、Technology×Art2019の受講生が開設したものです。'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Technology×Art2019 作品集'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://tech-art-2019-works.netlify.app/'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Technology×Art2019 作品集'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '当サイトはTechnology×Art2019で制作した作品の情報を提供するために、Technology×Art2019の受講生が開設したものです。'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://tech-art-2019-works.netlify.app/works.png'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@nsd244'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@nsd244'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://tech-art-2019-works.netlify.app/works.png'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa', 'nuxt-webfontloader'],
  webfontloader: {
    google: {
      families: ['Noto+Serif+JP:wght@300;400']
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
