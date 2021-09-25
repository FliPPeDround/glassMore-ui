<template>
  <!--   -->
  <transition name='dialog-fade'>
    <div class="gl-dialog_wrapper" v-show='visible' @click.self="handleClose">
      <div class="gl-dialog" :style="{width: width, marginTop: top}">
        <div class="gl-dialog_header">
          <slot name="title">
            <span class="gl-dialog_title">{{title}}</span>
          </slot>
          <!-- <button class="gl-dialog_headerbtn" icon="gl-icon-close" circle @click="handleClose"> -->
          <gl-close-button class="gl-dialog_headerbtn" circle @click="handleClose">
          </gl-close-button>
        </div>
        <div class="gl-dialog_body">
          <slot></slot>
        </div>
        <div class="gl-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import closeButton from './gl-close-button.vue'
export default {
  components: { closeButton },
  name: 'gl-dialog',
  emits: ['close'],
  props: {
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
    visible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleClose () {
      $emit('update:visible', false)
      console.log(visible)
    },
    handleOpen () {
      this.$emit('update:visible', true)
      console.log(this.visible)
    }
  }
}
</script>

<style lang='scss' scoped>
.gl-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .gl-dialog{
    position: relative;
    margin: 15vh auto 50px;
    border: 2px solid #FFFFFF;
    background: #FFFFFF4D;
    backdrop-filter: blur(10px) brightness(110%);
    border-radius: 20px;
    // box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      border-bottom: 2px solid #FFFFFF;
      .gl-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #FFFFFF;
      }
      .gl-dialog_headerbtn{
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
        &:hover{
          color: #FFFFFF;
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #FFFFFF;
      font-size: 18px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .gl-button:first-child{
        margin-right: 20px;
      }
    }
  }
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
