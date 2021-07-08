import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

import './theme/scss/index.scss';

createApp(App)
	.use(store)
	.use(router)
	.component('FontAwesomeIcon', FontAwesomeIcon)
	.mount('#app');
