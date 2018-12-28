<!-- <template>
  <div> -->
<canvas class="canvas">
</canvas>
<!-- </div>
</template> -->

<script>
import VueCharts from 'vue-chartjs'

import {Line, mixins} from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData', 'options','type'],
  computed: {
    data(){
      return this.$store.getters.getLineChartData
    }
  },
  mounted(){
    this.renderChart(this.chartData, this.options);
  },
}
</script>

<style lang="scss" scoped>
@import "../static/main.scss";
#canvas {
  position: absolute;
  width: 10px;
}
</style>
