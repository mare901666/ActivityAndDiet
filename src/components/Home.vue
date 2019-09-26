<template>
    <div>
 <h3>Ishrana i dnevna aktivnost</h3>

        <table>
            <tbody>

            <tr>
              <TableTraining /> 
            </tr>
            <tr>
            <td style="width: 50%;" class="align-top">
                 <TableFood style="width: 90%;" />
            </td>
               <td class="align-text-bottom"><PieDiagram /></td>
            </tr>
            </tbody>
        </table>
</div>
</template>


<script>
import PieDiagram from './elements/PieDiagram.vue'
import TableFood from './elements/TableFood'
import TableTraining from './elements/TableTraining'

export default {
  name: 'Home',
   components: {
    PieDiagram,
    TableFood,
    TableTraining
  }
}
</script>


<style>


</style>