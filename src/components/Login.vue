<template>
       <section class="form-simple" >
        <mdb-row class="align-top">
          <mdb-col md="5">
            <mdb-card>
            <div class="header pt-3 grey lighten-2">
                <mdb-row class="d-flex justify-content-start">
                <h3 class="deep-grey-text mt-3 mb-4 pb-1 mx-5">Prijavi se</h3>
                </mdb-row>
            </div>
            <mdb-card-body class="mx-4 mt-4">
                <mdb-input v-model="email" label="Unesite email" type="text"/>
                <mdb-input v-model="password" label="Unesite lozinku" type="password" containerClass="mb-0"/>
                <p class="font-small grey-text d-flex justify-content-end">Zaboravljena <a href="#" class="dark-grey-text font-weight-bold ml-1"> lozinka?</a></p>
                <div class="text-center mb-4 mt-5">
                <mdb-btn color="blue" type="button" @click="prijava" class="btn-block z-depth-2">Prijavi se</mdb-btn>
                </div>
                <p class="font-small grey-text d-flex justify-content-center">Nemate nalog? <a href="#" class="dark-grey-text font-weight-bold ml-1"> Registruj se</a></p>
            </mdb-card-body>
            </mdb-card>
        </mdb-col>
        </mdb-row>
      </section>
</template>


<script>
import Router from 'vue-router'
import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
  export default {
    name: 'FormsPage',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,    
      mdbInput,
      mdbBtn,
      mdbIcon
    },
    data: () => {
      return {
        email: '',
        password: ''
      }
    },
    created(){
          if(this.$store.state.login === "Odjavi se")
          {
            alert("Uspešno ste se odjavili")
          }

          this.MUTATION_LOGIN('Prijavi se')
          this.MUTATION_REGISTRATION('Registruj se')
    },
    methods: {
      prijava(){
        if(this.$store.state.korisnik.email===this.email && this.$store.state.korisnik.password === this.password){
          this.$nextTick(() => {
          alert("Uspešno ste se prijavili")
          });
          
          this.MUTATION_LOGIN('Odjavi se')
          this.MUTATION_REGISTRATION('')

          this.$router.push('/') 

        }
        else{
          alert("Pogrešan email ili lozinka, pokusajte ponovo")
        }
      },

        ...mapMutations([
            'MUTATION_LOGIN',
            'MUTATION_REGISTRATION'
        ]),
         ...mapActions([
            
        ]),
         ...mapGetters([

        ]),
        ...mapState([
            'korisnik',
            'login',
            'registration'
        ]),
        
    }
  }
</script>


<style>
  .form-simple .font-small {
    font-size: 0.8rem; }

  .form-simple .header {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem; }

  .form-simple input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #ff3547;
    -webkit-box-shadow: 0 1px 0 0 #ff3547;
    box-shadow: 0 1px 0 0 #ff3547; }

  .form-simple input[type=text]:focus:not([readonly]) + label {
    color: #4f4f4f; }

  .form-simple input[type=password]:focus:not([readonly]) {
    border-bottom: 1px solid #ff3547;
    -webkit-box-shadow: 0 1px 0 0 #ff3547;
    box-shadow: 0 1px 0 0 #ff3547; }

  .form-simple input[type=password]:focus:not([readonly]) + label {
    color: #4f4f4f; }
</style>