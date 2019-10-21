<template>
  <div v-if="renderPieGrams" class="pregled">
      <Calories />
<b-container  fluid>
   <b-row align-h="center">
     <b-col sm="3">
       <b-button @click="dodajEvidenciju" size="sm" >Dodaj kalorije i nutrijente</b-button>
     </b-col>
     <b-col sm="3">
       <b-form-input v-model="datedate" :type="type"></b-form-input>
     </b-col>
  </b-row>
 </b-container>
<table>      
    <tbody>
      <tr>
      <td >
         <ProteinFatCarbs />
      </td>
      <td style="width: 20%;">
        Izabrane namirnice
        <StoreFood />
      </td>
      
      <td style="width: 20%;">
        Izabrane aktivnosti
        <StoreTraining />
      </td>
      </tr>
    </tbody>
</table>
<br />
<table>      
    <tbody>
      <tr>
      <td >
        <CaloriesChart />
      </td>
      <td style="width: 50%;" >
        Odnos nutrijenata izabranih namirnica
        <PieGrams   />
      </td>
      </tr>
    </tbody>
</table>
  </div>
</template>

<script>
import ProteinFatCarbs from './elements/ProteinFatCarbs'
import Calories from './elements/Calories'
import StoreFood from './elements/StoreFood'
import StoreTraining from './elements/StoreTraining'
import PieGrams from './elements/PieGrams'
import CaloriesChart from './elements/CaloriesChart'
import { mapState, mapMutations, mapGetters ,mapActions } from 'vuex';
import axios from 'axios'

export default {
  name: 'Pregled',
  data () {
    return {
          datedate: Date.now(),
          type: "date"
    }
  },
  computed: {
  },
  mounted(){
      this.$store.dispatch('countCalsAndNutritions')
      this.$store.dispatch('actCalSufDef')
      this.$store.dispatch('actGetNutrients')

      this.$store.commit('RENDERER_FALSE')

      this.$nextTick(() => {
          this.$store.commit('RENDERER_TRUE')
      });
  },
  created(){
      this.$store.dispatch('countCalsAndNutritions')
      this.$store.dispatch('actCalSufDef')
      this.$store.dispatch('actGetNutrients')

      this.$store.commit('RENDERER_FALSE')

      this.$nextTick(() => {
          this.$store.commit('RENDERER_TRUE')
      });
  },
  methods:{
    refreshPage(){

      this.$store.dispatch('countCalsAndNutritions')
      this.$store.dispatch('actCalSufDef')
      this.$store.dispatch('actGetNutrients')

      this.$store.commit('RENDERER_FALSE')

      this.$nextTick(() => {
        this.$store.commit('RENDERER_TRUE')
      });
    },
    dodajEvidenciju(){

      console.log(new Date().toJSON())

      let data = {
        id: 0,
        korisnikId: 1,
        kalorijePotrosene: this.$store.getters.getUnete | 0,
        kalorijeUnete: this.$store.getters.getPotrosene | 0,
        proteini: this.$store.getters.getProtGrams | 0,
        masti: this.$store.getters.getFatGrams | 0,
        ugljenihidrati: this.$store.getters.getCarbsGrams | 0,
        dan: this.datedate
      }
    console.log(data)

    axios.post('http://localhost:5001/api/Korisnik/Evidencije/1', 
      data,
      {
      headers:{
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
              'Accept': 'application/json, text/plain, */*',
              'Access-Control-Allow-Headers': 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
      }})
      .then(response => {

            alert("Kalorije i nutrijenti dodati")
            console.log(response.data)
            this.$store.commit('CLEAR_FOODSTAFF')
            this.$store.commit('CLEAR_ACTIVITY')

            this.$store.dispatch('countCalsAndNutritions')
            this.$store.dispatch('actCalSufDef')
            this.$store.dispatch('actGetNutrients')

            this.$store.commit('RENDERER_FALSE')
            this.$nextTick(() => {
                this.$store.commit('RENDERER_TRUE')
            });

            this.$store.dispatch('actGetTrcanje7days')
            this.$store.dispatch('actGetTrcanje7months')

            this.$store.commit('RUN_RENDERER_FALSE')

            this.$nextTick(() => {
              this.$store.commit('RUN_RENDERER_TRUE')
            });
      })
      .catch(error => {
          console.log(error)
          alert("Doslo je do greske")
      });
    },
    ...mapMutations([
      'RENDERER_TRUE',
      'RENDERER_FALSE',
      'CLEAR_FOODSTAFF',
      'CLEAR_ACTIVITY',
      'CAL_SUF_DEF',
      'NUTRIJENTI_7_DAYS',
      'RUN_RENDERER_FALSE',
      'RUN_RENDERER_TRUE'
    ]),
      ...mapActions([
      'countCalsAndNutritions',
      'actCalSufDef',
      'actGetNutrients',
      'actGetTrcanje7days',
      'actGetTrcanje7months',
      'renderPieGrams',
    ]),
      ...mapGetters([
      'getProtGrams', 
      'getCarbsGrams', 
      'getFatGrams',
      'getGramsRender',
      'getUnete',
      'getPotrosene'
    ]),
    ...mapState([
      'renderPieGrams'
    ])
  },
  beforeCreate(){
    this.$store.dispatch('countCalsAndNutritions')
    this.$store.dispatch('actCalSufDef')
    this.$store.dispatch('actGetNutrients')

    this.$store.commit('RENDERER_FALSE')

    this.$nextTick(() => {
        this.$store.commit('RENDERER_TRUE')
    });

  },
  beforeUpdate(){

    this.$store.dispatch('countCalsAndNutritions')
    this.$store.dispatch('actCalSufDef')
    this.$store.dispatch('actGetNutrients')

    this.$store.commit('RENDERER_FALSE')

    this.$nextTick(() => {
      this.$store.commit('RENDERER_TRUE')
    });
  },
  components: {
    ProteinFatCarbs,
    Calories,
    StoreFood,
    StoreTraining,
    PieGrams,
    CaloriesChart
  }
}
</script>


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
