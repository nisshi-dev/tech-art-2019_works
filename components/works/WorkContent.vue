<template>
  <div class="work-content">
    <bread-crumb />
    <h2>作品集</h2>
    <div class="content">
      <ul>
        <li class="robot-village w-img" @click="openModal">
          <h3>ロボット村</h3>
          <h4>ースマートフォンで実社会づくりー</h4>
          <img src="~/static/works/robot_village.jpg" />
        </li>

        <MyModal v-if="modal" @close="closeModal" :works-info="worksInfo[0]">
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

        <li class="koushi-house w-img">
          <h3>KOUSHI HOUSE</h3>
          <h4>―親子―</h4>
          <img src="~/static/works/KOUSHI_HOUSE.jpg" />
        </li>
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
      modal: false,
      worksInfo: [
        {
          title: 'ロボット村',
          subtitle: 'ースマートフォンで実社会づくりー',
          movie: '~/static/works/robot_village.webm',
          desc: '3Dプリンタで制作したロボット計6台を制作し、展示を行った。'
        },
        {
          title: 'KOUSHI HOUSE',
          subtitle: 'ースマートフォンで実社会づくりー',
          movie: '~/static/works/KOUSHI_HOUSE.webm'
        }
      ]
    }

    return data
  },
  methods: {
    openModal() {
      this.modal = true
    },
    closeModal() {
      this.modal = false
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
