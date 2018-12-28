<!-- <div class="chart-window"> -->
<canvas class="canvas">
</canvas>
<!-- <div> -->

<script>
import VueCharts from 'vue-chartjs'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {Bar,HorizontalBar, mixins} from 'vue-chartjs'

export default {
  extends: HorizontalBar,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data(){
    return {
      options:{
        plugins: {
          datalabels: {
            color: '#2E3D54',
            font:{size: 16, family: 'Roboto, sans-serif'},
            formatter: function(value, context) {
              console.log(context.chart.data.datasets[context.datasetIndex].data[context.dataIndex])
              if(context.chart.data.datasets[context.datasetIndex].data[context.dataIndex] == 0){
                return '';
              }
              else {
                       return context.chart.data.datasets[context.datasetIndex].label;
                     }
            }
       }
       },

        // scaleShowVerticalLines: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    mirror: true

          },
                stacked: true,
            }],
            xAxes: [{
              stacked: true,
            }]
        },
        responsive: false,
        maintainAspectRatio: false,
},
    }
  },
  mounted() {
      this.addPlugin(ChartDataLabels);
    this.renderChart(this.chartData, this.options)
  }

}
</script>

<style lang="scss" scoped>
@import "../static/main.scss";
</style>
