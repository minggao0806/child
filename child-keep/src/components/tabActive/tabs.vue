<template>
  <div class="tab">
    <header class="tab-header">
      <nav :class="fix?'fixe nav':'nav'">
        <a v-for="(val,i) in menu" :key="i" @click="activeView(i)">
          <span :class="{active: i === activeIndex}">{{val}}</span>
        </a>
      </nav>
    </header>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['fix'],
  data () {
    return {
      activeIndex: 0,
      menu: []
    }
  },
  mounted () {
    this.initMenu()
    console.log(this.menu)
  },
  methods: {
    initMenu () {
      console.log(this.$children)
      this.menu = this.$children.map(child => child.$attrs.label)
      this.$children[this.activeIndex].isShow = true
    },
    activeView (i) {
      console.log(i)
      let id = i === 0 ? 2 : 1
      this.$emit('getList', id)
      this.activeIndex = i
      this.$children.forEach((child, ind) => {
        if (ind === i) {
          this.$children[i].isShow = true
        } else {
          this.$children[ind].isShow = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/index.scss';
  .tab{
    @include wh(100%,auto);
    .tab-header{
      @include wh(100%,44px);
      .fixe{
        width: 100%;
        height: 44px;
        position: fixed;
        top: 0;
        left: 0;
      }
      .nav{
        @include flex(row);
        line-height: 44px;
        background: #fff;
        a{
          flex: 1;
          font-size: 16px;
          text-align: center;
          color: #8B8B8B;
          span{
            width: 60%;
            display: inline-block;
            &.active{
              color: #3A3A3A;
              font-weight: bold;
              border-bottom: 3px solid #F16360;
            }
          }
        }
      }
    }
  }
</style>
