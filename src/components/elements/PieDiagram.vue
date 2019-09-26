<template>
  <mdb-container>
    <mdb-doughnut-chart :data="doughnutChartData" :options="doughnutChartOptions" :width="600" :height="300"></mdb-doughnut-chart>
  </mdb-container>
</template>

<script>
  import { mdbDoughnutChart, mdbContainer } from 'mdbvue';
  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'ChartPage',
    components: {
      mdbDoughnutChart,
      mdbContainer
    },
    data() {
      return {
        doughnutChartData: {
          labels: ["Proteini", "Ugljenihidrati", "Masti"],
          datasets: [
            {
              data: [200, 200, 200],
              backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
              hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
            }
          ]
        },
        doughnutChartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      };
    }
  }
</script>