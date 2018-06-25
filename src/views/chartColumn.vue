<template>
  <div id="app">
    <div class="title">
      <img src="~@/assets/left-black.png" @click="$router.push('/')">
      <div class="title_text">粮食和开放型经济运行主要指标</div>
    </div>
    <nav class="tab">
      <ul class="tab_ul">
        <li class="tab_select">对外贸易</li>
        <li >招商引资</li>
        <li >外经合作</li>
        <li >室内贸易</li>
      </ul>
    </nav>
    <div ref="eChartContainer" class="echart"></div>
    <div class="content">
      <div v-for="item,index in list" :key="index" class="list">
        <div class="list_title">
          <span class="cBlue">{{item.year}}</span>
          <span class="cBlue">{{item.local}}(%)</span>
        </div>
        <div class="list_text list_title">
          <span>进出口总额(万美元)：{{item.total}}</span>
          <span>{{item.tatalPercent}}</span>
        </div>
        <div class="list_title">
          <span>出口额(万美元)：{{item.out}}</span>
          <span>{{item.outPercent}}</span>
        </div>
        <div class="list_title">
          <span>进口额(万美元)：{{item.in}}</span>
          <span>{{item.inPercent}}</span>
        </div>
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
            year:"2016",
            local: "同比",
            total: 175886,
            tatalPercent: -29.2,
            out: 123460,
            outPercent: -27.3,
            in: 52426,
            inPercent: -33.4
          },
          {
            year: "2017",
            local: "同比",
            total: 218891,
            tatalPercent: 29.9,
            out: 165844,
            outPercent: 40.4,
            in: 53047,
            inPercent: 5.2
          },
        ]
      }
    },
    methods: {
      getFontSize () {
        var dpr = window.devicePixelRatio;
        return dpr * 14
      },
      drawChart () {
        let that = this
        let myChart = this.$echarts.init(this.$refs['eChartContainer']);
        let option = {
          color: ['#69c6ff', '#4cabce'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            x: 'center',
            y:'top',
            itemHeight:that.getFontSize(),
            itemWidth: that.getFontSize(),
            selectedMode: false,
            textStyle:{
              fontSize:that.getFontSize(),
            },
            data: ['2016', '2017']
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              axisTick: {show: false},
              data: ['进出口总额', '出口额', '进口额'],
              axisLabel: {
                fontSize: that.getFontSize(),
              },
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                width: 50,
                fontSize: that.getFontSize() * 0.8,
                formatter: (value) => value / 10000 + 'W'
              },
            }
          ],
          series: [
            {
              name: '2016',
              barWidth:that.getFontSize() * 1.5,
              type: 'bar',
              barGap: 0.5,
              data: [175886, 123460, 52426]
            },
            {
              name: '2017',
              barWidth:that.getFontSize() * 1.5,
              type: 'bar',
              data: [218891, 165844, 53047]
            }
          ]
        };
        myChart.setOption(option)
      }
    },
    mounted () {
      this.drawChart()
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "../common/px2rem.scss";
  #app{
    background-color: #ECEEF3;
  }
  .echart {
    width: 100%;
    height: 500px;
    background: #fff;
    padding: px2rem(10) px2rem(20);
    box-sizing: border-box;
    margin-bottom: px2rem(10);
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
    border-bottom: 1px solid #eeeeee;
  }

  .title img {
    padding: px2rem(28);
  }
  .title_text{
    font-size: px2rem(32);
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
  .tab_ul li {
    list-style: none;
    padding: px2rem(25) px2rem(28);

  }

  .tab_select {
    color: #2e81ff;
    border-bottom: 4px solid #2e81ff;
  }
  .sorting{
    display: inline-flex;
    width: 100%;
    height:px2rem(90);
    justify-content: flex-end;
    align-items: center;
    border-bottom:1px solid #eeeeee;
  }
  .sorting span{
    height: px2rem(60);
    color: #3B88E2;
    padding: px2rem(14) px2rem(50) px2rem(14) 0;
  }
  .sorting img{
    padding-right: px2rem(20);
  }
  .list {
    width: 100%;
    margin-bottom: px2rem(10);
    background: #ffffff;
    font-size: px2rem(28);
    box-sizing: border-box;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
    padding: px2rem(20);
  }
  .list_title{
    display: flex;
    justify-content: space-between;
    padding-bottom: px2rem(16);

  }
  .list_text{
    padding: px2rem(12) 0;
  }
</style>
