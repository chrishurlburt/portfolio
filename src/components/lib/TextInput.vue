<template>
  <div class="text-input" :class="{ focused }">
    <div class="input-wrap">
      <span class="input-placeholder">{{ placeholder }}</span>
      <input type="text" @focusout="focusOut" @focus="focusIn">
    </div>
    <span class="input-right input-border"></span>
    <span class="input-top input-border"></span>
    <span class="input-left input-border"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focused: false
    }
  },
  methods: {
    focusOut() {
      this.focused = false
    },
    focusIn() {
      this.focused = true
    }
  },
  props: {
    placeholder: {
      type: String,
    }
  }
}
</script>
