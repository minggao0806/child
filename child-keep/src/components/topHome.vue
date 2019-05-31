<template>
  <div class="top">
    <router-link :to='val.link' v-for="(val,i) in topChoose" :key="i" class="my-dl">
      <div class="icon-div" :style="{background:val.color}">
        <svg-icon :iconClass="val.icon"></svg-icon>
      </div>
      <span>
        {{val.tit}}
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['topChoose']
}
</script>

<style lang="scss" scoped>
.top{
  display: flex;
  a{
    flex: 1;
    @include flex();
    .icon-div{
      @include wh(50%, 60px);
      text-align: center;
      line-height: 70px;
      border-radius: 50%;
      background: #ccc;
      margin-bottom: 5px;
    }
    span{
      text-align: center;
      color: #3A3A3A;
      font-size: 12px;
    }
  }
}
</style>
