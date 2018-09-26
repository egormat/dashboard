<!-- <div class="chart-window"> -->
<canvas class="canvas">
</canvas>
<!-- <div> -->

<script>
import VueCharts from 'vue-chartjs'
import {Bar,HorizontalBar, mixins} from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  }

}
</script>

<style lang="scss" scoped>
@import "../static/main.scss";
</style>
