<template>
  <a-list size="large" bordered :data-source="data" v-bind="$attrs">
    <a-list-item slot="renderItem" slot-scope="item">
      <div slot="actions">
        <a-badge showZero :count="item.accessCount" />
      </div>
      <a-list-item-meta>
        <div slot="description">ID: #{{ item.short }}</div>
        <a slot="title" target="_blank" :href="getHref(item)">
          {{ item.long }}
        </a>
      </a-list-item-meta>
    </a-list-item>
    <div slot="header">
      <slot name="header" />
    </div>
  </a-list>
</template>

<script>
import { List, Badge } from 'ant-design-vue';

export default {
  components: {
    AList: List,
    AListItem: List.Item,
    AListItemMeta: List.Item.Meta,
    ABadge: Badge
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getHref(item) {
      const baseURL = process.env.VUE_APP_API_URL;
      return `${baseURL}/url/${item.short}`;
    }
  }
};
</script>
<style lang="scss">
.ant-list {
  min-height: 100%;

  .ant-list-item {
    a {
      text-decoration: underline;
    }
  }
}
</style>
