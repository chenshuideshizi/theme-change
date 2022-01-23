<template>
  <div>
    <div class="article-title">凉州词</div>
    <div class="article-author">王翰 唐代</div>
    <div class="article-content">
      葡萄美酒夜光杯，欲饮琵琶马上催。<br>
      醉卧沙场君莫笑，古来征战几人回？
    </div>
  </div>
</template>
<script>
export default {
  name: "PageContent"
};
</script>
<style lang="scss">
@import "../../../styles/variable.scss";
  .article-title {
    height: 40px;
    line-height: 40 px;
    text-align: center;
    font-size: var(--font-size-medium);
    color: var(--text-1);
  }
  .article-author {
    margin-bottom: 10px;
    color: var(--text);
    font-size: var(--font-size-medium-x);
  }
  .article-content {
    color: var(--text-2);
    font-size: var(--font-size-medium);
  }
</style>
