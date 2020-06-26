<template>
  <div class="work-content">
    <bread-crumb />
    <h2>作品集</h2>
    <div class="content">
      <ul>
        <li class="robot-village w-img" @click="openModal0">
          <h3>ロボット村</h3>
          <h4>ースマートフォンで実社会づくりー</h4>
          <img src="~/static/works/robot_village.jpg" />
        </li>

        <MyModal v-if="modal0" :works-info="worksInfo[0]" @close="closeModal0">
          <video controls width="600">
            <source src="~/static/works/robot_village.webm" type="video/webm" />
          </video>
          <template v-slot:w-img>
            <img src="~/static/works/robot_village.jpg" />
            <img src="~/static/works/robot_village2.jpg" />
          </template>
          <template v-slot:h-img>
            <img src="~/static/works/robot_village_poster.jpg" />
          </template>
          <!--
          <template slot="modal-title">
            <h3>ロボット村</h3>
          </template>-->
          <!--
          <p>Vue.js Modal Window!</p>
          <div><input v-model="message" /></div>
          <template slot="footer">
            <button @click="doSend">送信</button>
          </template>
          -->
        </MyModal>

        <li class="koushi-house w-img" @click="openModal1">
          <h3>KOUSHI HOUSE</h3>
          <h4>―親子―</h4>
          <img src="~/static/works/KOUSHI_HOUSE.jpg" />
        </li>

        <MyModal v-if="modal1" :works-info="worksInfo[1]" @close="closeModal1">
          <video controls width="600">
            <source
              src="~/static/works/KOUSHI_HOUSE.webm"
              type="video/webm"
              poster="~/static/works/KOUSHI_HOUSE.jpg"
            />
          </video>
          <template v-slot:w-img>
            <img src="~/static/works/KOUSHI_HOUSE.jpg" />
            <img src="~/static/works/KOUSHI_HOUSE2.jpg" />
          </template>
        </MyModal>

        <br />
        <li class="light-cube w-img" @click="openModal2">
          <h3>光る立体</h3>
          <h4>―卓上の星団―</h4>
          <img src="~/static/works/light_cube.jpg" />
        </li>

        <MyModal v-if="modal2" :works-info="worksInfo[2]" @close="closeModal2">
          <video controls width="600">
            <source src="~/static/works/light_cube.webm" type="video/webm" />
          </video>
          <template v-slot:w-img>
            <img src="~/static/works/light_cube.jpg" />
            <img src="~/static/works/light_cube2.jpg" />
          </template>
        </MyModal>

        <li class="lucky-chance w-img" @click="openModal3">
          <h3>ラッキーチャンス！！</h3>
          <h4>―ITの神様のお告げ―</h4>
          <img src="~/static/works/lucky_chance.jpg" />
        </li>

        <MyModal v-if="modal3" :works-info="worksInfo[3]" @close="closeModal3">
          <video controls width="600">
            <source src="~/static/works/lucky_chance.webm" type="video/webm" />
          </video>
          <template v-slot:w-img>
            <img src="~/static/works/lucky_chance.jpg" />
            <img src="~/static/works/lucky_chance2.jpg" />
          </template>
        </MyModal>

        <li class="sound-fish h-img" @click="openModal4">
          <h3>音の水槽</h3>
          <h4>―運動方程式に従い散らばる魚たち―</h4>
          <img src="~/static/works/sound_fish.jpg" />
        </li>

        <MyModal v-if="modal4" :works-info="worksInfo[4]" @close="closeModal4">
          <video controls width="300">
            <source src="~/static/works/sound_fish.webm" type="video/webm" />
          </video>
          <template v-slot:w-img>
            <img src="~/static/works/sound_fish2.jpg" />
          </template>
          <template v-slot:h-img>
            <img src="~/static/works/sound_fish.jpg" />
          </template>
        </MyModal>

        <li class="small-nature h-img" @click="openModal5">
          <h3>小さな自然</h3>
          <h4>―ささえあう癒し―</h4>
          <img src="~/static/works/small_nature.jpg" />
        </li>

        <MyModal v-if="modal5" :works-info="worksInfo[5]" @close="closeModal5">
          <video controls width="300">
            <source src="~/static/works/small_nature.webm" type="video/webm" />
          </video>
          <template v-slot:w-img>
            <img src="~/static/works/small_nature2.jpg" />
          </template>
          <template v-slot:h-img>
            <img src="~/static/works/small_nature.jpg" />
          </template>
        </MyModal>

        <li class="r h-img" @click="openModal6">
          <h3>R</h3>
          <h4>―輝かしい時代―</h4>
          <img src="~/static/works/R.jpg" />
        </li>

        <MyModal v-if="modal6" :works-info="worksInfo[6]" @close="closeModal6">
          <img src="~/static/works/R.jpg" width="300" />
          <template v-slot:w-img>
            <img src="~/static/works/R2.jpg" />
          </template>
          <template v-slot:h-img>
            <img src="~/static/works/R.jpg" />
          </template>
        </MyModal>

        <li class="kamehame h-img" @click="openModal7">
          <h3>カメハメ波</h3>
          <h4>―叫んでみよう！―</h4>
          <img src="~/static/works/kamehame.jpg" />
        </li>

        <MyModal v-if="modal7" :works-info="worksInfo[7]" @close="closeModal7">
          <video controls width="600">
            <source src="~/static/works/kamehame.webm" type="video/webm" />
          </video>
          <template v-slot:w-img>
            <img src="~/static/works/kamehame2.jpg" />
          </template>
          <template v-slot:h-img>
            <img src="~/static/works/kamehame.jpg" />
          </template>
        </MyModal>
      </ul>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '~/components/works/BreadCrumb.vue'
