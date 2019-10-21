<template>
  <div>
    <b-form-group label="Ažurirajte vaše podatke">
      <b-form-radio-group id="radio-group-2" v-model="selected" name="radio-sub-component">
         <b-form-radio v-model="izabrano" name="some-radios" value="M">Muško</b-form-radio>
         <b-form-radio v-model="izabrano" name="some-radios" value="F">Žensko</b-form-radio>
      </b-form-radio-group>
    </b-form-group>
       Težina u kg: <input v-model="tezina" placeholder="tezina" type="number" name="tezina" min="30" max="300">
       <br /><br />Visina u cm:<input v-model="visina" placeholder="visina" type="number" name="visina" min="50" max="300">
        <br /><br />Godine: <input v-model="godine" placeholder="godine" type="number" name="godine" min="10" max="120">
        <br />
         <b-button size="sm" >Ažuriraj</b-button>
         <br />
      <br />
  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        izabrano: 'M',
        tezina: 70,
        visina: 175,
        godine: 23,
        selected: 'M'
      }
    }
  }
</script>