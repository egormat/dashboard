<template>
  <div id="app">
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from './Dashboard.vue'
import ChartWindow from './ChartWindow.vue'
export default {
  name: 'app',
  components: {
    Dashboard,
    ChartWindow,
  }
}
</script>


<style lang="scss" scoped>
  @import "../static/main.scss";
</style>
