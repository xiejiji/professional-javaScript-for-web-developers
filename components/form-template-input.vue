<template>
  <el-input v-bind="$attrs" v-on="$listeners"></el-input>
</template>

<script>
export default {
  data() {
    return {
      formValue: null,
    };
  },
  props: {},
  inject: ["schema"],
  created() {
    this.formValue = this.value;
  },
  mounted() {
    console.log(this.schema);
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped></style>
