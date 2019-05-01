<template>
  <div class="modalManager" @click.self="$emit('closeModal')">
      <div class="modal" v-bind:is="modalType"/>
      <div class="closeButton"> X </div>
  </div>
</template>

<script>
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';
import Upload from '@/views/Upload.vue';

export default {
  props: ['modalType'],
  components: {
    Login,
    Signup,
    Upload
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
  padding: 20px 70px;
  cursor: zoom-out;
}

.modal {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,.12), 0 0 4px rgba(0,0,0,.12);
  cursor: default;
}

.closeButton {
  position: fixed;
  left: 14px;
  top: 14px;
  width: 18px;
  height: 18px;
  color: white;
  font-size: bold;
  cursor: zoom-out;
}
</style>