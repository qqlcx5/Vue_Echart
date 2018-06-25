<template>
  <router-view class="wrap"></router-view>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {}
    },
    mounted () {
    }
  }
</script>

<style lang="scss" scoped rel="stylesheet/scss">
  @import "~@/common/px2rem.scss";
  .wrap {
    width: 100%;
  }
</style>



