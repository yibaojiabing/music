<template>
  <div class="songListDetails">
    <div class="introduction">
      <p class="title">{{details.name}}</p>
      <p class="desc">{{details.description}}</p>
    </div>
    <div class="songlist" v-for="(item,index) in songList" :key="index">
      <p >{{item.name}}</p>
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
    this.songList = this.getSonglist(this.song)
    console.log(this.songList);
  },
  mounted () {
    
    
    // console.log(this.songList);
    
  },
  watch: {
  },
  methods: {
    getSonglist(ids){
      let list = []
      for(let i=0;i<ids.length;i++){
        getSongList(ids[i].id).then((res)=>{
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
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    color: #8a7724;
  }
  .introduction .desc{
    text-indent: 2em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
		text-overflow: ellipsis;
  }
</style>