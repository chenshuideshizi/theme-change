<template>
  <div class="reaconmend" ref="reaconmend">
    <div class="reaconmend-content">
      <div>
        <div class="reaconmend-list">
          <ul>
            <li @click="selectItem(item)" class="item">

              <div class="text">
                <h2 class="name">NNAme</h2>
                <div class="desc">DDesc</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageContent"
};
</script>
<style lang="scss" rel="stylesheet/scss">
@import "../../../styles/variable.scss";
@import "../../../styles/mixin.scss";
.reaconmend {
  .reaconmend-content {
    height: 100%;
    .slider-wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
    }
  }
  .reaconmend-list {
    .list-title {
      height: 40px;
      line-height: 40 px;
      text-align: center;
      font-size: var(--font-size-medium);
      color: var(--text-1);
    }
    .item {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      padding: 0 20px 20px 20px;
      .icon {
        flex: 0 0 60px;
        width: 60px;
        padding-right: 20px;
      }
      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        line-height: 20px;
        overflow: hidden;
      }
      .name {
        margin-bottom: 10px;
        color: var(--text);
        font-size: var(--font-size-medium-x);
      }
      .desc {
        color: var(--text-1);
        font-size: var(--font-size-medium);
      }
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
