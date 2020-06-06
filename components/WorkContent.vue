<template>
  <div class="work-content">
    <bread-crumb />
    <h2>作品集</h2>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BreadCrumb
  }
}
</script>

<style lang="scss" scoped>
.work-content {
  border: 1px solid white;
  color: white;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap; // 折返し有効
  justify-content: center; // 垂直中央揃え
  align-items: center; // 水平中央揃え
  flex-direction: column; // 縦に整列
  h2 {
    //justify-content: center; // 水平中央揃え
    text-decoration: underline;
    //border: 1px solid white;
    height: 5vh;
    //height: auto;
  }
}
</style>
