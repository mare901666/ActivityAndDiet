<template>
<div  v-if="renderComponentPie">
  <mdb-container >
    <mdb-doughnut-chart :data="doughnutChartData" :options="doughnutChartOptions" :width="600" :height="300" ></mdb-doughnut-chart>
  </mdb-container>
  </div>
</template>

<script>
  import { mdbDoughnutChart, mdbContainer } from 'mdbvue';
  import { mapState, mapMutations, mapGetters ,mapActions } from 'vuex';


  export default {
    name: 'ChartPage',
    mounted(){
      //this.ready()
    },
    components: {
      mdbDoughnutChart,
      mdbContainer
    },
    beforeUpdate() {
      this.doughnutChartData.datasets[0].data =  [ this.$store.getters.getProt , this.$store.getters.getCarbs, this.$store.getters.getFat ]
    },
    beforeCreate() {
      
    },
    methods: {
      created() {
        this.doughnutChartData.datasets[0].data =  [ this.$store.getters.getProt , this.$store.getters.getCarbs, this.$store.getters.getFat ]
      },
      ready(){
        this.handle = setInterval(() => {

        }, 1000)
      }
    },
    computed: {
        ...mapState([
          'pieDataProteins',
          'pieDataFats',
          'pieDataCarbs',
          'renderComponentPie'
        ]),
        ...mapGetters([
          'getProt', 
          'getCarbs', 
          'getFat',
          'renderCompPie'
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
        renderComponent: false,
        doughnutChartData: {
          labels: ["Proteini", "Ugljenihidrati", "Masti"],
          datasets: [
            {
              data: [0,0,0 ],
              backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
              hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
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

