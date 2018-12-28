<template>
  <div class="orderWindow">
    <div class="orderWindowItem first" >
      Ордер
      <button @click='$emit("close")'>
        Закрыть
      </button>
    </div>
    <div v-for="(value, key) in data" class="orderWindowItem">
      {{key}} : {{value}}
    </div>
    <button class="makeOrderButton" @click="makeOrder">
      Дозаказать
    </button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'OrderWindow',
  props: ['id'],
  data(){
    return{
      data: null
    }
  },
  methods: {
    getOrderInfo(){
      axios({
        method: "get",
        url: "https://luxb.news-mts.ru/api/v1/tables/companies/" +this.id + "/order",
        headers: {
          'X-Token' : this.$cookie.get('token')
        }
      })
      .then((resp)=>{
        console.log(resp)
        this.data = resp.data.order
      })
    },
    makeOrder(){
      axios({
  url: "https://luxb.news-mts.ru/api/v1/tables/companies/" +this.id + "/order/file",
  method: 'GET',
  headers: {
    'X-Token' : this.$cookie.get('token')
  },
  // responseType: 'blob', // important
}).then((response) => {
  console.log(response)
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', "file.xls");
  document.body.appendChild(link);
  link.click();
});
    }
  },
  created(){
    this.getOrderInfo();
  }
}

</script>

<style>
.orderWindow {
  position: absolute;
  height: 300px;
  width: 19.5%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px -4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}

.orderWindowItem{
  width: 80%;
  height: 8.2%;
  text-align: right;
  padding: 5px;
}
.orderWindowItem:nth-child(even){
  background: #EDEDED;
}

.first {
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.makeOrderButton {
  margin-top: 20px;
  background: #32CCFE;
  border-radius: 10px;
  width: 80%;
  height: 11.5%;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}
</style>
