<template>
  <div>
    <nuxt-link to="/works" class="content">
      <!--<img src="~/static/works.png" />-->
      <!--<div class="content-img"></div>-->
      <p class="content-txt">
        宇部市・山口大学・宇部工業高等専門学校が共創する<br />
        <b
          >地域SDGsクリエイティブ人材育成プロジェクト「TECHNOLOGY×ART」チャレンジ講座</b
        ><br />
        <span class="mgr-10">時代を駆け抜けるクリエーターらが</span
        ><span class="mgr-10">次世代に熱く伝えた</span>概念の卵<br /><br />
        <span class="mgr-10">その成果プラットフォーム</span
        >宇部市<b>「TOKIWAファンタジア」</b>で<br />
        <span class="mgr-10">2019年度受講生らが</span
        ><span class="mgr-10">感謝を込めて</span
        >8つのイルミネーション作品を産み出しました<br /><br />
        市民の皆様に提起した<br />
        <b><span class="big-letter">" IT × 感性 ≃ 冬暉の輝き ∞ "</span></b
        ><br />
        への出発です<br />
      </p>
    </nuxt-link>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.content {
  display: flex;
  //width: auto;
  height: 85vh;
  //float: left; // 大事
  align-items: center;
  //flex-wrap: wrap;
  text-align: center; // 文字を中央揃えにする
  justify-content: center; // 画像を水平方向にセンタリング
  //position: relative; // 相対配置
  //margin: 0.8rem;
  padding: 0.8rem;
  //margin: 0 auto;
  //border: 1px solid white;
  background: center no-repeat url('../static/works.png');
  background-size: 90% 90%;
  opacity: 0.65;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  text-decoration: none;
}

/*
.content-img {
  border: 10px solid red;
  background: center no-repeat url('../static/works.png');
  background-size: 90% 90%;
  opacity: 0.7;
}
*/
/*
.content img {
  opacity: 0.3;
  width: 90%; // 70
  //height: 90%;
}
*/
.content:hover,
.content:focus,
.content:active {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

.content-txt {
  //color: #dddddd;
  color: white;
  text-decoration: none;
  //line-height: 36px;
  font-size: 24px;
}

.big-letter {
  font-size: 30px;
}

.content-txt:visited,
.content-txt:active {
  //color: #dddddd;
  text-decoration: none;
}
/*
.content p {
  position: absolute; // 絶対配置
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  color: #dddddd;
  border: 3px solid white;
  //font-size: 1.2vw;
  width: 100%;
  font-size: 18px;
  //line-height: 2.5vw;
  line-height: 28px;
}
*/
.mgr-10 {
  margin-right: 14px;
}
</style>
