<template>
  <div id="app">
    <div id="nav">
      <router-link class="ิbutton navLogo" to="/">마이룩</router-link>
      <router-link class="button navButton" to="/">탐색</router-link>
      <router-link class="button navButton" to="/feed">팔로잉</router-link>
      <router-link class="button navButton" to="/magazine">매거진</router-link>
      <div class="button uploadButton" @click="openModal('Upload')"> 사진 올리기 </div>
      <template v-if="user.loggedIn === false">
        <div class="button navButton loginButton" @click="openModal('Login')"> 로그인</div>
        <div class="button navButton signupButton" @click="openModal('Signup')"> 회원가입</div>
      </template>
      <template v-else>
        <div class="profile">
          {{user.currentUser.username}}
        </div>
      </template>
    </div>
    <router-view class="view"/>
    <transition name="fade">
      <modal v-if="showModal" :modalType="modalType" @closeModal="closeModal"/>
    </transition>
  </div>
</template>

<script>
import Modal from '@/views/Modal.vue';
import Login from '@/views/Login.vue';
import Signup from '@/views/Signup.vue';

export default {
  data() {
    return { 
      showModal: false,
      modalType: ''
     }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  created() {
    // FETCH USER DATE AFTER FIRST RENDER
    console.log(this);
    this.$store.dispatch('user/login');
  },
  methods: {
    openModal(modal) {
      this.modalType = modal;
      return this.showModal = true;
    },
    closeModal() {
      this.modalType = '';
      return this.showModal = false;
    }
  },
  components: {
    Login,
    Signup,
    Modal
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
  font-size: 14px;
}

a {
  color: black;
  text-decoration: none;
}

.router-link-exact-active {
  font-weight: bold;
}

.navLogo {
  min-width: 50px;
}

.button {
  cursor: pointer;
}

.navButton {
  min-width: 50px;
  margin-left: 30px;
}

.uploadButton {
  display: flex;
  border: 1px solid #ddd;
  margin-left: auto;
  padding: 0px 11px;
  height: 32px;
  line-height: 30px;
  box-shadow: 0 1px 1px rgba(0,0,0,.04);
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}

.profile {
  margin-left: 30px;
}

.view {
  flex: 1;
}
</style>
