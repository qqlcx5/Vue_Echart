<template>
  <div id="app">
    <div class="title">
      <img src="~@/assets/left-black.png" @click="$router.push('/')">
      <span class="title_text">全市主要出口国别和地区</span>
    </div>
    <nav class="tab">
      <ul class="tab_ul">
        <li class="tab_select">亚洲</li>
        <li>非洲</li>
        <li>欧洲</li>
        <li>南美洲</li>
        <li>北美洲</li>
        <li>大洋洲</li>
        <li>集中市场</li>
      </ul>
    </nav>
    <div class="sorting">
      <span class="cBlue">占百分比&nbsp;↓</span>
      <img src="~@/assets/down.png" alt="">
    </div>
    <div class="content">
      <div v-for="item,index in list" :key="index" class="list">
        <div class="list_distribution">
          <span class="cBlue">{{item.local}}</span>
          <span>{{item.percent}}</span>
        </div>
        <div class="outNum">出口额(万美元)：{{item.outNum}}</div>
        <div>同比(%)：<span>{{item.Compared}}</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        list: [
          {
            local: "香港",
            percent: '9.30%',
            outName: '出口额',
            outNum: '15246',
            Compared: '252.3'
          },
          {
            local: "日本",
            percent: '2.28%',
            outName: '出口额',
            outNum: '3785',
            Compared: '23.7'
          },
          {
            local: "伊朗",
            percent: '0.72%',
            outName: '出口额',
            outNum: '1193',
            Compared: '50.2'
          },
          {
            local: "土耳其",
            percent: '4.23%',
            outName: '出口额',
            outNum: '7008',
            Compared: '-2.4'
          },
          {
            local: "印度",
            percent: '3.56%',
            outName: '出口额',
            outNum: '5900',
            Compared: '54.5'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped rel="stylesheet/scss">
  @import "../common/px2rem.scss";

  #app{
    background-color: #ECEEF3;
  }
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

  .tab {
    border-bottom: 1px solid #eeeeee;
    margin-bottom: px2rem(10);
    background-color: #fff;
  }

  .tab_ul {
    display: flex;
    justify-content: space-around;
    align-content: center;
    font-size: px2rem(28);

  }
  .tab_ul li{
    list-style: none;
    padding: px2rem(25) px2rem(14);

  }
  .tab_select{
    color: #2e81ff;
    border-bottom: 4px solid #2e81ff;
  }
  .sorting{
    display: inline-flex;
    width: 100%;
    height:px2rem(90);
    justify-content: flex-end;
    align-items: center;
    border-bottom:2px solid #eeeeee;
    background-color: #fff;
    font-size: px2rem(28);
  }
  .sorting img{
    width: px2rem(24);
    height: px2rem(26);
    padding: 0 px2rem(22);
  }
  .list {
    width: 100%;
    margin-bottom: px2rem(10);
    background: #ffffff;
    font-size: px2rem(24);
    box-sizing: border-box;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
    padding: px2rem(20);
  }
  .list_distribution{
    display: flex;
    justify-content: space-between;
  }
  .list .outNum{
    margin: px2rem(32) 0;
  }
</style>
