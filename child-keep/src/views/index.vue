<template>
    <div class="home">
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="footer-tab">
            <router-link v-for='(val,i) in tab' :key='i' :to='val.link' active-class="active">
                <svg-icon :iconClass="$route.path === val.link?val.icon+'_active':val.icon"></svg-icon>
                <span class="tit">{{val.tit}}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tab: [
        {
          link: '/assis',   
          tit: '育儿助手',
          icon: 'toolbox'
        },
        {
          link: '/learn',
          tit: '爸妈学医',
          icon: 'study'
        },
        {
          link: '/ques',
          tit: '问医生',
          icon: 'ask'
        },
        {
          link: '/vip',
          tit: '会员中心',
          icon: 'mine'
        }
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
    .home{
        width: 100%;
        height: 100%;
    }
    .main{
        flex: 1
    }
    .footer-tab{
        width: 100%;
        height: 70px;
        // line-height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        a{
            text-decoration: none;
            color: black;
            display:inline-block;
            width: 24%;
            text-align: center;
            padding: 10px 0;
            .tit{
                display: block;
                font-size: 12px;
            }
        }
        .active{
            color: #F16360;
            font-weight: bold;
        }
    }
</style>
