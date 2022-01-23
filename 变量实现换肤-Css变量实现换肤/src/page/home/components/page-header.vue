<template>
  <div class="header">
    <div class="text">小恐龙换肤</div>

    <select v-model="theme" @change="onThemeChange">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>

  </div>
</template>

<script>
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
      document.documentElement.setAttribute("data-theme", this.theme);
    }
  },
  mounted() {
    document.documentElement.setAttribute("data-theme", this.theme);
  }
};
</script>

<style lang="scss">
@import "../../../styles/variable.scss";
@import "../../../styles/mixin.scss";

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
