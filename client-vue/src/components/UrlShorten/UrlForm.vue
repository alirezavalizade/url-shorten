<template>
  <a-form layout="inline" :form="form" @submit="handleSubmit">
    <a-form-item>
      <a-input v-decorator="['url']" placeholder="enter the url" />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" type="primary">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { Form, Input, Button } from 'ant-design-vue';

export default {
  components: {
    AForm: Form,
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button
  },
  data() {
    return {
      form: this.$form.createForm(this, { name: 'url' })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$emit('submit', values);
        }
      });
    }
  }
};
</script>
