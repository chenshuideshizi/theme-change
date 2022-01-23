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
import { lightTheme, darkTheme } from "../../../theme/variable";
export default {
  name: "PageHeader",
  data() {
    return {
      theme: 'light',
      themeMap: {
        'light': lightTheme,
        'dark': darkTheme
      }
    };
  },
  methods: {
    onThemeChange() {
      window.less.modifyVars(this.themeMap[this.theme]);
    }
  }
};
</script>

