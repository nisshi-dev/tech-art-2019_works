<template>
  <div class="header">
    <h2 class="pageTitle Noto-400i">
      <slot />
    </h2>
    <div class="header-menu Noto-300">
      <ul>
        <li
          v-for="item in headerItem"
          :key="item.message"
          class="header-navlink Noto-300"
        >
          <a :href="item.url">{{ item.content }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'headerItem']
}
</script>

<style lang="scss" scoped>
.header {
  display: flex; // flexboxの指定
  border: 1px solid white;
  height: 8vh; // headerの高さを指定
  width: auto;
  //flex-wrap: wrap;
  //justify-content: center;
}

.pageTitle {
  color: gray;
  border: 1px solid white;
  margin-right: auto; // 次の要素を右寄せ
  height: 4vh;
  //justify-content: center;
}

.header-menu {
  color: gray;
  border: 1px solid white;
  height: 4vh;
  ul {
    display: flex; // listを横並びにする
    list-style-type: none; // リストの接頭部を削除
    padding-left: 0;
  }
  .header-navlink {
    border: solid white;
  }
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
