import VueFormulate from './components/pesquisa/VueFormulate.vue'
import myHome from './components/home/myHome.vue'
export const routes = [
    { path: '/home', component: myHome, titulo : 'Home' },
    { path: '/pesquisa', component: VueFormulate, titulo : 'Pesquisa' }
];