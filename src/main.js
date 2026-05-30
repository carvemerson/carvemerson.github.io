import { createApp } from 'vue';
import App from './App.vue';
import { revealDirective } from './directives/reveal.js';
import './styles/main.css';

createApp(App)
    .directive('reveal', revealDirective)
    .mount('#app');
