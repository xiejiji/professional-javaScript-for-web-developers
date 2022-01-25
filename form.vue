<template>
  <div class>
    <el-form :form="form">
      <el-form-item
        v-for="(item, index) in formTemplate.value"
        :key="index"
        :label="item.label"
        :prop="item.formKey"
      >
        {{ item.formKey }}
        <formTemplate
          :schema="item"
          v-model="form[item.formKey]"
        ></formTemplate>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import data from "./mock.js";
import formTemplate from "@/components/form.vue";
export default {
  name: "formDemo",
  components: {
    formTemplate,
  },
  data() {
    return {
      formTemplate: null,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  created() {
    this.formTemplate = new Proxy(
      {},
      {
        get() {
          return [].concat(data);
        },
      }
    );
    console.log(this.formTemplate.value);
  },
  methods: {
    onSubmit() {
      console.log(this.form);
    },
  },
  // mounted(){

  // }
};
</script>
<style lang="scss" scoped></style>
