<template>
  <div class="navBar">
    <TableNavigation/>
  <div class="mainNav">
    <li @click="$router.push('/diagrams')"  v-bind:class="{active: !isTable}">
      Диаграммы
    </li>
    <li @click="$router.push('/table')" v-bind:class="{active: isTable}">
      Таблицы
    </li>
  </div>
  <div class="dateBar">
    Выбрать период
    <input type="date">
    <input type="date">
  </div>
  </div>
</template>



<script>

import TableNavigation from  './TableNavigation.vue';


export default {
components: {
  TableNavigation,
},
  computed :{
    isTable() {
      return this.$store.getters.getIsTable;
    }
  }


}
</script>


<style scoped>

.navBar{
  margin: 0;
  position: absolute;
  top: 0;
  background: #2e3d54;
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
}

.mainNav{
  margin-left: 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.mainNav li {
  background: #2e3d54;
  padding-top: 25px;
  padding-bottom: 10px;
  border-radius: 2px;
  border-bottom: none;
  height: 100%;
  margin-left: 50px;
  width: 278px;
  color:#FFFFFF;
  font-size: 21px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  cursor: pointer;
}

.mainNav .active {
  background: white;
  color: #2e3d54;
}

.dateBar{
  position: absolute;
  top: 70px;
  z-index: 9999;
  width: 100%;
  height: 70px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  color:  #2E3D54;
  font-family: 'Roboto', sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

}

.dateBar input{
  margin: 5px;
}

.dateBar input:first-child {
  margin-left: 10px;
}

</style>
