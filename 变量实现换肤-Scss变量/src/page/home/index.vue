<template>
  <div class="wrapper page-home">
    <page-header></page-header>
    <page-content></page-content>
  </div>
</template>
<script>
import PageHeader from './components/page-header'
import PageContent from "./components/page-content";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    PageHeader,
    PageContent
  }
};
</script>
