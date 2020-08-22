<template>
  <url-list
    :data="currentData"
    :pagination="showPagination ? pagination : null"
    :loading="loading"
  >
    <url-form @submit="handleSubmit" slot="header" />
  </url-list>
</template>

<script>
import { message } from 'ant-design-vue';

import * as urlClient from '../client/url';

import UrlForm from '../components/UrlShorten/UrlForm';
import UrlList from '../components/UrlShorten/UrlList';

export default {
  components: {
    UrlForm,
    UrlList
  },
  data() {
    return {
      data: {},
      loading: true,
      pagination: {
        pageSize: 10,
        page: 1,
        total: 0,
        onChange: this.fetch
      }
    };
  },
  created() {
    this.fetch();
  },
  computed: {
    showPagination() {
      return this.pagination.total > this.pagination.pageSize;
    },
    activePage() {
      return this.pagination.page;
    },
    currentData() {
      return this.data[this.activePage];
    }
  },
  methods: {
    async fetch(page, limit) {
      this.loading = true;
      try {
        const params = {
          page: page || this.pagination.page,
          limit
        };
        const { results, count: total } = await urlClient.fetchAll(params);
        this.pagination = {
          ...this.pagination,
          page,
          total
        };
        this.data = {
          ...this.data,
          [page]: results
        };
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(() => {
          this.loading = false;
        }, 200);
      }
    },
    async handleSubmit({ url }) {
      try {
        await urlClient.makeShortUrl({ url });
        this.fetch();
      } catch (e) {
        console.log(e.json);
        message.error(e.json.msg);
      }
    }
  }
};
</script>
