<template>
    <div>
        <div class="msg">
            <div class="msg-info">
              <List :list='userInfo' titleName='username'/>
            </div>
        </div>
        <div>
            <VipList :list='list'></VipList>
        </div>
    </div>
</template>

<script>
// import { get } from '@/utils/request'
import VipList from '@/components/vip/vipList'
import List from '@/components/list'
export default {
  components: {
    VipList,
    List
  },
  data () {
    return {
      userInfo: [],
      list: [
        {
          tit: '孩子信息',
          icon: 'child',
          enter: true
        },
        {
          tit: '积分兑换',
          icon: 'gift',
          enter: true
        },
        {
          tit: '我的订单 ',
          icon: 'order',
          enter: true
        },
        {
          tit: '分享海报',
          icon: 'share',
          enter: true
        }
      ]
    }
  },
  created () {
    console.log(this.$store.state.info)
    this.userInfo = this.$store.state.info
  }
}
</script>

<style>
    .msg{
        width: 100%;
        height: 180px;
        background: #E7534A;
        overflow: hidden;
    }
</style>
