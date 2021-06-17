<template>
  <div class="search">
    <div class="search-input-wra">
      <search-input v-model="query"></search-input>
    </div>
  </div>
</template>
<script>
import searchInput from '../components/search/search-input.vue'
import { ref , watch } from 'vue'
export default{
  name : "search",
  components: {
    searchInput,
  },
  Setup(){
    const query = ref('')
    watch(query,(val)=>{
      console.log(val);
      
    })
    return {
      query
    }
  }
}
</script>
<style scoped>
</style>