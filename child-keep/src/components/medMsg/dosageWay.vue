<template>
  <p class="text">
    <b v-if='title'>{{title}}：</b>
    {{text}}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
      require: true
    },
    title: {
      type: String,
      default: '',
      require: false
    }
  },
  created () {
    console.log(this.title)
  }
}
</script>

<style lang="scss" scoped>
  .text{
    margin: 20px 20px;
    font-size: 18px;
    line-height: 2rem;
  }
</style>
