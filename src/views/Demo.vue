<template>
  <div>
    <base-form
      ref="baseForm"
      :form-configs="formConfigs"
      :form-data="formData"
      label-position="right"
      label-width="120px"
    />
    <el-button @click="ok">
      ok
    </el-button>
  </div>
</template>

<script>
import BaseForm from "../components/base-form.vue";
import { formConfigs, formData } from "../components/form-configs.js";
export default {
  components: {
    "base-form": BaseForm
  },
  data() {
    return {
      formConfigs,
      formData
    };
  },
  methods: {
    ok() {
      this.$refs.baseForm.validate(data => {
        console.log(data);
      });
    }
  }
};
</script>
