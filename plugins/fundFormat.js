import Vue from 'vue'

Vue.filter('currancy',(value) => {
    return "$" + value 
})