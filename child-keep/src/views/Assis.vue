<template>
    <div>
        <div class="header">
            <TopHome :topChoose='topChoose'/>
        </div>
        <div>
            <Tabs @getList='getList' :fix='fix'>
              <TabPane label="精彩文章">
                <!-- 第一个标签页 -->
              </TabPane>
              <TabPane label="安全用药">
                <!-- 第二个标签页 -->
              </TabPane>
            </Tabs>
        </div>
        <div>
            <List
              :list='list'
              @down='down'
              title-name="title"
              description-name="description"
              imgUrl='cover'
            />
        </div>
    </div>
</template>

<script>
import {Tabs, TabPane} from '@/components/tabActive'
import TopHome from '@/components/topHome'
import axios from 'axios'
import List from '@/components/list'
export default {
  data () {
    return {
      list: [],
      start: 0,
      fix: false,
      id: 2,
      topChoose: [
        {
          tit: '儿童药箱',
          icon: 'add',
          color: '#FEB92F',
          link: '/child'
        },
        {
          tit: '附近药店',
          icon: 'store',
          color: '#BC57EA',
          link: '/store'
        },
        {
          tit: '智能医生',
          icon: 'doctor',
          color: '#FF5C71',
          link: '/doctor'
        }
      ]
    }
  },
  created () {
    console.log(this.list)
    this.getList(this.id, 0)
  },
  mounted () {
    window.addEventListener('scroll', this.watchScroll)
  },

  components: {
    Tabs,
    TabPane,
    List,
    TopHome
  },
  methods: {
    watchScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 90) {
        this.fix = true
      } else {
        this.fix = false
      }
    },

    getList (num, start) {
      axios.get('/api/user/login-test')
      axios.get('/api/article/list', {
        params: {
          limit: 20,
          offset: start,
          type_id: num
        }
      }).then((res) => {
        this.list = res.data
        console.log(this.list)
      })
    },
    getText (i) {
      this.id = i
      console.log(i)
      this.getList(i, this.start)
    },
    getMore (num, start) {
      let arr = [...this.list]
      axios.get('/api/user/login-test')
      axios.get('/api/article/list', {
        params: {
          limit: 20,
          offset: start,
          type_id: num
        }
      }).then((res) => {
        this.list = arr.concat(res.data)
        console.log(this.list)
      })
    },
    down () {
      this.getMore(this.id, this.start + 10)
    }
  }
}
</script>

<style>
    .header{
        width: 100%;
        height: 100px;
        border-bottom: 1px solid #ccc;
    }
</style>
