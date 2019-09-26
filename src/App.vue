<template>
  <div id="app">
  <b-navbar style="color: #3c6afc"  toggleable="lg" type="dark" variant="info">
    <b-navbar-brand><router-link style="color:white;" to="./about">Kontakt</router-link></b-navbar-brand>
    <b-navbar-brand><router-link style="color:white;" to="./">Početna</router-link> </b-navbar-brand>
     <b-navbar-brand><router-link style="color:white;" to="./analytic">Analiza</router-link> </b-navbar-brand>
      <b-navbar-brand><router-link style="color:white;" to="./running">Trčanje</router-link> </b-navbar-brand>
    <b-navbar-brand><router-link style="color:white;" to="./login">Prijavi se</router-link></b-navbar-brand>
    <b-navbar-brand><router-link style="color:white;" to="./registration">Registracija</router-link></b-navbar-brand>
  </b-navbar>
  <div id="router" align="center" >
    <router-view  display="inline-block" />
  </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

#router{
  margin-top: 1%;
  margin-left: 5%;
  margin-right: 5%;
  text-align: center;
}
</style>
