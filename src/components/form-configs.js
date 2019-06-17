import CInput from './c-input.vue'

export const formConfigs = [
  {
    type: 'input',
    formItemProp: {
      label: '活动名称',
      prop: 'activeName',
    },
    elementProp: {
      size: 'mini',
    },
  },
  {
    type: 'select',
    formItemProp: {
      label: '活动区域',
      prop: 'activeArea',
    },
    optionList: [
      {
        label: '区域一',
        value: '1',
      },
      {
        label: '区域二',
        value: '2',
      },
    ],
  },
  {
    type: 'datePicker',
    formItemProp: {
      label: '活动名称',
      prop: 'activeTime',
    },
    elementProp: {
      type: 'date',
      placeholder: '选择日期',
    },
  },
  {
    type: 'switch',
    formItemProp: {
      label: '及时配送',
      prop: 'instantDelivery',
    },
    elementProp: {},
  },
  {
    type: 'checkboxGroup',
    formItemProp: {
      label: '活动性质',
      prop: 'activeType',
    },
    elementProp: {},
    optionList: [
      {
        label: '美食/餐厅线上活动',
      },
    ],
  },
  {
    type: 'radioGroup',
    formItemProp: {
      label: '特殊资源',
      prop: 'resource',
    },
    elementProp: {},
    optionList: [
      {
        label: '线上品牌商赞助',
      },
      {
        label: '线下场地免费',
      },
    ],
  },
  {
    type: 'input',
    formItemProp: {
      label: '活动形式',
      prop: 'desc',
    },
    elementProp: {
      type: 'textarea',
    },
  },
  {
    type: 'extend',
    formItemProp: {
      label: '账号',
      prop: 'account',
    },
    elementProp: {
      component: CInput,
      propsHandle: () => {
        return {
          ggg: 123,
        }
      },
      listeners: {
        kk: data => {
          console.log(data)
        },
      },
    },
  },
]
export const formData = {
  activeName: '123',
  activeArea: '2',
  activeTime: '',
  instantDelivery: true,
  activeType: [],
  resource: '',
  desc: 'desc',
  account: 'aaa',
}
