<template>
  <div class="header">
    <h2 class="pageTitle Noto-400i">
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
.Noto-300 {
  font-family: 'Noto Serif JP', serif;
  font-width: 300;
}

.Noto-400i {
  font-family: 'Noto Serif JP', serif;
  font-width: 400;
  font-style: italic;
}
</style>
