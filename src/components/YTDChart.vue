<!-- <div class="chart-window"> -->
<canvas class="canvas">
</canvas>
<!-- <div> -->

<script>
import VueCharts from 'vue-chartjs'
import {Bar, mixins} from 'vue-chartjs'
import axios from 'axios'
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data(){
    return {
      options: {
        plugins: {
           // Change options for ALL labels of THIS CHART
           datalabels: {
               // color: '#36A2EB',
               anchor: 'end',
               
               // align: 'end'
           }
       }
      }
    }
  },
  mounted() {
    this.addPlugin(ChartDataLabels);
    this.renderChart(this.chartData, this.options);
  },


}
</script>

<style lang="scss" scoped>
@import "../static/main.scss";
</style>
