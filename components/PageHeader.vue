<template>
  <div class="header">
    <h2 class="pageTitle">
      <slot />
    </h2>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}

.pageTitle {
  color: gray;
  display: flex;
  align-items: center;
  line-height: 1.35;
  font-weight: normal;
  margin: 0 0.5em 0 0;
}
</style>
