<template>
  <!-- <scroll> -->
    <slider></slider>
  <!-- </scroll> -->
  <p class="hotList">热门歌单推荐</p>
</template>
<script>
import scroll from '../components/base/scroll/scroll.vue'
import slider from "../components/base/slider/slider.vue"
export default {
  name: "recommend",
  components:{
    scroll,
    slider,
  }
};
</script>
<style scoped>
  .hotList{
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    color: #efcf40;
  }
</style>
