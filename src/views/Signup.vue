<template>
  <div>
    <h1>Signup</h1>
    <div>페이스북 로그인</div>
    <div>네이버 로그인</div>
    <form @submit.prevent="signup">
      <input v-bind:class="{ used: usernameUsed}" type="text" placeholder="아이디" v-model="username" />
      <input v-bind:class="{ used: emailUsed }" type="email" placeholder="이메일" v-model="email" v-on:input="checkEmail"/>
      <input type="password" placeholder="비밀번호" v-model="password"/>
      <button type="submit" />
    </form>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      usernameUsed: false,
      emailUsed: false
    }
  },
  methods: {
    checkEmail: _.debounce(function() {
      this.$http.post('/api/users/checkEmail', {
        email: this.email
      }).then(res => {
        this.emailUsed = res.data;
      })}
    ,1000),
    signup () {  
      console.log(this.username, this.email, this.password);
      this.$http.post('/api/users/signup', {
        username: this.username,
        email: this.email, 
        password: this.password
      }).then(req => this.signupSuccess(req))
      .catch(err => this.signupFailed(err));
      
    },
    signupFailed (err) {
      console.log("FAILED", err);
    },
    signupSuccess (req) {
      console.log("SEUCESS", req);
    }
  }

}

</script>


<style>
.used {
  border-color: red;
}
</style>