<template>
    <div @touchstart="touchStart($event)" @touchmove="touchMove($event)" class="wrap" ref="box">
        <div v-if='list' v-for="(val,i) in list" :key='i' class="dl-list" @click="toDetail(val.medicine_id)">
            <dl class="my-dl">
                <dt class="cover-img">
                    <img :src="val[imgUrl]" alt="">
                </dt>
                <dd class="text-con">
                    <h4>{{val[titleName]}}</h4>
                    <p class="p-con">{{val[descriptionName]}}</p>
                </dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
  name: 'list',
  props: {
    list: {
      type: Array
    },
    titleName: {
      type: String,
      default: 'title'
    },
    descriptionName: {
      type: String,
      default: 'specification'
    },
    imgUrl: {
      type: String,
      default: 'picture'
    }
  },
  data () {
    return {
      startY: 0,
      arr: []
    }
  },
  methods: {
    touchStart (e) {
      this.startY = e.targetTouches[0].pageY
      console.log(this.startY)
    },
    touchMove (e) {
      if (e.targetTouches[0].pageY < this.startY) { // 上拉
        this.judgeScrollBarToTheEnd()
        console.log(e.targetTouches[0].pageY)
      }
    },
    judgeScrollBarToTheEnd () {
      let innerHeight = document.querySelector('.wrap').clientHeight
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      let scrollHeight = document.documentElement.clientHeight || document.body.scrollHeight
      if (scrollTop + scrollHeight >= innerHeight) {
        this.$emit('down')
      }
    },
    toDetail (i) {
      this.$emit('click', i)
    }
  }
}
</script>

<style lang="scss" scoped>
    .my-dl{
      display: flex;
      margin: 10px;
      .cover-img{
        width: 30%;
        img{
          width: 90%;
        }
      }
      .text-con{
        width: 70%;
        overflow: hidden;
        h4{
          width: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          font-size: 16px;
        }
        .p-con{
            margin:6px 0;
            font-size: 12px;
            color: #121212;
        }
      }
    }
    .wrap{
      margin-top: 30px;
    }
</style>
