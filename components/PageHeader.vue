<template>
  <div class="header">
    <h2 class="pageTitle Noto-400i">
      <slot />
    </h2>
    <!--<div class="header-menu Noto-300">-->
    <li
      v-for="item in headerItem"
      :key="item.message"
      class="header-navlink Noto-300"
    >
      <a :href="item.url">{{ item.content }}</a>
    </li>
    <!--</div>-->
  </div>
</template>

<script>
export default {
  props: ['title', 'headerItem']
}
</script>

<style lang="scss" scoped>
.header {
  /*display: flex;*/
  align-items: flex-end;
  flex-wrap: wrap;
}

.pageTitle {
  color: gray;
  display: flex;
  align-items: center;
  float: left;
  margin: 10px 20px;
}

.header-navlink {
  color: gray;
  float: right;
  flex-direction: row;
  justify-content: flex-end;
  list-style-type: none;
  align-items: flex-end;
  padding: 5px;
  margin: 20px 10px 5px;
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
