<template>
  <div class="Header">
    <page-header :header-item="headerItem">
      {{ title }}
    </page-header>
    <top-content />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'
import TopContent from '~/components/TopContent.vue'
import PageFooter from '~/components/PageFooter.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PageHeader,
    // eslint-disable-next-line vue/no-unused-components
    TopContent,
    // eslint-disable-next-line vue/no-unused-components
    PageFooter
  },
  data() {
    const data = {
      title: 'TECHNOLOGY×ART2019 WORKS',
      headerItem: [
        {
          content: '2018',
          url: 'http://www.mono.eng.yamaguchi-u.ac.jp/Tech_Art/about/index.html'
        },
        {
          content: '2017',
          url: 'http://www.mono.eng.yamaguchi-u.ac.jp/garden/'
        },
        {
          content: '2016',
          url: 'http://www.mono.eng.yamaguchi-u.ac.jp/garden/index2.html'
        }
      ]
    }

    return data
  },
  head() {
    return {
      title: this.$t('Technology×Art2019作品集'),
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://tech-art-2019-works.netlify.app/"
            },
            "headline": "Technology×Art2019作品集",
            "datePublished": "2020-06-30 00:00:00+0900",
            "dateModified": "2020-06-30 00:00:00+0900",
            "author": {
                "@type": "Person",
                "name": "西田吉克"
            },
            "description": "当サイトはTechnology×Art2019で制作した作品の情報を提供するために、Technology×Art2019の受講生が開設したものです。",
            "image": {
                "@type": "ImageObject",
                "url": "https://tech-art-2019-works.netlify.app/works.png",
                "width": 110,
                "height": 31
            },
            "publisher": {
                "@type": "Organization",
                "name": "Technology×Art2019 チャレンジ講座",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://tech-art-2019-works.netlify.app/works.png",
                    "width": 110,
                    "height": 31
                }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
/*
.Header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
   */
</style>
