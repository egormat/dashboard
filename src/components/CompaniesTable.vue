<template>
  <div class="tableWrap">
    <TableRow :data="headers" :name="headers.name" class="headers" />
    <TableRow v-for="item in data"
              :data="item"
              :id="item.id"
              :name="item.name"
              :showOrder="true"
              v-on:headerClick="headerClick"
              :key="item.id"/>

  </div>

</template>

<script>
import TableRow from './TableRow.vue'
import axios from 'axios'

export default {
  name: 'CompaniesTable',
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
    getCompanies(){
      axios({
        method: "get",
        url: "https://luxb.news-mts.ru/api/v1/lists/companies",
        headers: {
          'X-Token' : 'ba8c2a64576b4f0fb2cd206f959dabd9'
        }
      }).then((resp) => {
        this.companies = resp.data;
        for (let i = 0; i<=this.companies.length-1; i++){
          axios({
            method: "get",
            url: "https://luxb.news-mts.ru/api/v1/tables/companies/" + resp.data[i].id,
            headers: {
              'X-Token' : 'ba8c2a64576b4f0fb2cd206f959dabd9'
              // this.$store.getters.getToken
            }
        })
        .then((resp)=>{
          this.data.push(Object.assign({}, this.companies[i], resp.data))
            // this.companies = resp.data
        })
      }
              });
    },

    headerClick(id, name){
      this.$router.push({name: 'doors', params: {companyId : id}})
      this.$store.dispatch('addNavItem', name)
    }
  },
  created(){
    this.$store.dispatch('changeIsTable', true).then(()=>{
      this.getCompanies();
    })

  }

}
</script>

<style>
.tableWrap{
  position: absolute;
  top: 70px;
  width: 100%;
}
</style>
