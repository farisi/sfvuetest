import { createApp } from 'vue'
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from './components/Layout.vue'
import router from './router';

createApp(Layout)
.use(router)
.mount('#app');
