<template>
  <div>
    <nuxt-link to="/works" class="content">
      <img src="~/static/works.png" />
      <p>
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
        >8つのイルミネーション作品を産み出しました<br />
        市民の皆様に提起した<br />
        <b>" IT × 感性 ≃ 冬暉の輝き ∞ "</b><br />
        への出発です<br />
      </p>
    </nuxt-link>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.content {
  display: flex;
  width: auto;
  //height: 100%;
  //float: left; // 大事
  //align-items: flex-end;
  //flex-wrap: wrap;
  text-align: center; // 文字を中央揃えにする
  justify-content: center; // 画像を水平方向にセンタリング
  position: relative; // 相対配置
  //margin: 0.8rem;
  padding: 0.8rem;
  //border: 1px solid white;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.content img {
  opacity: 0.3;
  width: 70%;
}

.content:hover,
.content:focus,
.content:active {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

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
  font-size: 1.2vw;
  line-height: 2.5vw;
}

.mgr-10 {
  margin-right: 14px;
}
</style>