// import CustomComponentModal from '@/components/modals/CustomComponentModal.vue'
import MyModal from '~/components/modals/MyModal.vue'

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    BreadCrumb,
    MyModal
  },
  data() {
    const data = {
      modal0: false,
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
      worksInfo: [
        {
          title: 'ロボット村',
          subtitle: 'ースマートフォンで実社会づくりー',
          desc: [
            '3Dプリンタでロボットを計6台制作し、展示を行った。',
            '一部のロボットはスマートフォンでQRコードを読み取ることでロボットの操作体験ができるようにした。',
            'また、上部にプロジェクターを設置し、簡単なプロジェクションマッピングを行った。'
          ],
          producer: '　　    西田吉克、升谷光貴、一氏良仁、小川拓馬、富田大喜'
        },
        {
          title: 'KOUSHI HOUSE',
          subtitle: '―親子―',
          desc: [
            'フィトンチッド。',
            'それは樹木が発散する化学物質であり人間に癒やしや安らぎを与える。',
            'この作品は、廃材である木材を使っており、それをフレームにし不規則に並べて積み重ねたものがベースになっている。',
            'そのフレームは幅が広いので子供も乗れ、階段状になるように設計した。',
            'また防水性のLEDテープを貼り付け、制御することにより視覚的な変化も取り入れた。',
            'また天井にはネットを覆わせるとともにライトを巻き付け星空を想起させる。'
          ],
          producer: '　　    山口端奈、Hua Zhudi'
        },
        {
          title: 'SPARKLE CUBE',
          subtitle: '―卓上の星団―',
          desc: [
            'リモコンを操作することで光の色を固定したり、早くまたは、ゆっくり変化させたりすることができます。',
            '工夫した点として、台を使って高くすることで視点に入りやすくしており、また立体的にすることで色を変化させたとき色鮮やかになるようにしました。',
            '当初は、LEDテープをもっと張り巡らせて生き物や数字など様々なものを立体的に表現する予定でしたが予算と届いたLEDテープがコンピュータ制御できないことが判明したこともあり、今の形になりました。'
          ],
          producer: '　　    升谷光貴'
        },
        {
          title: 'ラッキーチャンス！！',
          subtitle: '―ITの神様のお告げ―',
          desc: [
            'ボタンを押すとおみくじを引ける。',
            '一本だけ光ったライトがあなたの運勢だよ！'
          ],
          producer: '　　    吉村龍、吉廣耕大、古賀祐輝'
        },
        {
          title: '音の水槽',
          subtitle: '―運動方程式に従い散らばる魚たち―',
          desc: [
            'ガリレオ・ガリレイは「宇宙という書物は数学の言葉で書かれている」と言ったそうです。',
            'もし、本当にこの世界が数学の言葉で記述されているのなら、数学の言葉を用いて別の世界を作り出すことが出来るかもしれません。',
            'この作品の光の魚は運動方程式と同じ形の以下のような微分方程式の時間追跡によって動いています。',
            'dv/dt = ∇U + n + kv',
            '・Uは位置エネルギーでその分布はピアノの鍵盤を押すことで、押した鍵盤によって変わります。これによって光の魚の世界、つまり音の水槽に干渉できます。',
            '・nはノイズで、光の魚に意思を与えます。',
            '・kvは空気抵抗で、光の魚の運動エネルギーを吸収し、音の水槽内のエネルギーの均衡を保ちます。',
            'この数式が描く像、すなわちこの作品の光の魚たちがいる空間は世界と呼べるでしょうか？',
            '我々の世界を見てみると、数式と同じようにある種の法則とノイズ、そしてそれらを認識する自分自身がいることに気が付きます。',
            '自分自身は確かにこの世界が存在することを認識していて、今この世界に生きているという事を信じています。',
            '逆に、信じることによって、または認識することによってはじめて自分の主観にこの世界を捉えることができると考えることもできるのではないですか？',
            'あなたがこの作品を見て、もし本当に魚が泳いでいるような感想を持ったなら、少なくともあなたの認識の中ではこの光の魚は命を持っていて、この作品は数学の言葉を用いて記述されたもう一つの世界なのだと言えるかもしれません。'
          ],
          producer: '　　    富田大喜'
        },
        {
          title: '小さな自然',
          subtitle: '―ささえあう癒し―',
          desc: ['水をかけると光るよ！'],
          producer: '　　    堀川裕気'
        },
        {
          title: 'R',
          subtitle: '―輝かしい時代―',
          desc: ['令和が光る！'],
          producer: '　　    猪井稀絵、長尾端稀'
        },
        {
          title: 'カメハメ波',
          subtitle: '―叫んでみよう！―',
          desc: ['叫んでみよう！'],
          producer: '　　    Hua Zhudi'
        }
      ]
    }

    return data
  },
  methods: {
    openModal0() {
      this.modal0 = true
    },
    closeModal0() {
      this.modal0 = false
    },
    openModal1() {
      this.modal1 = true
    },
    closeModal1() {
      this.modal1 = false
    },
    openModal2() {
      this.modal2 = true
    },
    closeModal2() {
      this.modal2 = false
    },
    openModal3() {
      this.modal3 = true
    },
    closeModal3() {
      this.modal3 = false
    },
    openModal4() {
      this.modal4 = true
    },
    closeModal4() {
      this.modal4 = false
    },
    openModal5() {
      this.modal5 = true
    },
    closeModal5() {
      this.modal5 = false
    },
    openModal6() {
      this.modal6 = true
    },
    closeModal6() {
      this.modal6 = false
    },
    openModal7() {
      this.modal7 = true
    },
    closeModal7() {
      this.modal7 = false
    }
  }
}
</script>

