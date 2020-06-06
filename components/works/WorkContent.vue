<template>
  <div class="work-content">
    <bread-crumb />
    <h2>作品集</h2>
    <div class="content">
      <ul>
        <li class="robot-village">
          <h3>ロボット村</h3>
          <h4>ースマートフォンで実社会づくりー</h4>
          <!--<img src="~/static/works/robot_village.jpg" />-->
        </li>
        <li class="koushi-house">
          <h3>KOUSHI HOUSE</h3>
          <h4>―親子―</h4>
          <!--<img src="~/static/works/KOUSHI_HOUSE.jpg" />-->
        </li>
        <li>
          <h3>音の水槽</h3>
          <h4>―運動方程式に従い散らばる魚たち―</h4>
          <!--<img src="~/static/works/KOUSHI_HOUSE.jpg" />-->
        </li>
        <li>
          <h3>光る立体</h3>
          <h4>―卓上の星団―</h4>
          <!--<img src="~/static/works/KOUSHI_HOUSE.jpg" />-->
        </li>
        <li>
          <h3>小さな自然</h3>
          <h4>―ささえあう癒し―</h4>
          <!--<img src="~/static/works/KOUSHI_HOUSE.jpg" />-->
        </li>
        <li>
          <h3>ラッキーチャンス！！</h3>
          <h4>―ITの神様のお告げ―</h4>
          <!--<img src="~/static/works/KOUSHI_HOUSE.jpg" />-->
        </li>
        <li>
          <h3>R</h3>
          <h4>―輝かしい時代―</h4>
          <!--<img src="~/static/works/KOUSHI_HOUSE.jpg" />-->
        </li>
        <li>
          <h3>カメハメ波</h3>
          <h4>―叫んでみよう！―</h4>
          <!--<img src="~/static/works/KOUSHI_HOUSE.jpg" />-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/works/BreadCrumb.vue'

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
  //width: 100%;
  //flex-wrap: wrap; // 折返し有効
  //justify-content: center; // 垂直中央揃え
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

.content {
  //display: flex;
  //flex-direction: row;
  //align-items: center; // 水平中央揃え
  //flex-wrap: wrap; // 折返し有効
  //justify-content: flex-start;
  border: 1px solid white;
  ul {
    display: flex; // listを横並びにする
    list-style-type: none; // リストの接頭部を削除
    padding-left: 0;
    //align-items: center; // 水平中央揃え
    justify-content: center; // 水平中央揃え
    flex-wrap: wrap; // 折返し有効
  }
  li {
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center; // 水平中央揃え
    width: 300px;
    img {
      width: 30%;
    }
  }
  li :link {
    color: white;
    text-decoration: none;
  }

  li :visited {
    color: white;
    text-decoration: none;
  }
}
</style>
