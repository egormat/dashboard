<template>
  <div class="loginWindow">
  <form class="loginForm">
  <label>
    Логин:
    <input type="text" v-model="login" required>
  </label>
<label>
  Пароль:
  <input type="password" v-model="password" required>
</label>
<button class="loginButton" @click="logIn"> Вход </button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
    login: null,
    password: null,
  }
  },
  methods: {
    logIn(e){
      e.preventDefault()
      axios({
        method:'post',
        url: "https://luxb.news-mts.ru/api/v1/account/login",
        data: {
          "login" : this.login ,
          "password" : this.password
          }
        }).then((resp) => {
          this.$store.dispatch('setToken', resp.data.token)
          .then(()=>{
            this.$cookie.set('token', resp.data.token,  60* 60)
            this.$router.replace('/diagrams')
          })

      });
    },
  }
}
</script>

<style>
.loginWindow{
  position:absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: white;
}
.loginForm {
  position: absolute;
  background: white;
  -webkit-box-shadow: 2px 4px 29px -4px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 4px 29px -4px rgba(0,0,0,0.75);
box-shadow: 2px 4px 29px -4px rgba(0,0,0,0.75);
  height: 50%;
  width: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.loginForm button {
  width: 20%;
}
/* .loginForm label {
  display: flex;
  flex-direction: row;
} */
</style>
