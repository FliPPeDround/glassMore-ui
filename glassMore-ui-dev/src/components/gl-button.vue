<template>
  <button
    class="gl-button"
    :class="[
      {
        'is-rect': rect,
        'is-circle': circle,
      }
    ]"
    >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
defineProps({
  rect: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  }
})
</script>

<style scoped>
.gl-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  border-color:rgba(255, 255, 255, 0);
  border-top: #FFF 0.5px solid;
  border-radius: 20px;
  color: #FFF;
  background: rgba(255, 255, 255, 0.3);
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

.gl-button [class*=gl-icon-]+span {
  margin-left: 5px;
}
</style>