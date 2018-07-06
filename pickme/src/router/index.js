import Vue from 'vue';
import Router from 'vue-router';
import MainLayout from '../components/Main/MainLayout';
import MainContentHire from '../components/Main/MainMenuContent/MainContentHire';
import MainContentCompany from '../components/Main/MainMenuContent/MainContentCompany';
import MainContentTalent from '../components/Main/MainMenuContent/MainContentTalent';
import MainContentClinic from '../components/Main/MainMenuContent/MainContentClinic';

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
    path: '/',
  }, {
    path: '/main',
    name: 'main-layout',
    component: MainLayout,
    children: [{
      path: 'hire',
      name: 'main-content-hire',
      component: MainContentHire
    },{
      path: 'company',
      name: 'main-content-company',
      component: MainContentCompany
    },{
      path: 'talent',
      name: 'main-content-talent',
      component: MainContentTalent
    },{
      path: 'clinic',
      name: 'main-content-clinic',
      component: MainContentClinic
    } ]
  }]
})