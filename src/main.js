import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './assets/css/style.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';


const app = createApp(App)
const pinia = createPinia()

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router)
app.use(pinia)
app.mount('#app')
