<template>
  <div class="radioClass">
    <label>
      <input name="radioName" type="radio" :value="value" :disabled="disabled" :checked="checked" @click="toActive">
      <div class="radioText" :class="{active: isActive, disabled: disabled}">
        <slot></slot>
      </div>
    </label>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'gl-radio',
  props: ["value", "disabled", "color", "checked"],
  setup (props) {
    let value = null
    let disabled = false
    let color = "#fff"
    let checked = false
    let currentIndex = ref(0)
    let isActive = ref(false)
    if (props.value) {
      value = props.value
    }
    if (props.color) {
      color = props.color
    }
    if (props.checked === '' || props.checked === "checked") {
      checked = true
    }
    if (props.disabled === '' || props.disabled === "disabled") {
      disabled = true
    }

    function toActive () {
      setTimeout(() => {
        let radioClass = document.getElementsByClassName("radioText")
        for (let i = 0; i < radioClass.length; i++) {
          if (radioClass[i].classList.contains('active')) {
            radioClass[i].classList.remove('active')
          }
        }
        radioClass[currentIndex.value].classList.add("active")
      }, 0)
    }

    onMounted(() => {
      let radioClass = document.getElementsByClassName("radioClass")
      let radioText = document.getElementsByClassName("radioText")

      radioText[currentIndex.value].classList.add("active")
      for (let i = 0; i < radioClass.length; i++) {
        radioClass[i].addEventListener('click', function () {
          currentIndex.value = i
        })
      }
    })

    return {
      value,
      disabled,
      color,
      toActive,
      checked,
      currentIndex,
      isActive
    }
  }
}
</script>

<style scoped>
.radioClass {
  display: inline-block;
}

label {
  display: flex;
  cursor: pointer;
  margin-right: 10px;
  color: #aaa;
}

input[type="radio"] {
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
  appearance: none;
  position: relative;
}

input[type="radio"]::after {
  content: "";
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  margin: 0;
  border-width: 1px;
  border-style: solid;
  border-color: #aaa;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  vertical-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

input[type="radio"]:checked::before {
  content: "";
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-width: 1px;
  border-style: solid;
  border-color: v-bind(color);
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  vertical-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  /* background-color: v-bind(color); */
  /* opacity: 0.15; */
}

input[type="radio"]:checked::after {
  content: "";
  box-sizing: border-box;
  width: 7px;
  height: 7px;
  border-width: 1px;
  border-style: solid;
  border-color: v-bind(color);
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  vertical-align: center;
}

input[type="radio"]:disabled:after {
  border-color: #6f696a;
  background: rgba(0, 0, 0, 0.15);
  cursor: not-allowed;
}

input[type="radio"]:disabled:checked::before,
input[type="radio"]:disabled:checked::after {
  cursor: not-allowed;
  border-color: #6f696a;
  background: rgba(0, 0, 0, 0.15);
}

.active {
  color: v-bind(color);
}

.disabled {
  color: #6f696a !important;
  cursor: not-allowed;
}

.radioText {
  padding-left: 5px;
}
</style>