<template>
<div  v-if="renderPieGrams">
  <mdb-container>
    <mdb-doughnut-chart :data="doughnutChartData" :options="doughnutChartOptions" :width="600" :height="300"></mdb-doughnut-chart>
  </mdb-container>
</div>
</template>

<script>
  import { mdbDoughnutChart, mdbContainer } from 'mdbvue';
   import { mapState, mapMutations, mapGetters ,mapActions } from 'vuex';


  export default {
    name: 'ChartPage',
    components: {
      mdbDoughnutChart,
      mdbContainer
    }, 
    beforeUpdate() {
      this.doughnutChartData.datasets[0].data =  [ this.$store.getters.getProtGrams , this.$store.getters.getFatGrams, this.$store.getters.getCarbsGrams ]
    },
    methods: {
      created() {
        this.doughnutChartData.datasets[0].data =  [ this.$store.getters.getProtGrams , this.$store.getters.getFatGrams, this.$store.getters.getCarbsGrams ]
      },
    },
    computed: {
        ...mapState([
          'pie',
          'renderPieGrams'
        ]),
        ...mapGetters([
          'getProtGrams', 
          'getCarbsGrams', 
          'getFatGrams',
          'getGramsRender'
        ]),
        ...mapMutations([
          'PADD_PIEDATA',
          'FADD_PIEDATA',
          'CADD_PIEDATA',
          'FORCE_RENDERER_TRUE'
        ])
    },
    data() {
      return {
        doughnutChartData: {
          labels: ["Proteini", "Masti", "Ugljenihidrati"],
          datasets: [
            {
              data: [0, 0, 0],
              backgroundColor: ["rgba(255, 0, 0, 0.1)", "rgba(0,0,200,0.2)", "rgba(54, 162, 235, 0.2)"],
              borderColor: ["rgba(255, 0, 0, 1)", "rgba(0,0,200,1)", "rgba(54, 162, 235, 1)"],
              hoverBackgroundColor: ["rgba(255, 0, 0, 0.5)", "rgba(0,0,200,0.5)", "rgba(54, 162, 235, 0.5)"]
            }
          ]
        },
        doughnutChartOptions: {
          responsive: false,
          maintainAspectRatio: false
        }
      };
    }
  }
</script>