<template>
  <div id="app">
    <div class="title">
      <img src="~@/assets/left-black.png" @click="$router.push('/')">
      <div>全市进出口贸易方式</div>
    </div>
    <div ref="eChartContainer" class="echart"></div>
    <div class="content">
      <div v-for="item,index in list" :key="index" class="list">
        <div class="list_distribution list_border">
          <span class="cBlue">合计(万美元)</span>
          <span class="cBlue">{{item.tatal}}</span>
        </div>
        <div class="outNum list_distribution">
          <span>一般贸易：</span><span>{{item.general}}</span>
        </div>
        <div class="outNum list_distribution">
          <span>加工贸易：</span><span>{{item.process}}</span>
        </div>
        <div class="outNum list_distribution">
          <span>其他贸易：</span><span>{{item.other}}</span>
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
            local: "香港",
            tatal: 218891,
            general: 197081,
            process: 20661,
            other: 1149
          }
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
          legend: {
            x: 'center',
            y:'bottom',
            itemHeight:that.getFontSize(),
            itemWidth: that.getFontSize() *2,
            textStyle:{
              fontSize:that.getFontSize(),
            },
            data: ['一般贸易', '加工贸易', '其他贸易']
          },
          series: [
            {
              // name: '访问来源',
              type: 'pie',
              radius: ['35%', '55%'],
              label: {
                postion: 'outside',
                normal: {

                  formatter: '{b}：{d}%',
                  backgroundColor: '#eee',
                  borderRadius: 4,
                  padding:10,
                  fontSize: that.getFontSize() * 0.8,
                }
              },
              data: [
                {value: 197081, name: '一般贸易'},
                {value: 20661, name: '加工贸易'},
                {value: 1149, name: '其他贸易'},
              ]
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
  .cBlue{
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

.list_distribution{
  display: flex;
  justify-content: space-between;
}
  .list_border{
    padding: px2rem(15) ;
    border-bottom:1px solid #f0f0f0;
  }
  .rightArrow{
     font-style:normal;
    color: #2e81ff;
   }
  .list .outNum{
    margin: px2rem(32) px2rem(20);
  }
</style>
