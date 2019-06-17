<template>
  <div class="content">
    <el-form
      ref="form"
      :model="form"
      v-bind="formBind"
      v-on="$listeners"
    >
      <el-form-item
        v-for="(item,key) in formConfigs"
        :key="key"
        v-bind="getFormItemBind(item.formItemProp)"
      >
        <el-input
          v-if="item.type == 'input'"
          v-bind="getElementBind(item.elementProp)"
          v-model="form[item.formItemProp.prop]"
        />
        <el-select
          v-else-if="item.type==='select'"
          v-bind="getElementBind(item.elementProp)"
          v-model="form[item.formItemProp.prop]"
        >
          <el-option
            v-for="opt in item.optionList"
            :key="opt.label"
            v-bind="opt"
          />
        </el-select>
        <el-date-picker
          v-else-if="item.type==='datePicker'"
          v-bind="getElementBind(item.elementProp)"
          v-model="form[item.formItemProp.prop]"
        />
        <el-switch
          v-else-if="item.type === 'switch'"
          v-bind="getElementBind(item.elementProp)"
          v-model="form[item.formItemProp.prop]"
        />
        <el-checkbox-group
          v-else-if="item.type==='checkboxGroup'"
          v-bind="getElementBind(item.elementProp)"
          v-model="form[item.formItemProp.prop]"
        >
          <el-checkbox
            v-for="opt in item.optionList"
            :key="opt.label"
            v-bind="opt"
          />
        </el-checkbox-group>
        <el-radio-group
          v-else-if="item.type==='radioGroup'"
          v-bind="getElementBind(item.elementProp)"
          v-model="form[item.formItemProp.prop]"
        >
          <el-radio
            v-for="opt in item.optionList"
            :key="opt.label"
            v-bind="opt"
          />
        </el-radio-group>
        <component
          v-else
          :is="item.elementProp.component"
          v-model="form[item.formItemProp.prop]"
          v-bind="getElementBind(item.elementProp)"
          @handle-change="handleChange"
          v-on="item.elementProp.listeners"
        >
        </component>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
    formConfigs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      form: {}
    };
  },
  computed: {
    formBind() {
      const { $attrs } = this;
      return $attrs;
    },
    _formData() {
      return this.formData;
    }
  },
  watch: {
    _formData: {
      handler(cur) {
        this.form = cur;
      },
      immediate: true
    }
  },
  methods: {
    getFormItemBind(props) {
      const bind = Object.assign({}, props);
      return bind;
    },
    getElementBind(props) {
      return (
        (props &&
          props.hasOwnProperty("propsHandle") &&
          props.propsHandle(props)) ||
        props
      );
    },
    // validate
    validate(cb = null) {
      this.$refs.form.validate(valid => {
        if (valid) {
          if (typeof cb === "function") cb(this.form);
        } else {
          return false;
        }
      });
    },
    // reset form value
    reset(callback = null) {
      this.$refs.form.resetFields();
      if (typeof callback === "function") callback();
    },
    handleChange(data) {
      console.log(data);
      this.form.account = data;
    }
  }
};
</script>
<style scoped lang="scss">
.content {
  width: 500px;
}
</style>
