<template>
  <div class="modalManager" @click.self="$emit('closeModal')">
      <div class="modal" v-bind:is="modalType"/>
  </div>
</template>

<script>
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';

export default {
  props: ['modalType'],
  components: {
    Login,
    Signup
  }
}

</script>


<style>
.modalManager {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.68);
  justify-content: center;
  align-items: center;
}

.modal {
  position:relative;
  width: 440px;
  min-height: 550px;
  background-color: white;
  margin: 10px;
  border-radius: 8px;
  padding: 36px 44px;
}
</style>