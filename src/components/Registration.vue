<template>
    <div >
    <section class="form-simple">
        <mdb-row>
        <mdb-col md="5">
            <mdb-card>  
            <div class="header pt-3 grey lighten-2">
                <mdb-row class="d-flex justify-content-start">
                <h3 class="deep-grey-text mt-3 mb-4 pb-1 mx-5">Registracija</h3>
                </mdb-row>
            </div>
            <mdb-card-body class="mx-4 mt-4">
                <mdb-input label="Email" type="text"/>
                <mdb-input label="Lozinka" type="password" containerClass="mb-0"/>
                <mdb-input label="Težina(kg)" type="text" containerClass="mb-0"/>
                <mdb-input label="Visina(cm)" type="text" containerClass="mb-0"/>
                <mdb-input label="Godine" type="text" containerClass="mb-0"/>
                <b-form-group label="Odaberite pol">
      <b-form-radio v-model="izabrano" name="some-radios" value="M">Muško</b-form-radio>
      <b-form-radio v-model="izabrano" name="some-radios" value="F">Žensko</b-form-radio>
    </b-form-group>
                <div class="text-center mb-4 mt-5">
                <mdb-btn color="blue" type="button" class="btn-block z-depth-2">Registruj se</mdb-btn>
                </div>
            </mdb-card-body>
            </mdb-card>
        </mdb-col>
        </mdb-row>
    </section>
    </div>
</template>


<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
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