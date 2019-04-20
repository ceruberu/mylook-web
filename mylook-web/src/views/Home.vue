<template>
  <div class="home">
    <Feed />
  </div>
</template>

<script>
// @ is an alias to /src
import Feed from '@/components/Feed.vue';

export default {
  name: 'home',
  components: {
    Feed
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
