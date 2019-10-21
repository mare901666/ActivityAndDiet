<template >
<div v-if="runRenderer">
  <mdb-container>
    <mdb-bar-chart  :data="barChartData" :options="barChartOptions" :width="600" :height="300"></mdb-bar-chart>
  </mdb-container>
</div>
</template>

<script>
  import { mdbBarChart, mdbContainer } from 'mdbvue';
  import { mapGetters, mapState, mapActions, mapMutations } from 'vuex';
  export default {
    name: 'ChartPage',
    components: {
      mdbBarChart,
      mdbContainer
    },
    beforeUpdate() {

      this.barChartData.datasets[0].data = this.$store.getters.gettrcanje7days
    },
    methods: {
      created() {
        this.barChartData.datasets[0].data = this.$store.getters.gettrcanje7days 
      },
    },
    computed: {
        ...mapState([
          'trcanje7days',
          'runRenderer'
        ]),
        ...mapGetters([
          'gettrcanje7days'
        ])
    },
    data() {
      return {
        barChartData: {
          labels: ["Utorak", "Sreda", "Četvrtak", "Petak", "Subota", "Nedelja", "Ponedeljak"],
          datasets: [{
            label: 'Dnevni tempo trčanja proteklih 7 dana (min/km)',
            data:  [],
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
          }]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              barPercentage: 1,
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
