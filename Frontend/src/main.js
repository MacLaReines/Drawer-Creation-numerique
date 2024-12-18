import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import CanvasJSChart from '@canvasjs/vue-charts';


library.add(faPhone)




createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(CanvasJSChart).mount('#app')
