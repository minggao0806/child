<template>
  <div class="list">
    <dl v-for="(val,i) in classify" :key="i" class="my-dl" @click="active(i)">
      <dt class="my-dt">
        <img :src = 'val.img' alt="" class="img">
      </dt>
      <dd>{{val.type}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  props: {
    classify: {
      type: Array,
      require: true
    }
  },
  methods: {
    active (i) {
      this.$emit('active', i)
    }
  }
}
</script>

<style lang="scss" scoped>
  .list{
    // @include flex(row);
    display: flex;
    flex-wrap: wrap;
    .my-dl{
      width: 24%;
      margin: 0;
      margin-top: 15px;
      padding: 0;
      @include flex(column);
      .my-dt{
        width: 60%;
        .img{
          width: 100%;
        }
      }
    }
  }
</style>
