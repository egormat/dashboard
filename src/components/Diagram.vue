<template>
  <div class="chart">
  <div class="xAxis">
  </div>
  <div class="diagram">
    <div class="matrixPlan" :style="{width: matrixPlanWidth,
                                    display : (matrixPlan == 0) ? 'none' : 'block'}">Matrix Plan</div>
    <div class="total" :style="{width: totalWidth}">Total</div>
    <div class="tRow">
      <div class="matrixFact" :style="{width: matrixFactWidth,
                                      display : (matrixFact == 0) ? 'none' : 'block'}">matrixFact</div>
      <div class="actual" :style="{width: actualWidth,
                                  display : (actual == 0) ? 'none' : 'block'}">actual</div>
      <div class="oop" :style="{width: oopWidth,
                                display : (oop == 0) ? 'none' : 'block'}">oop</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  props:['matrixPlan', 'total', 'matrixFact', 'actual', 'oop', 'totalWidth'],

  computed: {
    matrixPlanWidth(){
      const matrixPlanWidth = 800* (this.matrixPlan / this.total);
      return String(matrixPlanWidth) + 'px';
    },
    matrixFactWidth(){
      const matrixFactWidth = 800*(this.matrixFact / this.total);
      return String(matrixFactWidth) + 'px';
    },
    actualWidth(){
      const actualWidth = 800 *(this.actual / this.total);
      return String(actualWidth) + 'px';
    },
    oopWidth(){
      const oopWidth = 800*(this.oop / this.total);
      return String(oopWidth) + 'px';
    }
  }


}

</script>
<style lang="scss" scoped>
  @import "../static/main.scss";
</style>
