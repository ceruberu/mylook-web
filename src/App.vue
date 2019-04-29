<template>
  <div id="app">
    <div id="nav">
      <router-link class="navLogo" to="/">마이룩</router-link>
      <router-link class="navButton" to="/">탐색</router-link>
      <router-link class="navButton" to="/feed">팔로잉</router-link>
      <router-link class="navButton" to="/magazine">매거진</router-link>
      <router-link class="navButton" to="/upload">업로드</router-link>
      <template v-if="user.loggedIn === false">
        <div class="navButton loginButton" @click="openModal('Login')"> 로그인</div>
        <div class="navButton signupButton" @click="openModal('Signup')"> 회원가입</div>
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

.navButton {
  min-width: 50px;
  margin-left: 30px;
}

.loginButton {
  margin-left: auto;
}

.profile {
  margin-left: auto;
}

.view {
  flex: 1;
}
</style>
