<template>
  <div id="app">
    <div id="nav">
      <router-link class="navLogo" to="/">마이룩</router-link>
      <router-link class="navButton" to="/">탐색</router-link>
      <router-link class="navButton" to="/feed">팔로잉</router-link>
      <router-link class="navButton" to="/magazine">매거진</router-link>
      <router-link class="navButton" to="/upload">업로드</router-link>
      <div class="navButton loginButton" @click="openModal('login')"> 로그인</div>
    </div>
    <router-view class="view"/>
    <transition name="fade">
      <div class="modalManager" v-if="showModal" @click="closeModal">
        <div class="modal" @click.stop>
          <Login v-if="currentModal == 'login'" />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Login from '@/views/Login.vue';

export default {
  data() {
    return { 
      showModal: false,
      currentModal: ''
     }
  },
  methods: {
    openModal(modal) {
      this.currentModal = modal;
      return this.showModal = true;
    },
    closeModal() {
      this.currentModal = '';
      return this.showModal = false;
    }
  },
  components: {
    Login
  } 
}
</script>


<style>
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

#nav {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0px 20px;
  border-bottom: 1px solid lightgrey;
}

a {
  color: black;
  text-decoration: none;
}

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

.modalBody {
  position: relative;
  height: 100%;
}

.router-link-exact-active {
  font-weight: bold;
}

.navButton {
  margin-left: 30px;
}

.loginButton {
  margin-left: auto;
}

.view {
  flex: 1;
}
</style>
