<template>
  <nav>
    <ul>
      <li class="lista" v-for="rota in rotas" :key="rota">
        <router-link :to="rota.path ? rota.path : '/home'">
        {{ rota.titulo }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: ['rotas']
}
</script>    

<style>
.lista{
  list-style: none;
}

@import '../assets/formulate.css';
</style>