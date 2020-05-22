<template>
  <div class="Header">
    <page-header :header-item="headerItem">
      {{ title }}
    </page-header>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    PageHeader
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
