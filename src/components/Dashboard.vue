<template>
<div class="dashboard">
  <div class="navbar">
  <div class="chartData">{{chartData}}</div>
  <form class="form">
    <label>Выбрать период
    <input v-model="datestart" type="date" required>
    <input v-model="dateend" type="date" required>
    <button class="button" @click="fetchData">Получить данные</button>
    <button class="button" @click="recountData">Пересчитать файлы</button>
  </label>
  </form>

</div>



  <diagram
    :totalWidth="totalWidth"
    :matrixPlan="matrixPlan"
    :total="total"
    :matrixFact="matrixFact"
    :actual="actual"
    :oop="oop"
          />
  <!-- <div class="charts">
          <chart-window :chartData="chartData" :options="options" class="chart-window"/>
  </div> -->
</div>
</template>

<script>
import axios from 'axios';
import ChartWindow from './ChartWindow.vue';
import Diagram from './Diagram.vue';


export default {
  components: {
    'chart-window' : ChartWindow,
    'diagram' : Diagram
  },

  data() {
    return {
      datestart: "2018-08-08",
      dateend: "2018-08-20",
      chartData: null,
      totalWidth: null,
      matrixPlan: null,
      total: null,
      matrixFact: null,
      actual: null,
      oop: null,

//       options:{
//         // scaleShowVerticalLines: false,
//
//         layout: {
//             padding: {
//                 left: 50,
//                 right: 0,
//                 top: 150,
//                 bottom: 0
//             }
//           },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     // beginAtZero:true
//                 },
//                 stacked: true,
//             }],
//             xAxes: [{
//               beginAtZero: true,
//               stacked: true,
//             }]
//         },
//         responsive: false,
//         maintainAspectRatio: false,
// },
//
//       chartData:{}
//
//
//     }
}
  },

  methods: {
    recountData(e){
      e.preventDefault();
      axios.post('http://lux.news-mts/reinit');
    },
    fetchData(e) {
      e.preventDefault();
      axios.post('http://lux.news-mts.ru/actualstock', {
          datestart: this.datestart,
          dateend: this.dateend,
        })
        .then((response) => {
            this.chartData = response.data;
            this.totalWidth = String(800) + 'px';
            this.matrixFact = response.data.matrix_fact;
            this.matrixPlan = response.data.matrix_plan;
            this.total  = response.data.matrix_fact + response.data.actual + response.data.oop;
            this.actual = response.data.actual;
            this.oop = response.data.oop;
          }
        )
        .catch(function(error) {
          console.log(error)
        })
    }
  }

}
</script>

<style lang="scss" scoped>
  @import "../static/main.scss";
</style>



<!-- // this.chartData = {
//        labels: [' ', ' ', ' '],
//        datasets: [
//          {
//               type: 'line',
//               label: 'Dataset 2',
//                backgroundColor: 'red',
//               data: [0,0,2000]
// },
//         {
//           type: 'horizontalBar',
//           label: "Matrix plan",
//           backgroundColor: 'rgba(130, 161, 248, 0.84)',
//           data: [response.data.matrix_plan,0,0]
//         },
//
//         {
//           type: 'horizontalBar',
//           label: "Total",
//           backgroundColor: 'rgba(0, 0, 0, 1)',
//           borderColor: 'rgba(0, 0, 0, 1)',
//           data: [0,response.data.matrix_fact + response.data.actual + response.data.oop,0]
//         },
//         {
//           type: 'horizontalBar',
//           label: "Matrix fact",
//           backgroundColor: 'rgba(133, 229, 82, 0.84)',
//           data: [0,0, response.data.matrix_fact]
//         },
//         {
//           type: 'horizontalBar',
//           label: "Actual",
//           backgroundColor: 'rgba(0, 72, 173, 0.84)',
//           data: [0,0,response.data.actual]
//         },
//         { type: 'horizontalBar',
//           label: "oop",
//           backgroundColor: 'rgba(240, 200, 0, 0.84)',
//           data: [0, 0, response.data.oop]
//         },
//        ] -->
