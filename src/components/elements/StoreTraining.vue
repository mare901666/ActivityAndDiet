<template>
  <div>
    <b-table v-if="this.info.data"
      striped hover
      :small="small"
      ref="selectableTable"
      selectable
      :select-mode="selectMode"
      selected-variant="success"
      :items="activityStore"
      :fields="fields"
      @row-selected="onRowSelected"
      responsive="sm"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template v-if="this.info.data" v-slot:cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
    <div  v-if="selected">
      <b-button size="sm" @click="addActivity">Obriši</b-button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        value: 60,
        rows: 10,
        perPage: 5,
        currentPage: 1,
        info: [],
        modes: ['multi', 'single', 'range'],
        fields: [
          {
           key: 'name',
           label: "Aktivnost" 
          },
          {
           key: 'minutes',
           label: 'Vreme u minutima'
          }
        ],
        selectMode: 'single',
        selected: null,
        small: true,
        foods: [{ text: 'Izaberi sort', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      }
    },
    methods: {
      ...mapMutations([
          'ADD_ACTIVITY'
      ]),
      
      addActivity: function() {
        this.selected[0]['minutes'] = this.value
        this.ADD_ACTIVITY(this.selected[0])
        this.selected = null
      },

      onRowSelected(items) {
        this.selected = items
      },

      clearSelected() {
        this.$refs.selectableTable.clearSelected()
      }
    },
      mounted () {
        axios
      .get('http://127.0.0.1:5001/api/Aktivnosti')
      .then(response => { this.info = response })
    },
    computed: {
        ...mapState([
          'activityStore'
        ])
    }
  }
</script>