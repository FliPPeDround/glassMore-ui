<template>
  <input
    type="checkbox"
    class="switch"
    :class="{ disabled: disabled }"
    :style="{ backgroundColor: isChecked ? activeColor : inactiveColor }"
    :disabled="disabled"
    v-model="isChecked"
    @change="handChange"
  />
</template>

<script>
import { ref } from '@vue/runtime-core'
export default {
  name: 'gl-switch',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: 'rgba(118,227,149,0.9)'
    },
    inactiveColor: {
      type: String,
      default: 'rgba(255,255,255,0.5)'
    }
  },
  setup (props, { emit }) {
    const isChecked = ref(props.modelValue)
    const handChange = () => {
      emit('update:modelValue', isChecked)
    }
    return {
      isChecked,
      handChange
    }
  }
}
</script>

<style>
.switch {
  /*checkbox样式*/
  position: relative;
  box-sizing: border-box;
  width: 50px;
  height: 20px;
  border: 1px solid rgba(255, 255, 255, 75%);
  background: rgba(255, 255, 255, 0.5);
  border-radius: 40px;
  backdrop-filter: blur(6px);
  appearance: none;
}

.switch::after {
  content: ' ';
  position: absolute;
  left: 1px;
  top: 1px;
  width: 16px;
  height: 16px;
  background: #fff;
  border-radius: 20px;
  transition: left 0.3s ease;
}

.switch:checked::after {
  left: 31px;
  transition: left 0.3s ease;
}

.disabled {
  border: 1px solid rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.5);
}
</style>
