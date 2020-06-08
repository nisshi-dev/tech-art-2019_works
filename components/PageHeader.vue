<template>
  <div class="header">
    <h2 class="pageTitle Noto-400i">
      <slot />
    </h2>
    <div class="yamaguchi">
      <a href="http://www.mono.eng.yamaguchi-u.ac.jp/" class="yama-logo">
        <img src="~/static/yamaguchi.png" />
        <p>ものづくり創成センター</p>
      </a>
    </div>
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
  height: 12vh; // headerの高さを指定
  width: auto;
  //flex-wrap: wrap;
  //justify-content: center;
}

.pageTitle {
  color: gray;
  border: 1px solid white;
  margin-right: auto; // 次の要素を右寄せ
  height: 4vh;
  margin-top: 1vh;
  margin-left: 1vw;
  //justify-content: center;
  //margin-top: auto;
  //align-items: center;
}

.yamaguchi {
  //margin-top: 0;
  //margin-left: auto;
  border: 1px solid white;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: auto; // 上寄せ
  margin-right: -400px;
  //margin-left: auto;
  //margin-left: 5vw;
  .yama-logo {
    display: flex;
    flex-direction: row;
    //border: 1px solid white;
    text-decoration: none;
    //justify-content: flex-end;
    //margin-left: auto;
    //padding-top: 15px;

    img {
      //padding-top: 5px;
      //margin-right: 3px;
      //margin-bottom: 10px;
      //margin-bottom: 10px;
      width: 20px;
      height: 22px;
    }

    p {
      //padding-top: -11px;
      color: white;
    }
  }
}

.yama-logo p :link {
  color: white;
  text-decoration: none;
}

.yama-logo p :visited {
  color: white;
  text-decoration: none;
}

.header-menu {
  color: gray;
  border: 1px solid white;
  //height: 4vh;
  margin-right: 80px;
  margin-top: auto; // 下寄せ
  ul {
    display: flex; // listを横並びにする
    list-style-type: none; // リストの接頭部を削除
    padding-left: 0;
    //margin-right: 10vw;
  }
  .header-navlink {
    border: solid white;
    padding: 0.4rem 1.2rem;
    color: white;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .header-navlink :link {
    color: white;
    text-decoration: none;
  }

  .header-navlink :visited {
    color: white;
    text-decoration: none;
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
