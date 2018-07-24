import Vue from 'vue'
import tips from './tips'

Vue.use(tips);

Vue.component('Button', ()=>import('./Button'));
Vue.component('Table', ()=>import('./Table'));
Vue.component('Modal', ()=>import('./Modal'));
