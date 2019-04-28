<template>
  <div class="loginModal">
    <h1>Login</h1>
    <div>페이스북 로그인</div>
    <div>네이버 로그인</div>
    <form @submit.prevent="login">
      <input type="email" placeholder="이메일" v-model="email"/>
      <input type="password" placeholder="비밀번호" v-model="password"/>
      <button type="submit" />
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {  
      this.$http.post('/api/users/login', {
        email: this.email, 
        password: this.password
      }).then(req => this.loginSuccess(req))
      .catch(err => this.loginFailed(err));
      
    },
    loginFailed () {
      console.log("FAILED");
    },
    loginSuccess (req) {
      this.$store.dispatch('user/login');
      // .then(()=> this.$router.push('/'))
    }
  }
}

</script>