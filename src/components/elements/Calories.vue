<template>
<div v-if="renderPieGrams">
  <mdb-container>
    <mdb-horizontal-bar-chart :data="horizontalBarChartData" :options="horizontalBarChartOptions" :width="300" :height="100"></mdb-horizontal-bar-chart>
  </mdb-container>
</div>
</template>

<script>
  import axios from 'axios'
  import { mdbHorizontalBarChart, mdbContainer } from 'mdbvue';
  import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'ChartPage',
    components: {
      mdbHorizontalBarChart,
      mdbContainer
    },
     beforeUpdate() {
        this.horizontalBarChartData.datasets[0].data = [ this.$store.getters.getUnete , this.$store.getters.getPotrosene , 0 ]
    },
    data() {
      return {
        horizontalBarChartData: {
          labels: ["Unete kalorije","Potrošene kalorije"],
          datasets: [{
            label:[ 'Unete i potrošene kalorije za danas'],
            data: [0, 0, 0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
          }]
        },
        horizontalBarChartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              barPercentage: 1,
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              }
            }],
            yAxes: [{
              gridLines: {
                display: true,
                color: "rgba(0, 0, 0, 0.1)",
              }
            }],
          }
        }
      };
    },
     computed: {
        ...mapState([
          'renderPieGrams',
          'caloriesUnete',
          'caloriesPotrosene'
        ]),
        ...mapGetters([
          'getGramsRender',
          'getUnete',
          'getPotrosene'
        ])
    },
    methods: {
      created(){
        this.horizontalBarChartData.datasets[0].data = [ this.$store.getters.getUnete , this.$store.getters.getPotrosene , 0 ]
      }, 
      ...mapActions([
        'getFoods'
      ]),
      ...mapMutations([
          'ADD_FOODSTAFF',
          'FORCE_RENDERER_TRUE',
          'FORCE_RENDERER_FALSE'
      ])
    }
  }
</script>