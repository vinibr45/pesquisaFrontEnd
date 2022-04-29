<template>
  <body>
        <div class="nav-bar"></div>
        <div class="nav-bar">
      <h1 class="centralizado">Pesquisa Sobre Dev's Front-End!</h1>
    </div>
    <my-home></my-home>
  <meu-menu class="menu" :rotas="routes" />
      <transition name="pagina">
        <router-view></router-view>
      </transition>
  </body>
</template>

<script>
import myHome from "./components/home/myHome.vue"
import meuMenu from "./components/meuMenu.vue";
import { routes } from "./routes";
export default {
  components: { meuMenu },
                  myHome,
            
  data() {
    return {
      routes,
    };
  },
};
</script>

<style>
.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.3s;
}

.nav-bar {
  margin-top: -40px;
  margin-left: -20px;
  margin-right: -20px;
  padding: 40px;
  background-image: linear-gradient(120deg, #8fd3f4 0%, #84fab0 100%);
}

.centralizado {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}

.menu {
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size: 1cm;
  text-align: center;
  
}


</style>