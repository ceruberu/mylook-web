<template>
  <div class="signupModal">
    <h1>Signup</h1>
    <div>페이스북 로그인</div>
    <div>네이버 로그인</div>
    <form @submit.prevent="signup">
      <input type="text" placeholder="아이디" v-model="username" />
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
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {  
      console.log(this.username, this.email, this.password);
      this.$http.post('/api/users/signup', {
        username: this.username,
        email: this.email, 
        password: this.password
      }).then(req => this.signupSucess(req))
      .catch(err => this.signupFailed(err));
      
    },
    signupFailed () {
      console.log("FAILED");
    },
    signupSuccess () {
      console.log("SEUCESS");
    }
  }

}

</script>