import Vue from 'vue'
import syncForm from 'vue-sync-form'
import App from './App.vue'

Vue.use(syncForm)

var vm = new Vue({
    el: "#app",
    components: { App },
    template: '<App/>'
})

window.vm = vm;