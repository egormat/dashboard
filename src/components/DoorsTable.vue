<template>
  <div class="tableWrap">
    <TableRow :data="headers" :name="headers.name" class="headers" />
    <TableRow v-for="item in data"
              :data="item"
              :id="item.id"
              :name="item.name"
              :showOrder="false"
              v-on:headerClick="headerClick"
              :key="item.id"/>
  </div>
</template>

<script>
import TableRow from './TableRow.vue'
import axios from 'axios'


export default {
  name: 'DoorsTable',
  components: {
    TableRow
  },
  data(){
    return {
      data: [],
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
  methods: {
    getDoors(){
      this.data = [];
      axios({
        method: "get",
        url: "https://luxb.news-mts.ru/api/v1/tables/companies/" + this.$route.params.companyId + '/doors',
        headers: {
          'X-Token' : this.$cookie.get('token')
        }
      }).then((resp) => {
        this.doors = resp.data.doors;
        for (let i = 0; i<=this.doors.length-1; i++){
          axios({
            method: "get",
            url: "https://luxb.news-mts.ru/api/v1/tables/companies/" + this.$route.params.companyId + '/doors/' + resp.data.doors[i].id,
            headers: {
              'X-Token' :'ba8c2a64576b4f0fb2cd206f959dabd9'
               // this.$cookie.get('token')
            }
        })
        .then((resp)=>{
          this.data.push(Object.assign({}, this.doors[i], resp.data))
            // this.companies = resp.data
        })
      }
              });
    },
    headerClick(id){
      console.log(this.$route.params)
      this.$router.push({name: 'upc', params: {companyId : this.$route.params.companyId, doorId : id}})
      this.$store.dispatch('addNavItem', id)
    }

  },
  created(){
    this.$store.dispatch('changeIsTable', true).
    then(()=>{
        this.getDoors()
    })
  }

}
</script>
