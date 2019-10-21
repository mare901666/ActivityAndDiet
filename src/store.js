import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)


export default new Vuex.Store({
    state: {
      foodstaffStore: [],
      activityStore: [],

      pieDataProteins: 100.0,
      pieDataFats: 100.0,
      pieDataCarbs: 100.0,

      pageFood: 1,
      perPageFood: 5,
      info : [],
      login: 'Prijavi se',
      registration: 'Registruj se',

      foodAll: [],
      activityAll: [],
      korisnik: {
        prijavljen: false,
        email: 'maremare@gmail.com',
        password: 'mareMARE_2019',
        pol: 'M',
        visina: 175.0,
        tezina: 70.0,
        godine: 23.0
      },

      proteinsGrams: 0.0,
      fatsGrams: 0.0,
      carbsGrams: 0.0,
      
      caloriesUnete: 0.0,
      caloriesPotrosene: 0.0,

      renderComponentPie: true,
      renderPieGrams: true,
      runRenderer: true,
      
      calSufDef: [],

      nutrijenti7days: [],
      trcanje7days: [],
      trcanje7months: []
    },
    mutations: {
        MUTATION_LOGIN: (state, log) =>{
          Vue.set(state, 'login', log)
        },

        MUTATION_REGISTRATION: (state,reg ) =>{
          Vue.set(state, 'registration', reg)
        },

        TRCANJE_7_DAYS:(state, dodaj) =>{
          Vue.set(state, 'trcanje7days', dodaj)
        },
        TRCANJE_7_MONTHS:(state, dodaj) =>{
          Vue.set(state, 'trcanje7months', dodaj)
        },
        ///
        NUTRIJENTI_7_DAYS:(state, nutrienti) =>{
          Vue.set(state, 'nutrijenti7days', nutrienti)
        },
        CAL_SUF_DEF: (state, csd) =>{
          Vue.set(state, 'calSufDef', csd)
        },
        FORCE_RENDERER_TRUE: (state) => {
          Vue.set(state, 'renderComponentPie', true)
        },
        FORCE_RENDERER_FALSE: (state) => {
          Vue.set(state, 'renderComponentPie', false)
        },
        RENDERER_TRUE: (state) => {
          Vue.set(state, 'renderPieGrams', true)
        },
        RENDERER_FALSE: (state) => {
          Vue.set(state, 'renderPieGrams', false)
        },

        RUN_RENDERER_TRUE: (state) => {
          Vue.set(state, 'runRenderer', true)
        },
        RUN_RENDERER_FALSE: (state) => {
          Vue.set(state, 'runRenderer', false)
        },

        ADD_FOODSTAFF: (state, food) => {
            state.foodstaffStore.push(food)
        },
        ADD_ACTIVITY: (state, activity) => {
            state.activityStore.push(activity)
        },

        CLEAR_FOODSTAFF: (state, food) => {
          state.foodstaffStore = []
        },
        CLEAR_ACTIVITY: (state, activity) => {
            state.activityStore = []
        },
        //
        PADD_PIEDATA: (state, p) =>{
          Vue.set(state, 'pieDataProteins', p)
        },
        FADD_PIEDATA: (state, f) =>{
          Vue.set(state, 'pieDataFats', f)
        },
        CADD_PIEDATA: (state, c) =>{
          Vue.set(state, 'pieDataCarbs',  c)
        },
        //
        P_PIE_G: (state, p) =>{
          Vue.set(state, 'proteinsGrams', p)
        },
        F_PIE_G: (state, f) =>{
          Vue.set(state, 'fatsGrams', f)
        },
        C_PIE_G: (state, c) =>{
          Vue.set(state, 'carbsGrams',  c)
        },

        //calories 
        UNETE_C: (state, c) =>{
          Vue.set(state, 'caloriesUnete',  c)
        },
        POTROSENE_C: (state, c) =>{
          Vue.set(state, 'caloriesPotrosene',  c)
        },

        UPDATE_PAGE: (state, updatePage) => {
           state.pageFood = updatePage; 
        },
        ADD_FOODALL: (state, data) =>{
          state.foodAll = data
        }
    },
    getters:{
        gettrcanje7days: state =>{
          return state.trcanje7days
        },
        gettrcanje7months: state=>{
          return state.trcanje7months
        },
        getNutrienti7Days: state =>{
            return state.nutrijenti7days
        },
        getCalSufDef: state =>{
          return state.calSufDef
        },
        renderCompPie: state =>{
          return state.renderComponentPie
        },
        // za pocetnu stranu
        getProt: state =>{
          return state.pieDataProteins
        },
        getCarbs: state =>{
          return state.pieDataCarbs
        },
        getFat: state =>{
          return state.pieDataFats
        },

        //za pregled stranu
        getProtGrams: state =>{
          return state.proteinsGrams
        },
        getCarbsGrams: state =>{
          return state.fatsGrams
        },
        getFatGrams: state =>{
          return state.carbsGrams
        },
        //za render grams
        getGramsRender: state =>{
            return state.renderPieGrams
        },
        //
        getUnete: state =>{
          return state.caloriesUnete
        },
        getPotrosene: state =>{
          return state.caloriesPotrosene
        },

        getfoodstaffAll: state =>{
          return state.foodAll
        },
        getPageFood: state =>{
          return state.pageFood
        },
        getUrl : state =>{
          return "http://127.0.0.1:5001/api/Namirnice?Page=" + state.pageFood
        }
    },
    actions:{
      getFoods(context){
        axios
        .get("http://127.0.0.1:5001/api/Namirnice?Page=1"  )
        .then(response => { context.commit('ADD_FOODALL', response.data.data) })
        .catch(error => {
        console.log(info)})
      },

      actCalSufDef(context){
        axios
        .get('http://localhost:5001/api/Korisnik/EvidencijaKalorije/1/7dana')
        .then(response => {  context.commit('CAL_SUF_DEF', response.data) })
        .catch(error => {
         console.log(info)})
      },
      actGetNutrients(context){
        axios
        .get('http://localhost:5001/api/Korisnik/EvidencijaNutrijenata/1/7dana')
        .then(response => {  context.commit('NUTRIJENTI_7_DAYS', response.data)})
        .catch(error => {
          console.log(info)})
      },

      actGetTrcanje7days(context){
        axios
        .get('http://localhost:5001/api/Korisnik/Trcanja/1/7dana')
        .then(response => {  context.commit('TRCANJE_7_DAYS', response.data) })
        .catch(error => {
          console.log(info)})
      },

      actGetTrcanje7months(context){
        axios
        .get('http://localhost:5001/api/Korisnik/Trcanja/1/7meseci')
        .then(response => {  context.commit('TRCANJE_7_MONTHS', response.data)})
        .catch(error => {
          console.log(info)})
     
      },


      countCalsAndNutritions(context){
        let prot = 0.0
        let fat = 0.0
        let carbs = 0.0
        let cals = 0.0
        let calsLos = 0.0

        this.state.foodstaffStore.forEach((value, index) => {
          prot += (value['proteinPercent'] / 100.0) * value['grams']
          fat += (value['carbohydratePercent'] / 100.0) * value['grams']
          carbs += (value['fatPercent'] / 100.0) * value['grams']
          cals += value['calories'] * (value['grams'] / 100.0)
         });
         
        this.state.activityStore.forEach((value, index) => {
            calsLos += (value['caloriesBurnedHour'] * (value['minutes'] / 60.0)) * (1 + ((this.state.korisnik.tezina - 70.3) * 0.015))
        });

        if(this.state.korisnik.pol === "M"){
           calsLos += (10 * this.state.korisnik.tezina) + (6.25 * this.state.korisnik.visina) - (5 * this.state.korisnik.godine) + 5
        }
        else{
          calsLos += (10 * this.state.korisnik.tezina) + (6.25 * this.state.korisnik.visina) - (5 * this.state.korisnik.godine) - 161
        }

        context.commit('P_PIE_G', prot)
        context.commit('F_PIE_G', fat)
        context.commit('C_PIE_G', carbs)
        context.commit('UNETE_C', cals)
        context.commit('POTROSENE_C', calsLos)

      }
    }
  })

