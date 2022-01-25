<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <el-option
      v-for="item in formOptions"
      :label="item.label"
      :value="item.value"
      :key="item.value"
    ></el-option>
  </el-select>
</template>

<script type="text/ecmascript-6">
export default {
    data () {
        return {
          formOptions: []
        }
    },
    inject: ["schema"],
    created () {
      let {getOptions} = this.schema;
      getOptions && getOptions().then(res=>{
        this.formOptions = res;
        console.log(res);
      })
    },
    mounted () { },
    methods: {},
    components: {}
}
</script>

<style lang="scss" scoped></style>
