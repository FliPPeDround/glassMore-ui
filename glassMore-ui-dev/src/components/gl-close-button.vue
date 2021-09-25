<template>
  <button class="gl-icon-close" icon="gl-icon-close">
       <i v-if="icon"></i>
      <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
 
<script>
 
export default {
  name: 'gl-close-button'
}
 
</script>
 
<style lang="scss" scoped>
 
</style>