<template>
  <div>
    <div class="article-title">静夜思</div>
    <div class="article-author">李白 唐代</div>
    <div class="article-content">
      床前明月光，疑是地上霜。<br>
      举头望明月，低头思故乡。
    </div>
  </div>
</template>

<script>
export default {
  name: "PageContent",
  components: {}
};
</script>

<style lang="scss" scoped>
  .article-title {
    height: 40px;
    line-height: 40 px;
    text-align: center;
    font-size: var(--font-size-medium);
    color: var(--text-1);
  }
  .article-author {
    line-height: 20px;
    color: var(--text-2);
  }
  .article-content {
    margin-bottom: 10px;
    color: var(--text);
  }
</style>
