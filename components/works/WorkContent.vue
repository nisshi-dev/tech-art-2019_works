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
        <li class="light-cube w-img">
          <h3>光る立体</h3>
          <h4>―卓上の星団―</h4>
          <img src="~/static/works/light_cube.jpg" />
        </li>
        <li class="lucky-chance w-img">
          <h3>ラッキーチャンス！！</h3>
          <h4>―ITの神様のお告げ―</h4>
          <img src="~/static/works/lucky_chance.jpg" />
        </li>
        <li class="sound-fish h-img">
          <h3>音の水槽</h3>
          <h4>―運動方程式に従い散らばる魚たち―</h4>
          <img src="~/static/works/sound_fish.jpg" />
        </li>
        <li class="small-nature h-img">
          <h3>小さな自然</h3>
          <h4>―ささえあう癒し―</h4>
          <img src="~/static/works/small_nature.jpg" />
        </li>
        <li class="r h-img">
          <h3>R</h3>
          <h4>―輝かしい時代―</h4>
          <img src="~/static/works/R.jpg" />
        </li>
        <li class="kamehame h-img">
          <h3>カメハメ波</h3>
          <h4>―叫んでみよう！―</h4>
          <img src="~/static/works/kamehame.jpg" />
        </li>
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
      worksInfo: [
        {
          title: 'ロボット村',
          subtitle: 'ースマートフォンで実社会づくりー',
          movie: '~/static/works/robot_village.webm',
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
          movie: '~/static/works/KOUSHI_HOUSE.webm',
          desc: [
            'フィトンチッド。',
            'それは樹木が発散する化学物質であり人間に癒やしや安らぎを与える。',
            'この作品は、廃材である木材を使っており、それをフレームにし不規則に並べて積み重ねたものがベースになっている。',
            'そのフレームは幅が広いので子供も乗れ、階段状になるように設計した。',
            'また防水性のLEDテープを貼り付け、制御することにより視覚的な変化も取り入れた。',
            'また天井にはネットを覆わせるとともにライトを巻き付け星空を想起させる。'
          ],
          producer: '　　    山口端奈、Hua Zhudi'
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
    box-shadow: 0 3px 5px rgba(255, 255, 255, 0.3);
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
}
</style>
