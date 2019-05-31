<template>
  <div>
    <div v-for="(val,i) in list" :key="i" class="list">
      <svg-icon v-if='val.icon' :iconClass="val.icon" class="icon"></svg-icon>
      <span>{{val.tit}}</span>
      <i v-if="val.enter">></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style lang='scss' scoped>
@import '@/assets/scss/index.scss';
  .list{
    @include wh(100%,50px);
    padding: 10px 20px;
    span{
      display: inline-block;
      width: 80%;
      margin: -7px 8px;
    }
  }
</style>
