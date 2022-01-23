<template>
  <div class="header">
    <div class="text">
      小恐龙换肤
      <select @change="onThemeChange">
        <option value="light" selected>Light</option>
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
      theme: 'light',
    };
  },
  methods: {
    onThemeChange(e) {
      this.theme = e.target.value
      document.documentElement.setAttribute('data-theme', this.theme);
    },
  },
  mounted() {
    document.documentElement.setAttribute('data-theme', this.theme );
  },
};
</script>

<style lang="scss">
@import "@/styles/variable.scss";
@import "@/styles/mixin.scss";

.header {
  position: relative;
  height: 70px;
  text-align: center;
  font-size: 0;
  .text {
    display: inline-block;
    line-height: 70px;
    font-size: $font-size-large;
    @include text-color(text-2);
  }
}
</style>
