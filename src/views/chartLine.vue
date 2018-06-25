<template>
  <div id="app">
    <div class="title">
      <img src="~@/assets/left-black.png" @click="$router.push('/')">
      <div class="title_text">全市进出口月度情况</div>
    </div>
    <div ref="eChartContainer" class="echart"></div>
    <div class="content">
      <div v-for="item,index in list" :key="index" class="list">
        <div class="list_title">
          <span class="cBlue">{{item.year}}(万美元)</span>
          <span class="cBlue">{{item.local}}</span>
        </div>
        <div class="list_text list_title">
          <span>进出口总额：{{item.total}}</span>
          <span>{{item.tatalPercent}}</span>
        </div>
        <div class="list_title">
          <span>出口额：{{item.out}}</span>
          <span>{{item.outPercent}}</span>
        </div>
        <div class="list_title">
          <span>进口额：{{item.in}}</span>
          <span>{{item.inPercent}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        list: [
          {
            year: "12月份",
            local: "同比(%)",
            total: 24516,
            tatalPercent: 49.6,
            out: 18745,
            outPercent: 47.1,
            in: 16013,
            inPercent: 62.1
          },
          {
            year: "11月份",
            local: "同比(%)",
            total: 18745,
            tatalPercent: 25.5,
            out: 14387,
            outPercent: 29.2,
            in: 4358,
            inPercent: 14.6
          },
          {
            year: "10月份",
            local: "同比(%)",
            total: 16013,
            tatalPercent: 84.3,
            out: 12736,
            outPercent: 86.5,
            in: 3277,
            inPercent: 76.0
          },
          {
            year: "9月份",
            local: "同比",
            total: 18802,
            tatalPercent: 7.1,
            out: 12666,
            outPercent: -9.1,
            in: 6136,
            inPercent: 69.8
          },
          {
            year: "8月份",
            local: "同比(%)",
            total: 21764,
            tatalPercent: 31.1,
            out: 17853,
            outPercent: 35.6,
            in: 3911,
            inPercent: 14.1
          },
          {
            year: "7月份",
            local: "同比(%)",
            total: 21980,
            tatalPercent: 65.5,
            out: 18451,
            outPercent: 136.5,
            in: 3528,
            inPercent: -35.6
          },
          {
            year: "6月份",
            local: "同比(%)",
            total: 15384,
            tatalPercent: 40.4,
            out: 11736,
            outPercent: 69.6,
            in: 3648,
            inPercent: -9.6
          },
          {
            year: "5月份",
            local: "同比(%)",
            total: 16828,
            tatalPercent: 24.1,
            out: 13626,
            outPercent: 51.8,
            in: 3202,
            inPercent: -30.1
          },
          {
            year: "4月份",
            local: "同比(%)",
            total: 20655,
            tatalPercent: 34.2,
            out: 13320,
            outPercent: 53.7,
            in: 7336,
            inPercent: 9.2
          },
          {
            year: "3月份",
            local: "同比(%)",
            total: 14431,
            tatalPercent: -7.4,
            out: 10400,
            outPercent: 4.6,
            in: 4031,
            inPercent: -28.6
          },
          {
            year: "2月份",
            local: "同比(%)",
            total: 16208,
            tatalPercent: 85.2,
            out: 10242,
            outPercent: 80.9,
            in: 5966,
            inPercent: 93.1
          },
          {
            year: "1月份",
            local: "同比(%)",
            total: 13565,
            tatalPercent: -19.5,
            out: 10288,
            outPercent: -9.6,
            in: 3277,
            inPercent: -40.0
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
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            splitLine: {show: true},//网格线
            // splitArea : {show : true},//保留网格区域
            axisLine: {
              lineStyle: {color: '#fff',}
            },
            axisLabel: {
              fontSize: that.getFontSize(),
              color: '#fff',
            },
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
          },
          yAxis: {
            show: false,
            type: 'value',
            axisLine: {
              lineStyle: {color: '#fff',}
            },
            axisLabel: {
              fontSize: that.getFontSize(),
              color: '#fff',
            },
          },
          series: [
            {
              smooth: true,
              name: '最高气温',
              type: 'line',
              symbolSize: that.getFontSize() / 2,
              color: '#fff',
              label: {
                show: true,
                position: 'top',
                fontSize: that.getFontSize()
              },
              data: [24516, 18745, 16013, 18802, 21764, 21980, 15384, 16828, 20655, 14431, 16208, 13565].reverse(),
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

  .cBlue {
    color: #2e81ff;
  }
  .echart {
    width: 100%;
    height: 500px;
    background: #69caff;
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

  .list {
    width: 100%;
    margin-bottom: px2rem(10);
    background: #ffffff;
    font-size: px2rem(28);
    box-sizing: border-box;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.10);
    padding: px2rem(20);
  }

  .list_title {
    display: flex;
    justify-content: space-between;
    padding-bottom: px2rem(16);

  }
  .list_text{
    padding: px2rem(12) 0;
  }
</style>
