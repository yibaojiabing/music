<template>
  <!-- <scroll class="content"> -->
    <slider></slider>
    <p class="hotList">热门歌单推荐</p>
    <song-list></song-list>
  <!-- </scroll> -->
</template>
<script>
import songList from '../components/songList/songList.vue'
import scroll from "../components/base/scroll/scroll.vue"
import slider from "../components/base/slider/slider.vue"
export default {
  name: "recommend",
  components:{
    scroll,
    slider,
    songList
  },
};
</script>
<style scoped>
  .hotList{
    padding: 10px 0;
    text-align: center;
    font-size: 18px;
    color: #efcf40;
  }
  .content{
    height: 645px;
    overflow: hidden;
  }
</style>
