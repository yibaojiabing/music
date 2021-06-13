<template>
  <!-- <div class="banners">
  <div class="slider">
    <div class="slider-item" v-if="banners.length" v-for="(item,index) in banners" :key="index">
      <a :href="item.targetId">
        <img :src="item.imageUrl" alt="">
      </a>
    </div>
  </div>
  
  </div> -->

  <div>
  <van-swipe class="my-swipe slider" :autoplay="3000" indicator-color="white">
    <van-swipe-item class="slider-item" v-if="banners.length" v-for="(item,index) in banners" :key="index">
      <a :href="item.targetId">
        <img :src="item.imageUrl" alt="">
      </a>
    </van-swipe-item>
  </van-swipe>
  <!-- <ul class="list">
      <li class="list-item" v-for="(item,index) in banners.length"></li>
  </ul> -->
  </div>
</template>
<script>
import { getBanners } from "../../../api/getData"
export default{
  name: 'slider',
  data(){
    return {
      banners: [],
      currentIndex: 0,
    }
  },
  created() {
    getBanners().then((res)=>{
      console.log(res);
      this.banners = res.data.banners;
    })
  },
}
</script>
<style scoped>
  .banners{
    position: relative;
  }
  .slider{
    width: 100%;
    height: 154px;
    position: relative;
    /* float: left; */
    overflow: hidden;
  }
  .slider-item{
    float: left;
  }
  .slider-item a{
    display: block;
  }
  .slider-item img{
    width: 100%;
  }
  .list{
    width: 100%;
    position: absolute;
    text-align: center;
    margin-top: -20px;
    background:rgba(0,0,0,0)
  }
  .list-item{
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-left: 3px;
    border-radius: 50%;
    background-color: black;
    opacity: 0.2;
  }
  .active{
    border: 1px solid white;
    opacity: 0.6;
  }
</style>