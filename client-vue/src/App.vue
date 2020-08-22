<template>
  <main-layout>
    <url-shorten />
  </main-layout>
</template>

<script>
import MainLayout from './components/Layout/Main';
import UrlShorten from './containers/UrlShorten';

export default {
  components: {
    MainLayout,
    UrlShorten
  }
};
</script>
