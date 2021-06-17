<template>
  <div class="search-input">
    <van-icon class="fdj" name="search" size="20px" background="#333"/>
    <input type="text" placeholder="请输入歌手或歌曲">
    <van-icon color="close" name="close" size="20px" />
  </div>
</template>
<script>
export default{
  name: 'search-input'
}
</script>
<style scoped>
  .search-input{
    width: 70%;
    height: 30px;
    margin: 0 auto;
    padding: 10px 0;
    position: relative;
  }
  .fdj{
    position: absolute;
    margin-left: 8px;
    margin-top: 7px;
    background-color: #333;
  }
  .search-input input{
    padding-left: 30px;
    width: 80%;
    height: 30px;
    line-height: 30px;
    border: 1px solid #333;
    background-color: #333;
    border-radius: 10px;
  }
  .van-icon-close{
    position: relative;
    background-color: #333;
    left: -25px;
  }
</style>