<template>
<div class="dashboard">
  <!-- <div class="navbar">
  <div class="chartData">{{chartData}}
  </div> -->
  <navigation></navigation>
  <main>
  <router-view></router-view>
</main>
  <!-- <form class="form">
    <label>Выбрать период
    <input v-model="datestart" type="date" required>
    <input v-model="dateend" type="date" required>
    <button class="button" @click="fetchData">Получить данные</button>
    <button class="button" @click="recountData">Пересчитать файлы</button>
  </label>
  </form> -->
<!--
</div> -->



  <!-- <diagram
    :totalWidth="totalWidth"
    :matrixPlan="matrixPlan"
    :total="total"
    :matrixFact="matrixFact"
    :actual="actual"
    :oop="oop"
          /> -->

</div>
</template>

<script>
import axios from 'axios';
import Navigation from './Navigation.vue';


export default {
  components: {
    'navigation' : Navigation
  },

  created(){
    if (!this.$cookie.get('token')){
      this.$router.replace('/login')
      console.log('ura')
    }

    // this.login()
    }

}
</script>

<style lang="scss" scoped>
  @import "../static/main.scss";
</style>
