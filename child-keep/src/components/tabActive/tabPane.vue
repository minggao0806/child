<template>
  <div v-if="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    // label: {
    //   type: String,
    //   default: '',
    //   require: true
    // }
  },
  data () {
    return {
      isShow: false,
      add: '111111'
    }
  }
}
</script>

<style>

</style>
