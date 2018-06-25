<template>
  <div>
    <div class="title">
      <img src="~@/assets/left-black.png">
      <div>全市主要出口商品情况</div>
    </div>
    <div class="bar_title">
      <span class="bar_title_left">商品名称/1-12月累计</span>
      <span class="bar_title_right">查看详情></span>
    </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  @import "~@/common/px2rem.scss";
  .cBlue{
    color: #2e81ff;
  }
  .title {
    height: px2rem(100);
    width: 100%;
    display: flex;
    align-items: center;
    background: #ffffff;
    font-size: px2rem(32);
    border-bottom: 1px solid #eeeeee;
  }
  .title img {
    padding: px2rem(28);
  }
  .bar_title{
    width:100%;
    height:px2rem(80);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: px2rem(28);
    color:#2e81dd;
    }
  .bar_title_left{
    margin-left: px2rem(22);
  }
  .bar_title_right{
    margin-right: px2rem(20);
  }
</style>
