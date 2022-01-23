<template>
  <div>
    <div class="avatar">
      <img class :src="avatar" alt />
    </div>
  </div>
</template>
<script>
import bus from "@/bus";
export default {
  name: "reaconmend",
  data() {
    return {
      discList: [],
      avatar: "",
    };
  },
  created() {
    this.avatar = require(`@/assets/images/logo-light.jpeg`);
    // 监听
    bus.$on("changeTheme", (theme) => {
      theme = theme ? "light" : "dark";
      this.avatar = require(`@/assets/images/logo-${theme}.jpeg`);
    });
  },
};
</script>
<style lang="scss" rel="stylesheet/scss">
.avatar {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
