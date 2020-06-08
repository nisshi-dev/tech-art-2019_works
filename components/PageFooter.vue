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
      <div class="social">
        <a class="btn btn-icon btn-facebook" href="#"
          ><i class="fa fa-facebook"></i><span>Facebook</span></a
        >
        <a class="btn btn-icon btn-twitter" href="#"
          ><i class="fa fa-twitter"></i><span>Twitter</span></a
        >
        <a class="btn btn-icon btn-googleplus" href="#"
          ><i class="fa fa-google-plus"></i><span>Google+</span></a
        >
      </div>

      <div class="code">
        <h4>Code</h4>
        <a href="https://github.com/nishidayoshikatsu/tech-art-2019_works">
          <img src="~/static/github.png" />
        </a>
      </div>
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
  .code img {
    margin: 0.5rem;
  }
  .social {
    @import url(//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css); // icon
    margin: 0.3vw;
    .btn {
      clear: both;
      white-space: nowrap;
      font-size: 0.8em;
      display: inline-block;
      border-radius: 5px;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.35);
      margin: 2px;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
      overflow: hidden; // はみ出た部分は非表示
    }
    .btn:hover {
      box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.45);
    }
    .btn:focus {
      box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.4);
    }
    .btn > span,
    .btn-icon > i {
      float: left;
      padding: 13px 23px 13px 13px;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      transition: all 0.5s;
      line-height: 1em;
    }

    .btn > span {
      padding: 14px 18px 16px;
      white-space: nowrap;
      color: #fff;
      background: #b8b8b8;
    }

    .btn:focus > span {
      background: #9a9a9a;
    }

    .btn-icon > i {
      border-radius: 5px 0 0 5px;
      position: relative;
      width: 13px;
      text-align: center;
      font-size: 1.25em;
      color: #fff;
      background: #212121;
    }

    .btn-icon > i:after {
      content: '';
      border: 8px solid;
      border-color: transparent transparent transparent #222;
      position: absolute;
      top: 13px;
      right: -15px;
    }

    .btn-icon:hover > i,
    .btn-icon:focus > i {
      color: #fff;
    }

    .btn-icon > span {
      border-radius: 0 5px 5px 0;
    }

    /*Facebook*/
    .btn-facebook:hover > i,
    .btn-facebook:focus > i {
      color: #3b5998;
    }

    .btn-facebook > span {
      background: #3b5998;
    }

    /*Twitter*/
    .btn-twitter:hover > i,
    .btn-twitter:focus > i {
      color: #55acee;
    }

    .btn-twitter > span {
      background: #55acee;
    }

    /*Google*/
    .btn-googleplus:hover > i,
    .btn-googleplus:focus > i {
      color: #dd4b39;
    }

    .btn-googleplus > span {
      background: #dd4b39;
    }
  }
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
