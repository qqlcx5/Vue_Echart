<template>
  <div id="app">
    <div class="title_img">
      <div class="imgWrap">
        <img src="~@/assets/index_left.png">
      </div>
    </div>

    <div class="list" @click="goto('/chartTree')">
      <div class="list_item">
        <img src="~@/assets/index_icon1.png" alt="">
        <div class="list_title">
          <span class="list_title_t">全市主要出口商品情况</span>
          <span class="list_title_sub">1—12月累计</span>
        </div>
      </div>
      <div class="list_right"><img src="~@/assets/right.png" alt=""></div>
    </div>

    <div class="list" @click="goto('/chartLine')">
      <div class="list_item">
        <img src="~@/assets/index_icon2.png" alt="">
        <div class="list_title">
          <span class="list_title_t">全市进出口月度情况</span>
          <span class="list_title_sub">1—12月</span>
        </div>
      </div>
      <div class="list_right"><img src="~@/assets/right.png" alt=""></div>
    </div>

    <div class="list" @click="goto('/chartPie')">
      <div class="list_item">
        <img src="~@/assets/index_icon3.png" alt="">
        <div class="list_title">
          <span class="list_title_t">全市进出口贸易方式</span>
          <span class="list_title_sub">一般贸易/加工贸易/其他贸易</span>
        </div>
      </div>
      <div class="list_right"><img src="~@/assets/right.png" alt=""></div>
    </div>

    <div class="list" @click="goto('/chartTable')">
      <div class="list_item">
        <img src="~@/assets/index_icon4.png" alt="">
        <div class="list_title">
          <span class="list_title_t">全市主要国别和地区</span>
          <span class="list_title_sub">全球出口</span>
        </div>
      </div>
      <div class="list_right"><img src="~@/assets/right.png" alt=""></div>
    </div>
    <div class="list" @click="goto('/chartColumn')">
      <div class="list_item">
        <img src="~@/assets/index_icon1.png" alt="">
        <div class="list_title">
          <span class="list_title_t">粮食和开放型经济运行主要指标</span>
          <span class="list_title_sub">2016年/2017同比</span>
        </div>
      </div>
      <div class="list_right"><img src="~@/assets/right.png" alt=""></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {
      goto (url) {
        this.$router.push(url)
      }
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  @import "~@/common/px2rem.scss";

  .title_img {
    background: url("~@/assets/banner.png") no-repeat;
    /*width: px2rem(750);*/
    height: px2rem(377);
    background-size: cover;
    box-sizing: border-box;
    padding-left: px2rem(18);
    padding-top: px2rem(18);
  }

  .imgWrap {
    width: px2rem(70);
    height: px2rem(70);
  }

  .list {
    background: #ffffff;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    height: px2rem(150);
    margin: px2rem(10) px2rem(20);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .list_item {
    margin-left: px2rem(26);
    display: flex;
    align-items: center;

  }

  .list_right {
    width: px2rem(60);
    height: px2rem(60);
    margin-right: px2rem(20);
  }

  .list_title {
    height: px2rem(80);
    width: px2rem(500);
    display: inline-flex;
    flex-direction: column;
    margin-left: px2rem(30);
  }

  .list_title_t {
    font-size: px2rem(30);
  }

  .list_title_sub {
    font-size: px2rem(24);
    padding: px2rem(10) 0;
    color: #999;
  }
</style>
