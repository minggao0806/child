<template>
  <div>
    <List :list='arr' imgUrl='picture' titleName="common_name" descriptionName='indication'/>
    <Tabs>
      <TabPane label='基本信息'>
        <base-msg :msgObj='msgArr'></base-msg>
      </TabPane>
      <TabPane label='注意事项'>
        <base-msg :msgObj='noticeMsg'></base-msg>
      </TabPane>
      <TabPane label='用法用量'>
        <dosage-way :text='dosage'></dosage-way>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import { get } from '@/utils/request'
import List from '@/components/list'
import { Tabs, TabPane } from '@/components/tabActive'
import DosageWay from '@/components/medMsg/dosageWay'
import BaseMsg from '@/components/medMsg/baseMsg'
export default {
  data () {
    return {
      med_id: '',
      arr: [],
      dosage: '',
      notice: '',
      title: '注意事项',
      msgArr: [],
      noticeMsg: []
    }
  },
  components: {
    List,
    Tabs,
    TabPane,
    DosageWay,
    BaseMsg
  },
  created () {
    this.med_id = this.$store.state.med_id
    this.getDetail(this.med_id)
  },
  methods: {
    getDetail (id) {
      console.log(id)
      get('/api/medicine/details', {medicine_id: id}).then((res) => {
        this.arr = [res]
        console.log(this.arr)
        this.dosage = this.arr[0].dosage
        this.notice = this.arr[0].precautions
        let obj = this.arr[0]
        let arr = [
          {
            name: '通用名',
            type: obj.common_name
          },
          {
            name: '商品名称',
            type: obj.medicine_name
          },
          {
            name: '分类名称',
            type: obj.category_name
          },
          {
            name: '药物分类',
            type: obj.drug_category
          },
          {
            name: '是否OTC',
            type: obj.is_otc
          },
          {
            name: '规格',
            type: obj.specification
          },
          {
            name: '药品成分',
            type: obj.element
          },
          {
            name: '生产企业',
            type: obj.manufacturer
          },
          {
            name: '批准文号',
            type: obj.approval_number
          }
        ]
        this.msgArr = arr
        let notice = [
          {
            name: '注意事项',
            type: obj.precautions
          },
          {
            name: '禁忌',
            type: obj.taboo
          },
          {
            name: '不良反应',
            type: obj.adverse_reaction
          },
          {
            name: '药物相互作用',
            type: obj.interactions
          }
        ]
        this.noticeMsg = notice
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
