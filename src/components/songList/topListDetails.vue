<template>
  <div class="toplistdetails">
    <div class="pic"><img :src="result.coverImgUrl" alt=""></div>
    <div class="content">
        <div class="content-item" v-for="(item,index) in topsonglist" :key="index">
          <a :href="item.al.id" class="song-item">
            <div class="sort">
              <span>{{index+1}}</span>
            </div>
            <div class="songdetail">
              <p class="song">{{item.name}}</p>
              <p class="singer">{{item.ar[0].name}}</p>
            </div>
          </a>
        </div>
    </div>
  </div>
</template>
<script>
import { getTopListDetails } from "../../api/getData"
export default{
  name: 'topListDetails',
  data () {
    return {
      result: [],
      topsonglist: []  
    }
  },
  async created(){
    await getTopListDetails(this.$route.params.id).then((res)=>{
      this.result = res.data.playlist
      this.topsonglist = res.data.playlist.tracks
      console.log(this.topsonglist);
      
    })
  }
}
</script>
<style scoped>
  .toplistdetails{
    width: 95%;
    margin: 0 auto;
  }
  .pic{
    width: 100%;
  }
  .pic img{
    width: 100%;
  }
  .content-item{
    margin-top: 5px;
  }
  .song-item{
    display: flex;
  }
  .sort{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .sort span{
    color: #efcf40;
    font-weight: bold;
  }
  .songdetail{
    flex: 5;
  }
  .songdetail .song{
    color: #fdfdfd;
  }
  .songdetail .singer{
    font-size: 15px;
  }
</style>