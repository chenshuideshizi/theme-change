<template>
  <div class="content">
    <h3 class="article-title">沁园春 雪</h3>
    <div class="article-author">作者: 毛泽东</div>
    <div class="article-detail">
      <p>北国风光，千里冰封，万里雪飘。</p>
      <p>望长城内外，惟余莽莽；大河上下，顿失滔滔。</p>
      <p>山舞银蛇，原驰蜡象，欲与天公试比高。</p>
      <p>须晴日，看红装素裹，分外妖娆。</p>
      <p>江山如此多娇，引无数英雄竞折腰。</p>
      <p>惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。</p>
      <p>一代天骄，成吉思汗，只识弯弓射大雕。</p>
      <p>俱往矣，数风流人物，还看今朝。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "reaconmend",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "../../../styles/variable.scss";
@import "../../../styles/mixin.scss";

.article-title {
  height: 40px;
  line-height: 40 px;
  text-align: center;
  font-size: $font-size-medium;
  @include text-color(text-1);
}
.article-author {
  margin-bottom: 10px;
  @include text-color(text);
}
.article-detail {
  @include text-color(text-1);
}

</style>
