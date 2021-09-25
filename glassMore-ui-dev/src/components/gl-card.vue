<template>
  <div class="gl-card"  :class="shadow ? 'is-' + shadow + '-shadow' : ''"  :style="{ width: width, height: height }">
    <!-- <div :style="{ width: width, height: height }"> -->
      <div class="gl-card-header">
        <slot name="head">
          <span class="gl-card-head">{{ head }}</span>
        </slot>
      </div>
      <div class="gl-card-body">
        <slot> </slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'glCard',
  props: {
    head: {
      type: String,
      default: 'card'
    },
    width: {
      type: String,
      default: '40vw'
    },
    height: {
      type: String,
      default: 'auto !important;'
    },
    shadow: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.gl-card {
  position: fixed;
  top: 0;
  left: 30vw;
  display: inline-block;
  margin: 15vh auto 50px;
  border: 1px solid #ffffff;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  overflow: hidden;
}
.gl-card-header {
  display: block;
  height: 20px;
  width: 100%;
  padding: 20px 0 20px 20px;
  border-bottom: 1px solid white;
  color: white;
  font-size: 20px;
}
.gl-card-body {
  padding: 20px 20px;
  color: white;
  font-size: 16px;
  word-break: break-all;
  word-wrap: break-word;
}
.is-always-shadow {
  box-shadow: 0 8px 32px 0 rgba(114, 114, 114, 0.37);
  border: 1px solid #ffffff;
}
.is-hover-shadow:hover {
  box-shadow: 0 8px 32px 0 rgba(114, 114, 114, 0.37);
  border: 1px solid #ffffff;
  /* background-color: green; */
}
.is-hover-shadow:focus {
  box-shadow: 0 8px 32px 0 rgba(114, 114, 114, 0.37);
  border: 1px solid #ffffff;
}
</style>
