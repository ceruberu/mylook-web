<template>
  <div class="feed">
    <img class="feedImage" src='@/assets/sampleLook1.jpg' alt="">
  </div>
</template>

<script>
export default {
  name: 'Feed',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feed {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.feedImage {
  border-radius: 8px;
  height: 560px;
  width: 375px;
}
</style>
