<template>
<div v-if="renderPieGrams">
  <mdb-container>
    <mdb-line-chart :data="lineChartData" :options="lineChartOptions" :width="600" :height="300"></mdb-line-chart>
  </mdb-container>
</div>
</template>


<script>
  import axios from 'axios'
  import { mdbLineChart, mdbContainer } from 'mdbvue';
  import { mapState, mapMutations, mapGetters ,mapActions } from 'vuex';

  export default {
    name: 'ChartPage',
    components: {
      mdbLineChart,
      mdbContainer
    },
    beforeUpdate(){
       this.$store.dispatch('actGetNutrients')

      var allData = this.$store.getters.getNutrienti7Days
      this.lineChartData.datasets[2].data = [
      this.$store.getters.getNutrienti7Days[0].uh, 
      this.$store.getters.getNutrienti7Days[1].uh, 
      this.$store.getters.getNutrienti7Days[2].uh, 
      this.$store.getters.getNutrienti7Days[3].uh, 
      this.$store.getters.getNutrienti7Days[4].uh, 
      this.$store.getters.getNutrienti7Days[5].uh, 
      this.$store.getters.getNutrienti7Days[6].uh ]

      this.lineChartData.datasets[1].data = [
      this.$store.getters.getNutrienti7Days[0].fat, 
      this.$store.getters.getNutrienti7Days[1].fat, 
      this.$store.getters.getNutrienti7Days[2].fat, 
      this.$store.getters.getNutrienti7Days[3].fat, 
      this.$store.getters.getNutrienti7Days[4].fat, 
      this.$store.getters.getNutrienti7Days[5].fat, 
      this.$store.getters.getNutrienti7Days[6].fat ]

      this.lineChartData.datasets[0].data = [
      this.$store.getters.getNutrienti7Days[0].prot, 
      this.$store.getters.getNutrienti7Days[1].prot, 
      this.$store.getters.getNutrienti7Days[2].prot, 
      this.$store.getters.getNutrienti7Days[3].prot, 
      this.$store.getters.getNutrienti7Days[4].prot, 
      this.$store.getters.getNutrienti7Days[5].prot, 
      this.$store.getters.getNutrienti7Days[6].prot ]

    },
     data() {
      return {
        lineChartData: {
          labels: ["Utorak", "Sreda", "Četvrtak", "Petak", "Subota", "Nedelja", "Ponedeljak"],
          datasets: [
            {
              label: "Proteini",
              backgroundColor: "rgba(255, 0, 0, 0.1)",
              borderColor: "rgba(255, 0, 0, 1)",
              borderWidth: 0.7,
              data: []
            },
            {
              label: "Masti",
              backgroundColor: "rgba(0,0,200,0.2)",
              borderColor: "rgba(0,0,200,1)",
              borderWidth: 0.8,
              data: []  },
            {
              label: "Ugljenihidrati",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 0.8,
              data:  [] }
          ]
        },
        lineChartOptions: {
          responsive: false,
          maintainAspectRatio: true,
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
    },
    methods: {
      created(){
          this.$store.dispatch('actGetNutrients')
        var allData = this.$store.getters.getNutrienti7Days
        if(this.$store.getters.getNutrienti7Days !== undefined)
        {
          this.lineChartData.datasets[2].data = [
          this.$store.getters.getNutrienti7Days[0].uh, 
          this.$store.getters.getNutrienti7Days[1].uh, 
          this.$store.getters.getNutrienti7Days[2].uh, 
          this.$store.getters.getNutrienti7Days[3].uh, 
          this.$store.getters.getNutrienti7Days[4].uh, 
          this.$store.getters.getNutrienti7Days[5].uh, 
          this.$store.getters.getNutrienti7Days[6].uh ]

          this.lineChartData.datasets[1].data = [
          this.$store.getters.getNutrienti7Days[0].fat, 
          this.$store.getters.getNutrienti7Days[1].fat, 
          this.$store.getters.getNutrienti7Days[2].fat, 
          this.$store.getters.getNutrienti7Days[3].fat, 
          this.$store.getters.getNutrienti7Days[4].fat, 
          this.$store.getters.getNutrienti7Days[5].fat, 
          this.$store.getters.getNutrienti7Days[6].fat ]

          this.lineChartData.datasets[0].data = [
          this.$store.getters.getNutrienti7Days[0].prot, 
          this.$store.getters.getNutrienti7Days[1].prot, 
          this.$store.getters.getNutrienti7Days[2].prot, 
          this.$store.getters.getNutrienti7Days[3].prot, 
          this.$store.getters.getNutrienti7Days[4].prot, 
          this.$store.getters.getNutrienti7Days[5].prot, 
          this.$store.getters.getNutrienti7Days[6].prot ]
        }
      },
        ...mapActions([
            'actGetNutrients'
        ]),
        ...mapMutations([
              'RENDERER_TRUE',
              'RENDERER_FALSE'
          ])
      },
    computed: {
         ...mapState([
          'renderPieGrams',
           'proteinsGrams',
           'fatsGrams',
           'carbsGrams',
            'nutrijenti7days'
          ]),
        ...mapGetters([
            'getNutrienti7Days'
        ]),
     },
    mounted(){
    }
  }
</script>