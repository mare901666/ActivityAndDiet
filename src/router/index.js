import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Registration from '@/components/Registration'
import Running from '@/components/Running'
import Pregled from '@/components/Pregled'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/pregled',
      name: 'Pregled',
      component: Pregled
    },
    {
      path: '/running',
      name: 'Running',
      component: Running
    },
    {
      path: '/prijava',
      name: 'Login',
      component: Login
    },
    {
      path: '/registracija',
      name: 'Registration',
      component: Registration
    }

  ]
})
