<template>
  <div class="article-wrapper">
    <div class="article-title">《登鹳雀楼》</div>
    <div class="article-author">王之涣 唐代</div>
    <div class="article-content">
      白日依山尽，黄河入海流。<br />
      欲穷千里目，更上一层楼。
    </div>
  </div>
</template>
<script>
export default {
  name: "PageContent",
};
</script>

<style lang="scss" scoped>
@import "../../../styles/variable.scss";
@import "../../../styles/mixin.scss";
.article-wrapper {
  width: 400px;
  height: 400px;
  padding: 40px;
  margin: auto;
}
.article-title {
  color: var(--text);
}

.article-author {
  color: var(--text-1);
  font-size: var(--font-size-medium);
}
.article-content {
  color: var(--text-2);
  font-size: var(--font-size-medium);
}
</style>
