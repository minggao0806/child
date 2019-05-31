<template>
  <div class="child">
    <Inp :place='holder' :icon='search' :btn='btn'/>
    <h4 class="tit">儿童安全用药</h4>
    <med-classify :classify='classify' @active='active'/>
    <div class="hr"/>
    <List :list='choose' title-name="common_name" descriptionName="element" @click="toDetail" @down='down'/>
  </div>
</template>

<script>
import Inp from '@/components/inp'
import MedClassify from '@/components/medClassify'
import {get} from '@/utils/request'
import List from '@/components/list'
export default {
  data () {
    return {
      holder: '查询药品',
      classify: [],
      search: 'search',
      defaultCla: '发热感冒药',
      btn: '搜索',
      medList: [],
      choose: [],
      query: {
        offset: '0',
        limit: '10',
        category_name: this.defaultCla
      }
    }
  },
  components: {
    Inp,
    MedClassify,
    List
  },
  created () {
    get('/api/medicine/info').then((res) => {
      let arr = []
      res.category_list.forEach((ele, i) => {
        let obj = {}
        if (ele === '外用药') {
          obj['type'] = ele
        } else if (ele === '其他') {
          obj['type'] = ele + '药物'
        } else {
          obj['type'] = ele + '药'
        }
        if (i === 0) {
          obj['img'] = require(`@/assets/img/${i + 1}_1.png`)
        } else {
          obj['img'] = require(`@/assets/img/${i + 1}.png`)
        }
        obj['imgActive'] = require(`@/assets/img/${i + 1}_1.png`)
        arr.push(obj)
      })
      this.classify = arr
    })
    this.query = {
      offset: '0',
      limit: '10',
      category_name: '发热感冒药'
    }
    console.log(this.defaultCla)
    this.getList(this.query)
    console.log(this.query)
  },
  methods: {
    active (i) {
      let arr = [...this.classify]
      // 点击图片高亮
      arr.forEach((el, ind) => {
        if (ind === i) {
          el.img = require(`@/assets/img/${i + 1}_1.png`)
        } else {
          el.img = require(`@/assets/img/${ind + 1}.png`)
        }
      })
      this.classify = arr
      // 获取点击的文字
      this.defaultCla = arr[i].type
      this.query = {...this.query, offset: '0', category_name: this.defaultCla}
      this.getList(this.query)
      // this.$store.state.medChoose = list
      // console.log(this.$store.state)
    },
    getList (query) {
      get('/api/medicine/list', query).then((res) => {
        this.choose = res
      })
    },
    toDetail (id) {
      this.$store.state.med_id = id
      console.log(this.$store.state)
      this.$router.push('/meddetail')
    },
    down () {
      let {limit} = this.query
      this.query = {...this.query, limit: limit * 1 + 10}
      console.log(this.query)
      this.getList(this.query)
      console.log('到底了')
    }
  }
}
</script>

<style lang="sass" scoped>
.child{
  background: #fff;
  .tit{
    margin: 5px 19px;
  }
  .hr{
    @include wh(100%, 7px);
    background: $color-hr;
  }
}
</style>
