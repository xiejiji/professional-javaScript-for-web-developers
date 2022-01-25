<template>
  <div class="form-template">
    <component
      v-if="schema"
      :is="renderElement"
      v-model="formValue"
      v-bind="schema.element.attrs"
      v-on="schema.element.events"
    ></component>
    <div>{{ formValue }}</div>
  </div>
</template>

<script>
import forTemplateInput from "./form-template-input.vue";
import forTemplateSelect from "./form-template-select.vue";
export default {
  name: "form-template",
  components: {
    forTemplateInput,
    forTemplateSelect,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
  provide() {
    return {
      schema: this.schema,
    };
  },
  data() {
    return {
      elementEnum: {
        input: forTemplateInput,
        select: forTemplateSelect,
      },
      formValue: null,
    };
  },
  computed: {
    renderElement() {
      const {
        element: { type, attrs },
      } = this.schema;
      console.log(this.$attrs, attrs);
      return this.elementEnum[type];
    },
  },
  created() {
    ({ formValue: this.formValue } = this.schema);
  },
  mounted() {
    console.log(this.formEvents);
  },
  methods: {},
  watch: {
    formValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
