<template>
  <div>
    <nuxt-link to="/works" class="content">
      <img src="~/static/works.png" />
      <p>
        山口大学工学部講義「ものづくり創成プロジェクト」が、<br />
        宇部市と山口大学及び宇部工業高等専門学校の共同企画する講座<br />
        「TECHNOLOGY×ARTチャレンジ講座2019」の受講成果として、
        計8作品制作した。<br />
        この次世代創成人材育成に共感する宇部市企業の方々の支えにより、<br />
        同市のイルミネーションフェスティバル<br />
        「TOKIWAファンタジア2019」にて出展を行った。<br /><br />
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
  //text-align: center;
  justify-content: center; // 画像を水平方向にセンタリング
  position: relative; // 相対配置
  //margin: 0.8rem;
  padding: 0.8rem;
  border: 1px solid white;
}

.content img {
  opacity: 0.3;
  width: 70%;
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
  font-size: 1.5rem;
  line-height: 4rem;
}
</style>
