<template>
  <a-layout-sider :width="80" v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" />
  </a-layout-sider>
</template>

<script lang="ts">
import { Layout } from 'ant-design-vue';

export default {
  components: {
    ALayoutSider: Layout.Sider
  },
  data() {
    return {
      collapsed: false
    };
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
