<template >
<div v-if="runRenderer">
  <mdb-container>
    <br />
    <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :width="600" :height="300"></mdb-line-chart>
  </mdb-container>
</div>
</template>


<script>
  import { mdbLineChart, mdbContainer } from 'mdbvue';
import { mapGetters, mapState, mapActions, mapMutations } from 'vuex';
  export default {
    name: 'ChartPage',
    components: {
      mdbLineChart,
      mdbContainer
    },
    beforeCreate(){
      this.lineChartData.datasets[0].data = this.$store.getters.gettrcanje7months
    },
    beforeUpdate() {
      this.lineChartData.datasets[0].data = this.$store.getters.gettrcanje7months
    },
    methods: {
      created() {
        this.lineChartData.datasets[0].data = this.$store.getters.gettrcanje7months 
      },
    },
    computed: {
        ...mapState([
          'trcanje7months',
          'runRenderer'
        ]),
        ...mapGetters([
          'gettrcanje7months'
        ])
    },
    data() {
      return {
        lineChartData: {
          labels: ["April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar"],
          datasets: [
            {
              label: "Mesečni tempo trčanja (min/km)",
              backgroundColor: "rgba(151,187,205,0.2)",
              borderColor: "rgba(151,187,205,1)",
              borderWidth: 0.8,
              data: this.$store.state.trcanje7months 
            }
          ]
        },
        lineChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }],
            yAxes: [{
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)"
              }
            }]
          }
        }
      };
    }
  }
</script>