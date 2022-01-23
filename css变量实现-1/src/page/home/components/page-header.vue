<template>
  <div class="header">
    <div class="text">小恐龙换肤
      <select v-model="theme" @change="onThemeChange">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      theme: 'light'
    };
  },
  methods: {
    onThemeChange() {
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
.header {
  height: 70px;
  text-align: center;
  .text {
    display: inline-block;
    line-height: 70px;
    font-size: var(--font-size-large);
    color: var(--text-2);
  }
}
</style>
