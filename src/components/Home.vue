<template>
    <div>
 <h3>Dnevna aktivnost i ishrana</h3>
        <table>
            <tbody>
          <h5>Odaberite akrivnosti i namirnice</h5>
            <tr>
              <td style="width: 50%;" class="align-top">
               <TableTraining style="width: 90%;"  /> 
               </td>
               <td class="align-text-bottom"> 
                 <BasalMetabolism /></td>
            </tr>
            <tr>
            <td style="width: 50%;" class="align-top">
                 <TableFood :item="item" style="width: 90%;" />
            </td>
               <td class="align-text-bottom"><PieDiagram /></td>
            </tr>
            </tbody>
        </table>
         <h5>Nakon unetih aktivnosti i namirnica kliknite odeljak pregled.</h5>
          <h5>Preporuka - Da biste mogli da vodite evidenciju preporucujemo da se registrujete i prijavite.</h5>
         <br />
</div>
</template>


<script>
import PieDiagram from './elements/PieDiagram.vue'
import TableFood from './elements/TableFood'
import TableTraining from './elements/TableTraining'
import BasalMetabolism from './elements/BasalMetabolism'
import { mapState, mapMutations, mapGetters ,mapActions } from 'vuex';

export default {
  name: 'Home',
  data: () => {
    return {
      item: 0
    }
  },
   methods:{
        ...mapMutations([
          'RENDERER_TRUE',
          'RENDERER_FALSE',
          'RUN_RENDERER_FALSE',
          'RUN_RENDERER_TRUE'
        ]),
         ...mapActions([
          'countCalsAndNutritions',
          'renderPieGrams',
          'actCalSufDef',
          'actGetTrcanje7days',
          'actGetTrcanje7months',
          'actGetNutrients'
        ]),
         ...mapGetters([
          'getProtGrams', 
          'getCarbsGrams', 
          'getFatGrams',
          'getGramsRender'
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

            
            this.$store.dispatch('actGetTrcanje7days')
            this.$store.dispatch('actGetTrcanje7months')

            this.$store.commit('RUN_RENDERER_FALSE')

            this.$nextTick(() => {
              this.$store.commit('RUN_RENDERER_TRUE')
            });
  },
   components: {
    PieDiagram,
    TableFood,
    TableTraining,
    BasalMetabolism
  }
}
</script>


<style>


</style>