<style lang="scss" scoped>
.work-content {
  //border: 1px solid white;
  color: white;
  margin-top: 1rem;
  display: flex;
  align-items: center; // 水平中央揃え
  flex-direction: column; // 縦に整列
  h2 {
    text-decoration: underline;
    //border: 1px solid white;
    height: 5vh;
  }
}

.w-img img {
  height: 35vh;
  width: 28vw;
}

.h-img img {
  width: 15vw;
  height: 50vh;
}

.content {
  //border: 1px solid white;
  width: 70vw;
  ul {
    display: flex; // listを横並びにする
    list-style-type: none; // リストの接頭部を削除
    padding-left: 0;
    //align-items: center; // 水平中央揃え
    justify-content: center; // 水平中央揃え
    flex-wrap: wrap; // 折返し有効
  }
  li {
    //border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center; // 水平中央揃え
    margin: 20px;
    border-radius: 20px; // 角を丸める
    //box-shadow: 0 3px 5px rgba(255, 255, 255, 0.3);
    background: linear-gradient(145deg, #1f1f2a, #242432);
    box-shadow: 14px 14px 28px #0e0e13, -14px -14px 28px #36364b;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    img {
      margin-top: 10px;
      border-radius: 20px; // 角を丸める
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

  li:hover,
  li:focus,
  li:active {
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }
}
</style>
