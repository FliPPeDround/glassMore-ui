<template>
  <transition name="dialog-fade">
    <div
    class="gl-dialog__wrapper"
    v-show='modelValue'
    @click.self="$emit('update:modelValue', false)"
    >
      <div
        class="gl-dialog"
        :style="{width: width, marginTop: top}"
        >
        <div class="gl-dialog__header">
          <slot name="title">
            <span class="gl-dialog__title">{{title}}</span>
          </slot>
        </div>
        <div class="gl-dialog__body">
          <slot></slot>
        </div>
        <div class="gl-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({ // eslint-disable-line no-undef
  title: {
    type: String,
    default: '提示'
  },
  width: {
    type: String,
    default: '50%'
  },
  top: {
    type: String,
    default: '15vh'
  },
  modelValue: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.gl-dialog__wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  border-radius: 10px;
}
.gl-dialog{
  position: relative;
  margin: 15vh auto 50px;
  border: 2px solid #FFFFFF;
  background: #FFFFFF4D;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-sizing: border-box;
  width: 30%;
}
.gl-dialog__header{
  padding: 20px 20px 10px;
  border-bottom: 2px solid #FFFFFF;
}

.gl-dialog__title{
  line-height: 24px;
  font-size: 18px;
  color: #FFFFFF;
}
.gl-dialog__headerbtn{
  position: absolute;
  top: 15px;
  right: 20px;
  padding: 0;
  background: transparent;
  color: #FFFFFF;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 30px;
}
.gl-dialog__headerbtn:hover{
    color: #FFFFFF;
  }
.gl-dialog__body{
  padding: 30px 20px;
  color: #FFFFFF;
  font-size: 18px;
  word-break: break-all;
}
.gl-dialog__footer{
  padding: 10px 20px 20px;
  text-align: right;
  box-sizing: border-box;
}

.dialog-fade-enter-active {
  animation: fade .2s;
}
.dialog-fade-leave-active {
  animation: fade .2s reverse;
}

@keyframes fade {
  from{
    opacity: 0;
    transform: translateY(-20px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
