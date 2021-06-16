<template>
  <div class="songListDetails">
    <div class="introduction">
      <p class="title">{{details.name}}</p>
      <p class="desc">{{details.description}}</p>
    </div>
    <div class="songlist" v-for="(item,index) in songList" :key="index">
      <a href=""><p class="songName">{{item.name}}<span class="singer">-----{{item.ar[0].name}}</span></p></a>
    </div>
  </div>
</template>
<script>
import { getSongListDetails , getSongList } from "../../api/getData"
export default{
  name: 'songListDetails',
  data () {
    return {
      details:[],
      song:[],
      songList:[],
    }
  },
  async created(){
    await getSongListDetails(this.$route.params.id).then((res)=>{
      console.log(this.$route.params.id);
      this.details = res.data.playlist;
      this.song = this.details.trackIds;
      console.log(this.details);
    })
    this.songList = await this.getSonglist(this.song)
    console.log(this.songList)
    
  },
  mounted () {
    
  },
  watch: {
  },
  methods: {
    async getSonglist(ids){
      let list = []
      for(let i=0;i<ids.length;i++){
        await getSongList(ids[i].id).then((res)=>{
          list.push(res.data.songs[0])
        })
      }
      return list
    }
  }
}
</script>
<style scoped>
  
  .introduction{
    width: 95%;
    margin: 0 auto;
    /* height: 80px;  */
  }
  .introduction .title{
    width: 300px;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #8a7724;
    overflow: hidden;
    white-space:nowrap;
		text-overflow: ellipsis;
  }
  .introduction .desc{
    text-indent: 2em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
		text-overflow: ellipsis;
  }
  .songName{
    /* width: 100%; */
    height: 40px;
    margin-left: 30px;
    line-height: 40px;
    font-size: 18px;
  
  }
  .singer{
    margin-left: 25px;
    font-size: 14px;
  }
</style>