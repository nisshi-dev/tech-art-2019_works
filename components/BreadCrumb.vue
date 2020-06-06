<template>
  <nav class="bread-crumb">
    <div class="breadcrumb-link">
      <nuxt-link to="/">
        TOP
      </nuxt-link>
    </div>
    <div class="breadcrumb-current">
      <a>
        作品集
      </a>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.bread-crumb {
  display: flex;
  flex-direction: row;
  font-size: 14px;
  font-weight: bold;
  padding: 27px 0;
  align-self: flex-start; // 左詰め
  margin-left: 3vw;
  //border: 1px solid white;
  text-decoration: none;
  justify-content: center; // 垂直中央揃え
}

.breadcrumb-link {
  //border: 1px solid white;
  color: #8e8e93;
  text-decoration: none;
  margin-right: 0.3vw;
}

.breadcrumb-link :link {
  text-decoration: none;
}

.breadcrumb-link :hover {
  text-decoration: underline;
}

.breadcrumb-link :visited {
  color: #8e8e93; // 訪問済みになっても色を変更しない
  text-decoration: none;
}

.breadcrumb-link :after {
  content: '>';
  color: #8e8e93;
  text-decoration: none;
}

.breadcrumb-current {
  color: #a9a9a9;
  text-decoration: none;
  //border: 1px solid white;
  margin-top: -3px; // 水平方向の中央に調整
}
</style>
