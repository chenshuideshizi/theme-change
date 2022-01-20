<template>
  <div class="wrapper page-home">
    <m-header></m-header>
    <page-content></page-content>
  </div>
</template>
<script>
import Header from "./components/page-header";
import PageContent from "./components/page-content";
export default {
  name: "index",
  data() {
    return {};
  },
  components: {
    "m-header": Header,
    PageContent
  },
};
</script>
