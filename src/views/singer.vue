<template>
  <div class="artist">
    <div class="singerItem" v-if="singerList.length" v-for="(item,index) in singerList" :key="index">
      <a :href="item.id">
        <img :src="item.img1v1Url" alt="">
        <span class="singerName">{{item.name}}</span>
      </a>
    </div>
  </div>
</template>
<script>
import scroll from "../components/base/scroll/scroll.vue"
import { getHotSingerList } from '../api/getData'
export default{
  name : "singer",
  data () {
    return {
      singerList: []
    }
  },
  components:{
    scroll,
  },
  async created () {
    await getHotSingerList().then((res)=>{
      this.singerList = res.data.artists;
      console.log(this.singerList);
      
    })
  }

}
</script>
<style scoped>
  .singerItem{
    width: 100%;
    margin: 10px 0;

  }
  .singerItem a{
    display: inline-block;
    width: 100%;
    height: 60px;
    padding: 10px 0;
  }
  .singerItem img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    vertical-align: middle;
    margin-left: 30px;
  }
  .singerName{
    font-size: 22px;
    margin-left: 50px;
  }
</style>