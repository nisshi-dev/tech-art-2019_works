<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div class="modal-header">
          <p @click="$emit('close')">×</p>
        </div>
        <!--
        <div class="modal-content">
          <slot />
        </div>
        <footer class="modal-footer">
          <slot name="footer">
            <button @click="$emit('close')">Close</button>
          </slot>
        </footer>
        -->
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal {
  &.modal-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  &-window {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
  }
}

// オーバーレイのトランジション
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;

  // オーバーレイに包含されているモーダルウィンドウのトランジション
  .modal-window {
    transition: opacity 0.4s, transform 0.4s;
  }
}

// ディレイを付けるとモーダルウィンドウが消えた後にオーバーレイが消える
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .modal-window {
    opacity: 0;
    transform: translateY(-20px);
  }
}

.modal-window {
  //border: 5px solid red;
  width: 70%;
  height: 60%;
}

.modal-header {
  //border: 1px solid black;
  //color: black;
  display: flex;
  align-self: flex-start; // 左寄せ
  font-size: 30px;
  font-weight: bold;
  p {
    //border: 1px solid black;
    padding: 5px 10px;
    background-color: #222222;
    color: white;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3); // 影の追加
  }
}
</style>
