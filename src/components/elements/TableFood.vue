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
      id="my-table"
      @row-selected="onRowSelected"
      responsive="sm"
    >
    
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
      <b-button size="sm" @click="addFoodstuff">Dodaj odabranu namirnicu</b-button>
      <input v-model="value" placeholder="kolina u gramima" type="number" name="grams" min="1" max="2000"> u gramima
      </div>
    <div class="overflow-auto">

        <b-pagination 
          v-model="currentPage"
          align="center" 
          size="md" 
          :total-rows="rows" 
          :per-page="perPage"
          aria-controls="my-table"
          @input ="updatePage(p); loadParticipants()"
          >
        </b-pagination>
        <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    data() {
      return {
        value: 100,
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
          ...mapActions([
            'getFoods',
            'actCalSufDef'
          ]),
          ...mapMutations([
              'ADD_FOODSTAFF',
              'PADD_PIEDATA',
              'FADD_PIEDATA',
              'CADD_PIEDATA',
              'UPDATE_PAGE',
              'FORCE_RENDERER_TRUE',
              'FORCE_RENDERER_FALSE'
          ]),
          addFoodstuff: function() {
            this.selected[0]['grams'] = this.value
            this.ADD_FOODSTAFF(this.selected[0])
            this.selected = null
          },  
          onRowSelected(items) {
            
            this.selected = items
            this.PADD_PIEDATA(this.selected[0]['proteinPercent'])
            this.FADD_PIEDATA(this.selected[0]['fatPercent'])
            this.CADD_PIEDATA(this.selected[0]['carbohydratePercent'])

            this.FORCE_RENDERER_FALSE()

            this.$nextTick(() => {
                this.FORCE_RENDERER_TRUE()
            });

          },
          clearSelected() {
            this.$refs.selectableTable.clearSelected()
          },
          updatePage: function(page){ 
              axios
              .get('http://127.0.0.1:5001/api/Namirnice?Page=' + this.currentPage +'&PageSize='+this.perPage )
              .then(response => { this.info = response })
                this.rows = this.info.data.totalCount
          },
          created(){
              axios
              .get('http://127.0.0.1:5001/api/Namirnice?Page=' + this.currentPage +'&PageSize='+this.perPage )
              .then(response => { this.info = response })
            
              this.rows = this.info.data.totalCount 
              this.$store.dispatch('actCalSufDef')
          }
      },
      mounted () {
        axios
        .get('http://127.0.0.1:5001/api/Namirnice?Page=' + this.currentPage +'&PageSize='+this.perPage )
        .then(response => { this.info = response })
          this.rows = this.info.data.totalCount 
        //this.$store.dispatch("getFoods")
        //console.log(this.foodAll)
      },
      

    computed: {
        ...mapState([
          'foodstaffStore',
          'pageFood',
          'foodAll',
          'getProt', 
          'getCarbs', 
          'getFat',
        ])
    },
    props: [
      'item'
    ]
  }
</script>