<template>
    <div class="container">
        <div v-if="visible" class="gl-modal">
            <span class="title">
                <svg t="1632630711971" class="icon-warning" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2423" width="15" ><path d="M512 68.272C266.928 68.272 68.272 266.928 68.272 512S266.928 955.728 512 955.728 955.728 757.072 955.728 512 757.072 68.272 512 68.272zM512 0c282.768 0 512 229.232 512 512 0 282.768-229.232 512-512 512C229.232 1024 0 794.768 0 512 0 229.232 229.232 0 512 0z m-34.128 307.2a34.128 34.128 0 1 1 68.256 0V512a34.128 34.128 0 1 1-68.256 0V307.2z m0 389.12a34.128 34.128 0 1 1 68.256 0v40.96a34.128 34.128 0 1 1-68.256 0v-40.96z" p-id="2424" fill="#ffffff"></path></svg>
                {{getTitle}}
            </span>
            <div class="btns">
                <button class="gl-button" @click = "cancel">
                <span>
                {{getCancel}}
                </span>
                </button>
                <button class="gl-button"  @click = "confirm" >
                <span>
                {{getConfirm}}
                </span>
                </button>
            </div>
        </div>
        <div class="msg"  @click = 'visible = !visible'>
        <slot>自定义的对话框内容</slot>
        {{props.visible}}
        </div>
    </div>
</template>

<script setup>
import { defineProps, computed, ref, defineEmits } from 'vue'
const props = defineProps({
  width: {
    type: Number,
    default: 200
  },
  title: {
    type: String,
    default: '标题'
  },
  comfirm: {
    type: String,
    default: 'comfirm'
  },
  cancel: {
    type: String,
    default: 'cancel'
  }
})
const emits = defineEmits(['confirm', 'acncel'])
const cancel = () => {
  visible.value = false
  emits('cancel')
}
const confirm = () => {
  visible.value = false
  emits('confirm')
}
const visible = ref(true)
const width = computed(() => props.width + 'px')
const getTitle = computed(() => props.title)
const getCancel = computed(() => props.cancel)
const getConfirm = computed(() => props.comfirm)
</script>

<style scoped>
* {
    border: 0;
    padding: 0;
    margin:0;
    box-sizing: border-box;
}
.container {
    box-sizing: border-box;
    padding-top: 130px;
    justify-content: center;
    position: relative;
    height: 200px;
    width: 100%;
}
.gl-modal {
    width: v-bind(width);
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    position: absolute;
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    z-index: 10086;
    transform: translateY(-80px);
    padding: 0px 8px;
    padding-bottom: 5px;
}
.gl-modal:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    right: 45%;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 9.5px );
    -webkit-backdrop-filter: blur( 9.5px );
    height: 12px;
    width: 12px;
    transform: rotate(45deg) translateY(80%);
    z-index: -1;
}
span {
    box-sizing: border-box;
    padding-top: 3px;
    display: block;
    width: 100%;
    text-align: left;
    padding:0 5%;
}
.msg {
    justify-content: center;
    text-align: center;
    width: v-bind(width);
    cursor: pointer;
}

.gl-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border-color:rgba(255, 255, 255, 0);
  border-top: #FFF 0px solid;
  border-radius: 20px;
  color: #FFF;
  background: rgba(255, 255, 255, 0);
  backdrop-filter: blur(6px);
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  user-select: none;
  outline: none;
  margin: 0;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 20px;
  transition: all .4s;
  padding: 3px 5px;
}
.gl-button:hover, .gl-button:focus {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.is-rect {
  border-radius: 3px;
}
.is-circle {
  border-radius: 50%;
  padding: 12px;
  border-color: rgba(255, 255, 255, 0);
}

.btns {
    display: flex;
    justify-content: space-around;
}
.title {
    padding: 8px 0;
    color: white;
}
.icon-warning {
    width: 15px;
}
</style>
