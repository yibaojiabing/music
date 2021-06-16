<template>
  <div class="toplist">
    <div class="listItem" v-for="(item,index) in toplist" v-if="toplist.length" >
      <a :href="item.id">
        <div class="photo"><img :src="item.coverImgUrl" alt=""></div>
        <div class="content" >
          <p>1. {{songlist[index].[0].name}}</p>
          <p>2. {{songlist[index].[1].name}}</p>
          <p>3. {{songlist[index].[2].name}}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import { getTopList , getTopListDetails } from '../api/getData'
export default{
  name : "topList",
  data(){
    return {
      toplist: [],
      songlist: []
    }
  },
  async created(){
    
    await getTopList().then((res)=>{
      console.log(res);
      this.toplist = res.data.list
    })
    console.log(this.toplist);
    this.getSonglist()
    console.log(this.songlist);
    
  },
  methods: {
    async getSonglist(){
      for(let i=0;i<this.toplist.length;i++){
        await getTopListDetails(this.toplist[i].id).then((res)=>{
          this.songlist.push(res.data.playlist.tracks)
        })
      }
    }
  }
}
</script>
<style scoped>
  .toplist{
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
  }
  .listItem{
    margin-top: 10px;
    background-color: #333333;
  }
  .listItem a{
    display: flex;
    align-items: center;
    background-color: #333333;
  }
  .listItem .photo{
    flex: 1;
    display: inline-block;
  }
  .listItem .photo img{
    width: 100%;
  }
  .listItem .content{
    flex: 3;
    background-color: #333333;
    
  }
  .listItem .content p{
    width: 200px;
    margin-left: 20px;
    font-size: 14px;
    background-color: #333333;
    overflow: hidden;
    white-space:nowrap;
		text-overflow: ellipsis;

  }

</style>