<template>
  <div class="header">
    <span class="hlogo"></span>
    <h3 class="htitle">dynamic music</h3>
  </div>
</template>
<script>
export default{
  name: 'headerBar'
}
</script>
<style scoped>
  .header{
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #222;
  }
  .hlogo{
    display: inline-block;
    width: 32px;
    height: 30px;
    background-image: url(./default.png);
    background-size: 100% 100%;
    vertical-align: middle;
  }
  .htitle{
    display: inline-block;
    color:#efcf40;
    margin-left: 5px;
  }
</style>