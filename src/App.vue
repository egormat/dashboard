<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Table from './components/Table.vue'
import Dashboard from './components/Dashboard.vue'
import ChartWindow from './components/ChartWindow.vue'

export default {
  name: 'app',
  components: {
    Table,
    Dashboard,
   ChartWindow,
  }
}
</script>

<style lang="scss" scoped>
  // @import "../static/main.scss";
</style>
