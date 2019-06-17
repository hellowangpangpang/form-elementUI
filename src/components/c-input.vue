<template>
  <el-input
    v-model.lazy="value"
    @change="handleChange"
  />
</template>

<script>
export default {
  props: {
    account: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      value: ""
    };
  },
  computed: {
    _account() {
      return this.account;
    }
  },
  watch: {
    _account: {
      handler(cur) {
        this.value = cur;
      },
      immediate: true
    }
  },
  methods: {
    handleChange() {
      this.$emit("handle-change", this.value);
      this.$emit("kk", 1223);
    }
  }
};
</script>
