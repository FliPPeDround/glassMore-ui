<template>
  <div
    class="gl-input"
    :class="[
      {'gl-input--suffix': showSuffix},
      {'gl-input--prefix': icon}
    ]"
  >
    <span class="gl-input__prefix" v-if="props.icon">
      <i :class="props.icon"></i>
    </span>
    <input
      class="gl-input__inner"
      :class="{
        'is-disabled': props.disabled
      }"
      :placeholder="props.placeholder"
      :type="props.type"
      :name="props.name"
      :disabled="props.disabled"
      :value="props.modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span class="gl-input__suffix" v-if="showSuffix">
      <i
        class="el-icon-close"
        v-if = "props.clearable && props.modelValue"
        @click="$emit('update:modelValue', '')"></i>
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({ // eslint-disable-line no-undef
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})
const showSuffix = computed(() => props.clearable)
</script>

<style scoped>
.gl-input{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  backdrop-filter: blur(6px);
}
.gl-input__inner{
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border: rgba(255, 255, 255, 0) solid 1px;
  border-top: rgb(255, 255, 255) solid 1px;
  border-radius: 8px;
  box-sizing: border-box;
  color: #FFF;
  display: inline-block;
  font-size: inherit;
  height: 45px;
  line-height: 45px;
  outline: none;
  padding: 0 15px;
  width: 100%;
}
.gl-input__inner::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.is-disabled {
  background: rgba(0, 0, 0, 0.15);
  border: rgba(0, 0, 0, 0.15) solid 1px;
  color: rgba(0, 0, 0, 0.5);
  cursor: not-allowed;
}
.is-disabled::-webkit-input-placeholder {
  color: rgba(0, 0, 0, 0.5);
}

.gl-input--suffix > .gl-input__inner {
  padding-right: 30px;
}
.gl-input--suffix > .gl-input__suffix{
  padding-right: 8px;
  position: absolute;
  right: 10px;
  height: 100%;
  top: 0;
  line-height: 45px;
  text-align: center;
  transition: all .3s;
  z-index: 900;
}
.gl-input__suffix i{
  color: #000;
  font-size: 20px;
  cursor: pointer;
  transition: color .2s cubic-bezier(.645,.045,.355,1);
}
.gl-input--prefix > .gl-input__inner {
  padding-left: 45px;
}
.gl-input--prefix > .gl-input__prefix{
  position: absolute;
  padding-left: 10px;
  padding-right: 10px;
  height: 100%;
  top: 0;
  line-height: 45px;
  text-align: center;
  transition: all .3s;
  z-index: 900;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: rgba(255, 255, 255, 0.3);
}
.gl-input__prefix i{
  font-size: 18px;
}
</style>
