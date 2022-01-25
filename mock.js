const data = [
  {
    label: "活动名称",
    element: {
      type: "input",
      attrs: {
        placeholder: "input渲染",
        disabled: false,
      },
      events: {
        blur() {},
      },
    },
    formValue: "",
    formKey: "name",
    formValidate: "",
    dataType: "Object/String/Array",
    defaultValue: "",
    linkage: [
      {
        linkageKey: "",
        linkageValue: "",
        linkageEvent: "",
      },
    ],
  },
  {
    label: "活动区域",
    element: {
      type: "select",
      attrs: {
        placeholder: "select渲染",
        disabled: false,
      },
      events: {
        blur() {},
      },
    },
    getOptions() {
      return Promise.resolve([
        {
          label: "足球场",
          value: 0,
        },
        {
          label: "室内",
          value: 1,
        },
      ]);
    },
    formValue: "",
    formKey: "region",
    dataType: "Object/String/Array",
    defaultValue: "",
    linkage: [
      {
        linkageKey: "",
        linkageValue: "",
        linkageEvent: "",
      },
    ],
  },
];
export default data;
