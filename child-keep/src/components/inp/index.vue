<template>
  <div class="search">
    <input :placeholder="place" class="inp"/>
    <svg-icon :iconClass='icon'></svg-icon>
    <button v-if="btn" class="btn">{{btn}}</button>
  </div>
</template>

<script>
export default {
  props: {
    place: {
      type: String
    },
    icon: {
      type: String
    },
    btn: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .inp{
    @include wh(90%, 40px);
    border: 1px solid #ccc;
    margin: 15px 5%;
    border-radius: 20px;
  }
  ::-webkit-input-placeholder{
    padding-left: 40px;
    font-size: 14px;
    line-height: 40px;
  }
  .search{
    position: relative;
  }
  .svg-icon{
    position: absolute;
    top: 23px;
    left: 7%;
  }
  .btn{
    @include wh(70px, 33px);
    color: #fff;
    border-radius: 20px;
    position: absolute;
    top: 19px;
    right: 6%;
  }
</style>
