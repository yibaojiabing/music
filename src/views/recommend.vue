<template>
  <div class="t">推荐页面
  </div>
</template>
<script>
// import { getRecommend } from "../api/getRecommend"
import { getSinger } from "../api/base"
import axios from 'axios'
export default{
  name: 'recommend',
  create(){
    getSinger()
  }
}
</script>
<style scoped>
  .t{
    color: white
  }
</style>