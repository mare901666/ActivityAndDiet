<template>
  <div>
    <b-table v-if="this.info.data"
      striped hover
      :small="small"
      ref="selectableTable"
      selectable
      :select-mode="selectMode"
      selected-variant="success"
      :items="this.info.data.data"
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
     <p  v-if="selected">
      <b-button size="sm" @click="addFoodstuff">Dodaj odabranu namirnicu</b-button>
      <input v-model.number="grams" type="number">
    </p>
    <p>
      Selected Rows:<br>
      {{ selected }}
    </p> 
    <div class="overflow-auto">
        <b-pagination 
          v-model="currentPage"
          align="center" 
          size="md" 
          :total-rows="rows" 
          :per-page="perPage">
        </b-pagination>
    </div>
    <h1>{{ foodstaffStore }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        rows: 10,
        perPage: 5,
        currentPage: 1,
        info: [],
        modes: ['multi', 'single', 'range'],
        fields: [
          {
            key: 'selected',
            label: 'Izabrano'
          },
          {
            key: 'name',
            label: 'Naziv'
          },
          {
            key: 'type',
            label: 'Kategorija'
          },
          {
            key: 'calories',
            label: 'Kalorije'
          },
          {
            key: 'carbohydratePercent',
            label: 'Ugljenihidrati'
          },
          {
            key: 'proteinPercent',
            label: 'Proteini'
          },
          {
            key: 'fatPercent',
            label: 'Masti'
          }
        ],
        selectMode: 'single',
        selected: null,
        small: true
      }
    },
    methods: {
      ...mapMutations([
          'ADD_FOODSTAFF'
      ]),
      addFoodstuff: function() {
        this.ADD_FOODSTAFF(this.selected)
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
      .get('http://127.0.0.1:5001/api/food')
      .then(response => { this.info = response })
    },
    computed: {
        ...mapState([
          'foodstaffStore'
        ])
    }
  }
</script>