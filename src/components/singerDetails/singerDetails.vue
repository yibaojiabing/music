<template>
  <div class="singerdetails">
    <div class="photo">
      <img :src="singerdetails.cover" alt="">
    </div>
    <div class="introduction">
      <p class="name">姓名：{{singerdetails.name}}</p>
      <p class="desc">简介：{{singerdetails.briefDesc}}</p>
    </div>
    <div class="list">歌单列表</div>
    <div class="songlist" v-if="singerMusicList.length" v-for="(item,index) in singerMusicList" :key="index">
      <a href=""><p class="song">{{item.name}}</p></a>
    </div>
  </div>
</template>
<script>
import { getSingerDetails , getSingerHotMusic } from '../../api/getData'
export default{
  name: 'singerDetails',
  data () {
    return {
      singerdetails: [],
      singerMusicList: []
    }
  },
  async created () {
    await getSingerDetails(this.$route.params.id).then((res)=>{
      this.singerdetails = res.data.data.artist
      console.log(this.singerdetails);
    }),
    await getSingerHotMusic(this.$route.params.id).then((res)=>{
      this.singerMusicList = res.data.songs
      console.log(res);
    })
  }
}
</script>
<style scoped>
  .photo,.introduction,.songlist{
    width: 95%;
    margin: 0 auto;
  }
  .photo img{
    width: 100%;
  }
  .desc{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
		text-overflow: ellipsis;
  }
  .list{
    width: 95%;
    margin: 0 auto;
    padding: 10px 0;
    font-size: 18px;
    color: #efcf40;
  }
  .song{
    height: 30px;
    color: #fdfdfd;
    font-size: 20px;
    padding: 5px 0;
  }
</style>