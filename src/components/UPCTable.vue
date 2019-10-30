<template>
  <div class="tableWrap">
    <TableRow :data="headers" :name="headers.name" class="headers" />
    <TableRow v-for="item in data"
              :data="item"
              :id="item.id"
              :name="item.name"
              :showOrder="false"
              :key="item.id"/>
  </div>
</template>

<script>
import TableRow from './TableRow.vue'
import axios from 'axios'

export default {
  name: 'UPCTable',
  components: {
    TableRow,
  },
  data(){
    return {
      data: [],
      upc: [],
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
    getUpc(){
      this.data = [];
      axios({
        method: "get",
        url: "https://luxb.news-mts.ru/api/v1/tables/companies/" + this.$route.params.companyId + '/doors/' + this.$route.params.doorId + '/upc' ,
        headers: {
          'X-Token' :this.$cookie.get('token')
        }
      }).then((resp) => {
        console.log(resp)
        this.upc = resp.data.UPCs;
        for (let i = 0; i<=this.upc.length-1; i++){
          axios({
            method: "get",
            url: "https://luxb.news-mts.ru/api/v1/tables/companies/" + this.$route.params.companyId + '/doors/' + this.$route.params.doorId + '/upc/' + resp.data.UPCs[i].id,
            headers: {
               this.$cookie.get('token')
            }
        })
        .then((resp)=>{
          console.log(resp.data)
          this.data.push(Object.assign({}, this.upc[i], resp.data))
          console.log(this.data[i])
            // this.companies = resp.data
        })
      }
              });
    },

    headerClick(id){
      this.$router.push({name: 'doors', params: {companyId : id}})
      this.$store.dispatch('addNavItem', )

    }
  },
  created(){
    this.$store.dispatch('changeIsTable', true).
    then(()=>{
        this.getUpc()
    })

  }

}
</script>
