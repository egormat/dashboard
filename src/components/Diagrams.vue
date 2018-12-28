<template>
  <div class="charts">
  <div class="line">
  <div class="chartLabel">
    <div>
      График продаж
    </div>
  <select v-model="selected">
  <option value="sun">Солнцезащитные</option>
  <option value="optical">Оптика</option>
  <option value="all">Суммарно</option>
</select>
</div>
    <LineChartWindow v-if="loaded" :chart-data="lineData" :width="width*0.5" :height="400"/>
  </div>
  <div class="stock">
    <div class="chartLabel">
      <div>
    Actual stock
    </div>
    </div>
    <chart-window :chart-data="chartData"  class="chart-window" :width="width* 0.85" :height="300" />
</div>
  <div class="ytd">
    <div class="chartLabel">
      <div>
        <p>
    YTD
  </p>
  </div>
  </div>
    <YTDChart v-if="loaded" :chart-data="YTDData" :width="width * 0.25" :height="331"/>
  </div>
</div>
</template>


<script>
import axios from 'axios';
import Navigation from './Navigation.vue';
import ChartWindow from './ChartWindow.vue';
import YTDChart from './YTDChart.vue'
import LineChartWindow from './LineChartWindow.vue'
import Diagram from './Diagram.vue';


export default {
  components: {
    LineChartWindow,
    YTDChart,
    'chart-window' : ChartWindow,
    'diagram' : Diagram
  },

  data() {
    return {
      width: screen.width,
      loaded: false,
      selected: 'sun',
      lineData: null,
      YTDData: null,
      datestart: "2018-08-08",
      dateend: "2018-08-20",
      // chartData: null,
      // totalWidth: null,
      // matrixPlan: null,
      // total: null,
      // matrixFact: null,
      // actual: null,
      // oop: null,



      chartData:{
             labels: [,,,],
             datasets: [
              {
               type: 'horizontalBar',
                label: "Matrix plan",
                backgroundColor: 'rgba(130, 161, 248, 0.84)',
                data: [600,'','']
              },

              {
                type: 'horizontalBar',
                label: "Total",
                backgroundColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(0, 0, 0, 1)',
                data: ['',700,'']
              },
              {
                type: 'horizontalBar',
                label: "Matrix fact",
                backgroundColor: 'rgba(133, 229, 82, 0.84)',
                data: ['','', 899]
              },
              {
                type: 'horizontalBar',
                label: "Actual",
                backgroundColor: 'rgba(0, 72, 173, 0.84)',
                data: ['','',500]
              },
              { type: 'horizontalBar',
                label: "OOP",
                backgroundColor: 'rgba(240, 200, 0, 0.84)',
                data: ['', '',700]
              },        ]

    }
  }
},

  methods: {
    getLineData(){
      axios({
        method: "get",
        url: "https://luxb.news-mts.ru/api/v1/diagram/sales"+"?type=" + this.selected+ "&company=0",
        headers: {
          'X-Token' : this.$cookie.get('token')
        }
      }).then((resp) => {
        let data = resp.data.years;
        console.log(data)
        let data_0 = [];
        let data_1 = [];
        let data_2 = [];
        for(let i=0; i<=data[0].points.length-1; i++){
          data_0.push({ x: data[0].points[i].week, y: data[0].points[i].value})
        }
        for(let i=0; i<=data[1].points.length-1; i++){
          data_1.push({ x: data[1].points[i].week, y: data[1].points[i].value})
        }
        for(let i=0; i<=data[2].points.length-1; i++){
          data_2.push({ x: data[1].points[i].week, y: data[1].points[i].value})
        }
        console.log(data_0);
      this.lineData =   {
         labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
         datasets: [
           {
            label: data[0].year,
             fill: false,
             pointRadius: 0,
             borderColor:  '#45E6B0',
             data  : data_0
           },{
             label: data[1].year,
             fill: false,
             pointRadius: 0,
             borderColor:  '#32CCFE',
             data: data_1
           },
           {
             label: data[2].year,
             fill: false,
             pointRadius: 0,
             borderColor: '#000000',
             borderDash:[1,5],
             data: data_2
           }
         ]
       }
     })
   },

      getYTDData(){
        axios({
          method: "get",
          url: "https://luxb.news-mts.ru/api/v1/diagram/ytd",
          headers: {
            'X-Token' : this.$cookie.get('token')
          }
        }).then((resp) => {
          let data_0 = [resp.data.current_year.week, resp.data.current_year.month, resp.data.current_year.quarter];
          let data_1 = [resp.data.last_year.week, resp.data.last_year.month, resp.data.last_year.quarter];
          let data_2 = [];
        this.YTDData =   {
            labels: ['неделя', 'месяц', 'квартал'],
              datasets: [
                {
                  label: '2018',
                  backgroundColor: '#45E6B0',
                  data: data_0
                },{
                  label: '2017',
                  backgroundColor: '#32CCFE',
                  data: data_1
                },
                {
                  label: 'План 2018',
                  backgroundColor: '#C4C4C4',
                  data: data_2
                }
              ]
            },
          console.log(resp.data)
        });
        },





    recountData(e){
      e.preventDefault();
      axios.post('http://lux.news-mts/reinit');
    },
    fetchData() {
      // e.preventDefault();
      axios.post('http://lux.news-mts.ru/actualstock', {
          datestart: this.datestart,
          dateend: this.dateend,
          headers: {
'X-token': this.$cookie.get('token')
        },
        })
        .then((response) => {
            // this.chartData = response.data;
            // this.totalWidth = String(800) + 'px';
            // this.matrixFact = response.data.matrix_fact;
            // this.matrixPlan = response.data.matrix_plan;
            // this.total  = response.data.matrix_fact + response.data.actual + response.data.oop;
            // this.actual = response.data.actual;
            // this.oop = response.data.oop;
            this.chartData = {
                   labels: [' ', ' ', ' '],
                   datasets: [
                    {
                     type: 'horizontalBar',
                      label: "Matrix plan",
                      backgroundColor: 'rgba(130, 161, 248, 0.84)',
                      data: [response.data.matrix_plan,0,0]
                    },

                    {
                      type: 'horizontalBar',
                      label: "Total",
                      backgroundColor: 'rgba(0, 0, 0, 1)',
                      borderColor: 'rgba(0, 0, 0, 1)',
                      data: [0,response.data.stock_qty_sum,0]
                    },
                    {
                      type: 'horizontalBar',
                      label: "Matrix fact",
                      backgroundColor: 'rgba(133, 229, 82, 0.84)',
                      data: [0,0, response.data.matrix_fact]
                    },
                    {
                      type: 'horizontalBar',
                      label: "Actual",
                      backgroundColor: 'rgba(0, 72, 173, 0.84)',
                      data: [0,0,response.data.actual_not_in_plan]
                    },
                    { type: 'horizontalBar',
                      label: "oop",
                      backgroundColor: 'rgba(240, 200, 0, 0.84)',
                      data: [0, 0, response.data.oop]
                    },        ]

          }}
        )
        .catch(function(error) {
          console.log(error)
        })
    },
  },
  mounted(){
    console.log(this.width)
    this.loaded = false;
    this.$store.dispatch('changeIsTable', false)
    this.getLineData();
    this.getYTDData();
    this.loaded =true;
  },
  watch: {
    selected(){
      this.loaded = false;
      this.getLineData();
      this.loaded = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../static/main.scss";

  .charts{
    position: absolute;
    top: 50px;
    width: 100%;
    height: 900px;
    background: grey;
  }

  .line{
    padding: 10px;
    margin-top: 30px;
    position: absolute;
    background: white;
    border-radius: 15px;
    margin-left: 7%;
  }


  .stock{
    margin-top: 50px;
    position: absolute;
    margin-left: 7%;
    top: 480px;
    background: white;
    border-radius: 15px;
  }

  .ytd {
    padding: 10px;
    margin-top: 30px;
    position: absolute;
    margin-left: 60%;
    background: white;
    border-radius: 15px;
  }

  .chartLabel{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .chartLabel>div{
    padding: 16px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-size: 23px;
    color: #646B71;
  }

  .ytd>.chartLabel>div>p{
    width: 380px;
    text-align: center;
  }

  .chartLabel>select{
    height: 80%;
  }

</style>
