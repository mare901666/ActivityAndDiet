<template>
<div >
  <b-container  fluid>


    <b-row align-h="center">
      <b-col sm="2">
         <label >Unesite dužinu:</label>
      </b-col>
      <b-col sm="2">  
         <input v-model="duzina" placeholder="u metrima" type="number" name="duzina" min="50" max="300">
         </b-col>
      </b-row>


        <b-row align-h="center">
      <b-col sm="2">
         <label >Unesite vreme:</label>
      </b-col>
      <b-col sm="2">  
        <input v-model="vreme" placeholder="u minutima" type="number" name="vreme" min="50" max="300">
      </b-col>
      </b-row>

      <b-row align-h="center">
      <b-col sm="3">
        <label >Unesite datum:</label>
      </b-col>
      <b-col sm="3">
           <b-form-input v-model="datedate" :id="date" :type="type"></b-form-input>
      </b-col>
      </b-row>
      <b-row align-h="center">
        <b-button size="sm" @click="dodajTrcanje">Dodaj</b-button>
      </b-row>
 </b-container>
    <br />


    
    <h5>Izbrišite zaveleženo trčanje</h5>
     <br />
  <b-container  fluid>
      <b-row align-h="center">
      <b-col sm="3">
        <label >Unesite datum:</label>
      </b-col>
      <b-col sm="3">
           <b-form-input v-model="datedate" :id="date" :type="type"></b-form-input>
      </b-col>
        <br />
      </b-row>
       <b-row align-h="center">
        <b-button size="sm" @click="dodajTrcanje">Obriši</b-button>
      </b-row>
 </b-container>

</div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations, mapGetters ,mapActions } from 'vuex';

  export default {
    data() {
      return {
          vreme: null,
          duzina: null,
          datedate: Date.now(),
          type: "date"
      }
    },
    methods: {
      dodajTrcanje(){
          

        console.log(this.vreme)
        console.log(this.duzina)
        console.log(this.datedate)
        let data = {
                id: 0,
                korisnikId: 1,
                vreme: this.vreme,
                duzina: this.duzina,
                dan: this.datedate
            }
    
          axios.post('http://localhost:5001/api/Korisnik/Trcanja/1', 
            data,
            {
            headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json, text/plain, */*',
                    'Access-Control-Allow-Headers': 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
              }
            }
            )
            .then(response => {
                console.log(response.data)
                  this.$store.dispatch('actGetTrcanje7days')
                  this.$store.dispatch('actGetTrcanje7months')

                  this.$store.commit('RUN_RENDERER_FALSE')
                  
                this.$nextTick(() => {
                    this.$store.commit('RUN_RENDERER_TRUE')
                  });

                   this.$store.dispatch('actGetTrcanje7days')
                  this.$store.dispatch('actGetTrcanje7months')

                  this.$store.commit('RUN_RENDERER_FALSE')
                  
                this.$nextTick(() => {
                    this.$store.commit('RUN_RENDERER_TRUE')
                  });

                  alert("Uspešno ste dodali trčanje");
            })
            .catch(error => {
                console.log(error)
            });

            this.vreme = null
            this.duzina = null
            this.datedate = Date.now()
     },
        ...mapActions([
            'actGetTrcanje7days',
            'actGetTrcanje7months'
          ]),
          ...mapMutations([
              'RUN_RENDERER_FALSE',
              'RUN_RENDERER_TRUE'
          ]),
    }
  }
</script>