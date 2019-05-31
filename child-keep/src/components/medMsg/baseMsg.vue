<template>
  <div>
    <div v-for="(val,i) in msgObj" :key="i">
      <dosage-way :text='val.type' :title='val.name'></dosage-way>
    </div>
  </div>
</template>

<script>
import DosageWay from '@/components/medMsg/dosageWay'
export default {
  props: {
    msgObj: {
      type: Array,
      require: true
    }
  },
  components: {
    DosageWay
  },
  created () {
    console.log(this.msgObj, '00000')
  }
}
</script>

<style>

</style>
