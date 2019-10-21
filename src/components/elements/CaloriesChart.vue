<template>
<div v-if="renderPieGrams">
  <mdb-container>
    <mdb-bar-chart :data="barChartData" :options="barChartOptions" :width="600" :height="300"></mdb-bar-chart>
  </mdb-container>
</div>
</template>



<script>
  import axios from 'axios'
  import { mdbBarChart, mdbContainer } from 'mdbvue';
  import { mapState, mapMutations, mapGetters ,mapActions } from 'vuex';

  export default {
    name: 'ChartPage',
    components: {
      mdbBarChart,
      mdbContainer
    },
    beforeUpdate() {
        this.$store.dispatch('actCalSufDef')
        this.$nextTick(() => {
        this.barChartData.datasets[0].data = this.$store.getters.getCalSufDef
          });
    },
    data() {
      return {
        info: [],
        barChartData: {
          labels: ["Utorak", "Sreda", "Četvrtak", "Petak", "Subota", "Nedelja", "Ponedeljak"],
          datasets: [{
            label: 'Kalorijski nedostatak/višak ove nedelje',
            data:  this.$store.getters.getCalSufDef,
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
    },
    mounted(){
    },
    computed: {
        ...mapGetters([
          'renderCompPie',
           'getGramsRender',
           'getCalSufDef'
        ]),
        ...mapMutations([
          'RENDERER_TRUE',
          'RENDERER_FALSE'
        ])
     
    },
    methods: {
         ...mapActions([
          'actCalSufDef'
        ]),
          ...mapState([
          'renderComponentPie',
          'renderPieGrams',
          'calSufDef'
        ]),
      created() {
           this.$store.dispatch('actCalSufDef')
        this.$nextTick(() => {
        this.barChartData.datasets[0].data = this.$store.getters.getCalSufDef
          });
      }
    },
    beforeCreate(){
         this.$store.dispatch('actCalSufDef')
        this.$nextTick(() => {
        this.barChartData.datasets[0].data = this.$store.getters.getCalSufDef
          });
           this.barChartData.datasets[0].data = this.$store.getters.getCalSufDef
    },
    beforeMount(){
        this.barChartData.datasets[0].data = this.$store.getters.getCalSufDef
    }
  }
</script>
