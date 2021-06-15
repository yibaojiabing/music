import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import { Swipe, SwipeItem, Lazyload ,Icon} from 'vant';

createApp(App).use(store).use(router).use(Swipe).use(SwipeItem).use(Icon).use(Lazyload, {lazyComponent: true,}).mount('#app')
