<template>
  <div class="Header">
    <page-header>{{ headerItem.title }}</page-header>
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
      headerItem: {
        title: 'TECHNOLOGY×ART2019 WORKS'
      }
    }

    return data
  }
}
</script>

<style lang="scss" scoped>
.Header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
</style>
