import  Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex);
 const store =  new Vuex.Store({
   state: {
     date: {
       currentYear: null,
       lastYear: null,
     },
     lineChartData: {
       labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],
       datasets: [
         {
           label: '',
           fill: false,
           // pointRadius: 0,
           borderColor:  '#45E6B0',
           data: [
             // {x: 2, y:40},{x: 5, y:80},{x: 8, y:90},{x: 12, y:47},{x: 22, y:4}
           ]
         },{
           label: '',
           fill: false,
           // pointRadius: 0,
           borderColor:  '#32CCFE',
           data: [
             // {x: 5, y:20},{x: 17, y:8},{x: 37, y:56},{x: 47, y:77},{x: 52, y:48}
           ]
         },
         {
           label: '',
           fill: false,
           // pointRadius: 0,
           borderColor: '#000000',
           borderDash:[1,5],
           data: [
             // {x: 4, y:40},{x: 6, y:80},{x: 8, y:90},{x: 17, y:47},{x: 32, y:4}
           ]
         }
       ]
     },
     nav : ['Данные о продажах'],
     user: {
       token: ''
     },
     isTable : false
   },
   mutations: {
     // resp.data = datasets
     SET_LINE_DATA(state, data){
       for(let i=0;i<=data.years.length-1;i++){
         state.lineChartData.datasets[i].label = data.years[i].year
         state.lineChartData.datasets[i].data = [];
         for (let k=0;k<=data.years[i].points.length-1; k++){
           state.lineChartData.datasets[i].data.push({x: data.years[i].points[k].week, y:data.years[i].points[k].value})
         }
         }
     },
     CHANGE_IS_TABLE(state, bool){
       state.isTable = bool;
     },
     ADD_NAV_ITEM(state,item){
       state.nav.push(item)
     },
     REMOVE_NAV_ITEM(state){
       state.nav.pop()
       // if (i == 0) {
       //   state.nav.splice(0, 2)
       // }
       // if (i == 1){
       //   state.nav.splice(1, 1)
       // }
     },
     SET_TOKEN(state, token){
       state.user.token = token
     },
     SET_DATE(state, date){
       state.date.currentYear = date.current_year[0].toString();
       state.date.lastYear = date.last_year[0].toString();
     }
   },
   getters: {
     getIsTable(state){
       return state.isTable;
     },
     getNav(state){
       return state.nav
     },
     getToken(state){
       return state.user.token
     },
     getDate(state){
       return state.date
     },
     getLineChartData(state){
       return state.lineChartData;
     }
   },
   actions: {
     setLineData({commit}, type){
         axios({
           method: "get",
           url: "https://luxb.news-mts.ru/api/v1/diagram/sales"+"?type=" +type + "&company=0",
           headers: {
             'X-Token' : 'ba8c2a64576b4f0fb2cd206f959dabd9'
           }
         }).then((resp) => {
           console.log(type)
           console.log(resp.data)
           commit('SET_LINE_DATA', resp.data)
         })

     },
     changeIsTable({commit}, bool){
       commit('CHANGE_IS_TABLE', bool);
     },
     addNavItem({commit},item){
       commit('ADD_NAV_ITEM', item)
     },
     removeNavItem({commit},item){
       commit('REMOVE_NAV_ITEM', item)
     },
     setToken({commit}, token){
       commit('SET_TOKEN', token)
     },
     setDate({commit}, date){
       commit('SET_DATE', date)
     }
   }
})


export default store;
