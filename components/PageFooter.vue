<template>
  <div class="footer">
    <div class="credit">
      <h4>Credit</h4>
      <p>
        Produced by the student team of Creative Engineering
        Practice（ものづくり創成プロジェクト）, and challenge lecture’Technology
        x Art’, YAMAGUCHI University, National Institute of Technology, Ube
        College, UBE City<br />
        <b>City Supervisor: </b>Prof. Koshiba Mamiko Ph.D.<br />
        <b>Associate Professor Creators: </b>Horikawa Yuki / Yamaguchi Marina /
        Mishima Seitaro / Watanabe Joichiro / Hua Zhudi / Fujita Koji / Kawasaki
        Hiroki / Maeda Ryo / Kubota Momoka / Kishida Shinji / Komura Shunsuke /
        Tanabe Reira / Itamura Mizuki / Suzuki Ryosuke / Kevin Jay Singh /
        Kanazawa Ryo / Sato Ryota / Takata Jumpei / Nakano Tomohiro / Yoshikawa
        Teru18taka <br />
        <b>General Support: </b>UBE Tokiwa Park<br />
        <b>Web: </b>Nishida Yoshikatsu ※Out of order Presented by Ube City
      </p>
    </div>
    <div class="presedted">
      <h4>Presented by</h4>
      <p>
        <b>Stuff Supportors: </b>（敬称略）Marumo Yuji / Kumagai Mitsuyuki /
        Hayakawa Yoshiaki / Shinozaki Keiji / Mitsui Kazuhiko / Fujita Tadao /
        Nakano Yasuo / Tashiro Koichi / Kaneko Junko/ Shintani Yuko/ Uchida
        Yaeko / Sugiyama Isamu / Sugiyama Megumi / Hirasa Yoshie /日高 / AC設備
        / 宇部護国神社 / 山口銀行上宇部支店 / 富士アート / エコー設備管工 /
        ダイサンプロパン / 田辺仏具展 / 小川蜜カス本舗 / うべ未来100プロジェクト
        / 三和企業 / 福島建設 / 金子小児科 <br />
      </p>
    </div>
    <div class="share">
      <h4>Share</h4>
      <p>NSD</p>
    </div>
    <div class="copyright">
      <small>
        Copyright ©️2020 Center for Design and Product Innovation All Rights
        Reserved.
      </small>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-wrap: wrap; // 折返し有効
  width: auto;
  //border: 1px solid white;
  color: #dddddd;
  padding: 1rem;
  h4 {
    font-size: 14px;
    line-height: 30px;
    text-decoration: underline;
  }
  p {
    font-size: 12px;
    line-height: 22px;
    //border: 1px solid white;
    margin-left: 0.8vw;
  }
}

.credit {
  //border: 1px solid white;
  border-right: 1px solid white;
  width: calc(100% / 3);
  padding-right: 0.5vw;
}

.presedted {
  //border: 1px solid white;
  border-right: 1px solid white;
  width: calc(100% / 3);
  padding-right: 0.5vw;
  padding-left: 0.5vw;
}

.share {
  //border: 1px solid white;
  width: calc(100% / 3);
  padding-left: 0.5vw;
}

.copyright {
  //border: 1px solid white;
  border-top: 1px solid white;
  width: 100%;
  display: flex; // 親要素とする
  justify-content: center; // 水平中央揃え
  padding-top: 0.5vh;
}
</style>
