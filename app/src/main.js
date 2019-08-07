import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Controlling parallax for mobile workaround
Vue.directive('scroll', {
  inserted: function (el, binding) {
    // let f = function (evt) {
    //   console.log('we scrolled');
      
    //   if (binding.value(evt, el)) {
    //     window.removeEventListener('scroll', f)
    //   }
    // }
    // console.log('el', el);
    // console.log('binding', binding);
    
    
    // window.addEventListener('scroll', f)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
