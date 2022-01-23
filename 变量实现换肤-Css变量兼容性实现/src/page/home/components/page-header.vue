<template>
  <div class="header">
    <div class="text">
      小恐龙换肤

      <select v-model="theme" @change="onThemeChange">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>

  </div>
</template>

<script>
import { initTheme } from "@/theme";
export default {
  name: "PageHeader",
  data() {
    return {
      theme: 'light'
    };
  },
  methods: {
    onThemeChange(e) {
      this.theme = e.target.value
      initTheme(this.theme);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.header {
  position: relative;
  height: 70px;
  text-align: center;
  font-size: 0;
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 70px;
    font-size: var(--font-size-large);
    color: var(--text-2);
  }
}
</style>
