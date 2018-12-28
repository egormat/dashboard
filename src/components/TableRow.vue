<template>
  <div class="row">
    <OrderWindow v-if="showOrderWindow" :id="id" v-on:close="showOrderWindow = !showOrderWindow"/>
    <!-- {{id}} -->
    <li class="rowItem clickable" @click="$emit('headerClick', id, name)" v-if="name!=null">
      {{name}}
    </li>
    <li class="rowItem clickable" @click="$emit('headerClick', id, id)" v-else>
      {{id}}
    </li>

    <li class="rowItem">
    {{data.turnaround == null ? '-' : data.turnaround}}
  </li>
  <li  class="rowItem">
    {{data.part_in_brand == null ? '-' : data.part_in_brand}}
  </li>
  <li  class="rowItem">
    {{data.target == null ? '-' : data.target}}
  </li>
  <li  class="rowItem">
    {{data.matrix}}
  </li>
  <li  class="rowItem">
    {{data.stok_qt}}
  </li>
  <li  class="rowItem">
    {{data.stock_per == null ? '-' : data.stock_per}}
  </li>
  <li  class="rowItem order">
    <button v-if="showOrder" class="orderButton" @click="showOrderWindow = !showOrderWindow">Ордер</button>
  </li>
  <li class="rowItem">
    {{data.sell_out}}
  </li>
  <li  class="rowItem">
    {{data.ytd == null ? '-' : data.ytd}}
  </li>
  <li  class="rowItem">
    {{data.trend == null ? '-' : data.trend}}
  </li>
  </div>
</template>

<script>
import axios from 'axios'
import OrderWindow from './OrderWindow.vue'
export default {
  name: 'TableRow',
  props: ['data', 'id', 'name','showOrder'],
  components: {
    OrderWindow
  },
  methods: {

  },
  data(){
    return {
    showOrderWindow: false,
    order : []
  }
  }
}

</script>

<style scoped>
.row{
  width: 100%;
  height: 47px;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
}

.rowItem{
  font-family: 'Roboto', sans-serif;
  width: 8.7%;
  list-style-type: none;
padding-top: 13.5px;
  font-size: 20px;
  border-bottom: 1px solid #C4C4C4;
  text-align: right;
  padding-right: 15px;
}
.rowItem:nth-of-type(4n){
  border-right: 2px solid #AAAAAA;
}

.clickable{
  cursor: pointer;
  width: 13.7%;
  background: #F3F3F3;
  line-height: 21px;
  font-size: 18px;
  padding-top: 13.5px;
  text-align: left;
  padding-left: 15px;
}

.order {
padding-top: 5px;
}

.orderButton {
  height: 34px;
  width: 71px;
  background: transparent;
  border: 1px solid #32CCFE;
  color: #32CCFE;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
}

.orderButton:hover{
  background: #45E6B0;
  color: black;
}


</style>
