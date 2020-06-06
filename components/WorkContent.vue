<template>
  <div class="work-content">
    <h2>作品集</h2>
    <div class="robot-village">
      <img src="~/static/works/KOUSHI_HOUSE.jpg" />
      <div class="disc">
        <h3>ロボット村</h3>
      </div>
    </div>
    <div class="koushi-house">
      <img src="~/static/works/KOUSHI_HOUSE.jpg" />
      <div class="disc">
        <h3>KOUSHI HOUSE</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.work-content {
  border: 1px solid white;
  color: white;
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap; // 折返し有効
  justify-content: center; // 垂直中央揃え
  align-items: center; // 水平中央揃え
  flex-direction: column; // 縦に整列
  h2 {
    //justify-content: center; // 水平中央揃え
    text-decoration: underline;
    border: 1px solid white;
    height: 5vh;
    //height: auto;
  }
}

.robot-village {
  //display: block;
  display: flex;
  flex-direction: row;
  //border: 1px solid white;
  padding: 13px;
  border-bottom: 1px solid gray;
  //width: 0.3vw;
  img {
    border: 1px solid white;
    width: 30%;
  }
}

.disc {
  border: 1px solid white;
}

.koushi-house {
  display: flex;
  flex-direction: row;
  //border: 1px solid white;
  padding: 13px;
  //width: 0.3vw;
  img {
    border: 1px solid white;
    width: 30%;
  }
}
</style>
