import Vue from 'vue'
import App from './App.vue'
import 'bootstrap' 
import 'bootstrap/dist/css/bootstrap_Sketshy.min.css'
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//import 'bootstrap/dist/css/bootstrap_Sketshy.min'
import { BModal, VBModal } from 'bootstrap-vue'


Vue.component('b-modal', BModal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('MyComponent', {
  components: { BModal },
  // Note that Vue automatically prefixes directive names with `v-`
  directives: { 'b-modal': VBModal }

})


Vue.component('BModal', BModal)
// Note that Vue automatically prefixes directive names with `v-`

Vue.directive('b-modal', VBModal)
