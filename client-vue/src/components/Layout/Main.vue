<template>
  <a-layout id="wrapper">
    <sidebar />
    <a-layout>
      <a-layout-content>
        <slot />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { Layout } from 'ant-design-vue';
import Sidebar from './Sidebar';

export default {
  components: {
    ALayout: Layout,
    ALayoutContent: Layout.Content,
    Sidebar
  }
};
</script>

<style lang="scss">
#wrapper {
  min-height: 100%;

  .ant-layout-content {
    margin: 24px;
    padding: 24px;
    background: #fff;
    min-height: 280px;
  }
}
</style>
