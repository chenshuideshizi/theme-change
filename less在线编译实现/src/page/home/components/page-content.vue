<template>
  <div class="reaconmend" ref="reaconmend">
    <div class="reaconmend-content">
      <div>
        <div class="reaconmend-list">
          <ul>
            <li @click="selectItem(item)" class="item">
              <div class="text">
                <h2 class="name" >NAAme</h2>
                <div class="desc" >DEESC</div>
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
