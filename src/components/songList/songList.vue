<template>
  <div class="box" v-if="playList.length">
    <div class="playList" v-for="(item,index) in playList" :key="index">
      <a :href="item.id"  @click="itemClick(index)">
        <lazy-component class="img"><img :src="item.coverImgUrl"  alt=""></lazy-component>
        <div class="content">
          <div><p class="title">{{item.name}}</p></div>
          <div><p class="des">{{item.description}}</p></div>
        </div>
      </a>
    </div>
    
  </div>
</template>
<script>
import { getPopSongList } from '../../api/getData'
export default{
  name: 'songList',
  data () {
    return {
      playList: []
    }
  },
  async created () {
    await getPopSongList().then((res)=>{
      this.playList = res.data.playlists
      console.log(this.playList);
    })
  },
  methods:{
    itemClick(index){
      this.$router.push("/songListDetails/"+this.playList[index].id)
      //另外一种方式
      // this.$router.push({
      //   path: '/songListDetails',
      //   query: {
      //     id: this.playList[index].id
      //   }
      // })
      console.log(this.playList[index].id);
      
    }
  }
}
</script>
<style scoped>
  .box{
    width: 90%;
    margin: 0 20px 0 20px;
  }
  .playList{
    height: 130px;
    margin-top: 30px;
  }
  a{
    display: inline-block;
    width: 100%;
    display: flex;
  }
  .img{
    flex: 1;
  }
  .playList img{
    width: 130px;
    vertical-align: middle;
  }
  .content{
    flex: 2;
    height: 130px;
    margin-left: 20px;
  }
  p{
    width: 200px;
    margin: 10px 0;
  }
  .title{
    /* width: 100%; */
    color: #fdfdfd;
    font-size: 18px;
    overflow: hidden;
    white-space:nowrap;
		text-overflow: ellipsis;
  }
  .des{
    /* width: 193px;
    height: 85px;
    white-space: wrap; */
    /* overflow: hidden; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
		text-overflow: ellipsis;
  }
</style>