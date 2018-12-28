<template>
<div class="table">
  <!-- из стора:  {{$store.getters.getToken}}
  из кук:  {{this.$cookie.get('token')}} -->
  <TableNavigation :data="navigation"/>
  <div class="date">
  </div>
  <router-view class="tab"></router-view>

</div>
</template>


<script>
import axios from 'axios';
import TableRow from './TableRow.vue';
import TableNavigation from './TableNavigation.vue'
import CompaniesTable from './CompaniesTable.vue'
import DoorsTable from './DoorsTable.vue'
export default {
  components: {
    TableRow,
    TableNavigation,
    CompaniesTable,
    DoorsTable,
  },
  name: 'Table',
  data(){
    return{
    data:[],
    companies: [],
    doors: [],
    company: null,
    door: null,
    navigation : [],

    headers: {
      "name": "Клиент",
      "turnaround": "Обор",
       "part_in_brand": "Доля в бренде",
       "target": "Target",
       "matrix": "Матрица",
       "stok_qt": "stok(шт)",
       "stock_per": "stok(%)",
       "sell_out": "Sell Out",
       "ytd": "YTD",
       "trend": "trend"
    }
  }
  },






  created(){
    if (this.$cookie.get('token') || this.$cookie.get('token')!=this.$store.getters.getToken){
      this.$router.replace('/login')
    }
    if (!this.$store.getters.getToken){
      this.$router.replace('/login')
    }
    // this.login()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{
  margin: 0;
  padding: 0;
}
.date {
  width: 100%;
  height: 70px;
  background: white;
  margin-bottom: 15px;
  -webkit-box-shadow: 2px 4px 29px -4px rgba(0,0,0,0.75);
-moz-box-shadow: 2px 4px 29px -4px rgba(0,0,0,0.75);
box-shadow: 2px 4px 29px -4px rgba(0,0,0,0.75);
}
.table{
  width: 100%;
}


.headers{
  background: #F3F3F3;
}
.headers .rowItem {
  font-size: 14px
}
.headers .order button{
  visibility: hidden;
}
</style>
