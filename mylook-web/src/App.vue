<template>
  <div id="app">
    <div id="nav">
      <router-link class="navLogo" to="/">마이룩</router-link>
      <router-link class="navButton" to="/">피드</router-link>
      <router-link class="navButton" to="/best">베스트</router-link>
      <router-link class="navButton" to="/upload">업로드</router-link>
      <router-link class="navButton loginButton" to="/login">로그인</router-link>
    </div>
    <router-view class="view"/>
  </div>
</template>

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

.navButton {
  margin-left: 30px;
}

.loginButton {
  margin-left: auto;
}
</style>
