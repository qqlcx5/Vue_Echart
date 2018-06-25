<template>
  <div id="app">
    <div class="title">
      <img src="~@/assets/left-black.png" @click="$router.push('/')">
      <div class="title_text">全国主要出口商品情况</div>
    </div>

    <div class="list_title">
      <span class="cBlue">商品名称/1-12月累计(万美元)</span>
      <span class="cBlue">查看详情 <i class="rightArrow">></i></span>
    </div>

    <div ref="eChartContainer" class="echart"></div>

  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
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
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            show:false
          },
          yAxis: {
            type: 'category',
            axisLabel: {
              fontSize: that.getFontSize() * 0.8,
              color:'#999',
              formatter: ' {value}'
            },
            data: ['旅行用品及箱包', '烟花爆竹', '玩具', '手机或机用工具', '高新技术产品', '家用陶瓷器皿', '机电产品']
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              barWidth:that.getFontSize() * 1.2,
              itemStyle:{
                color: '#69c6ff'
              },
              label:{
                show:true,
                position:'insideLeft',
                fontSize:that.getFontSize() *0.8,
              },
              markPoint:{
                symbol: 'circle',
                symbolSize: 50,
              },
              data: [2844, 3502, 7749, 10600, 14457, 22760, 97765]
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
    font-size: px2rem(28);
    justify-content: space-between;
    padding: px2rem(15) ;
    border-bottom:1px solid #f0f0f0;

  }

  .list_text {
    padding: px2rem(12) 0;
  }
</style>
