<template>
  <div class="list">
    <router-link
      class="tab-nav"
      v-for= "tab in tabs"
      :key = "tab.path"
      :to = "tab.path"
    >
    <slot class="tab-item">{{tab.name}}</slot>
    </router-link>
  </div>
</template>
<script>
export default{
  name : 'tabBar',
  data(){
    return {
        tabs:[
        {
          name : "推荐",
          path : "/recommend"
        },
        {
          name : "歌手",
          path: "/singer"
        },
        {
          name : "排行榜",
          path : "/top-list"
        },
        {
          name : "搜索",
          path : "/search"
        }
      ]
    }
  }
}
</script>
<style scoped>
  .list{
    display: flex;
  }
  .tab-nav{
    flex: 1;
    width: 100%;
    height: 33px;
    line-height: 33px;
    padding: 5px 0;
    text-align: center;
    color: cornsilk;
  }
  .active{
    color:#efcf40;
  }

</style>