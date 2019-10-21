<template>
  <div class="running">
<table>
  <tbody>
    <tr>
      <td style="width: 50%;" >
     <ChartMDB />
     </td>
     <td>
      <BarChartRunning />
     </td>
     </tr>
    </tbody>
</table>
   <br />
    <h5>Dodajte pretrčanu dužinu, vreme i datum</h5>
     <br />
     <DodajTrcanje  />
</div>

</template>

<script>
import ChartMDB from './elements/ChartMDB.vue'
import DodajTrcanje from './elements/DodajTrcanje'
import BarChartRunning from './elements/BarChartRunning.vue'
import { mapState, mapMutations, mapGetters ,mapActions } from 'vuex';

export default {
  name: 'Running',
  data () {
    return {
    }
  },
  mounted(){
  },
  created(){
          
    this.$store.dispatch('actGetTrcanje7days')
    this.$store.dispatch('actGetTrcanje7months')

    this.$store.commit('RUN_RENDERER_FALSE')

    this.$nextTick(() => {
      this.$store.commit('RUN_RENDERER_TRUE')
    })
  },
  computed: {
    ...mapState([
      'runRenderer'
    ]),
    ...mapActions([
      'actGetTrcanje7days',
      'actGetTrcanje7months'
    ]),
    ...mapMutations([
      'RUN_RENDERER_TRUE',
      'RUN_RENDERER_FALSE'
    ])
  },
  beforeUpdate(){
    this.$store.dispatch('actGetTrcanje7days')
    this.$store.dispatch('actGetTrcanje7months')

    this.$store.commit('RUN_RENDERER_FALSE')

    this.$nextTick(() => {
      this.$store.commit('RUN_RENDERER_TRUE')
    });
  },
  components: {
      ChartMDB,
      DodajTrcanje,
      BarChartRunning
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
