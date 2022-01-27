<template>
  <div>
    <h1 class="mb-6 text-3xl t ext-red-100 font-extrabold">Home</h1>

  
   
    <div @click="CerrarSesion()">🙀</div>
    <div>loggedIn:: {{loggedIn}}.</div>
<div> 🙀</div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import router  from '../router'
export default {
  setup() {
    const store = useStore();

    onMounted(() => {
    });

    const loggedIn = computed(() => {
      return store.state.auth.status.loggedIn;
    });

    function CerrarSesion() {
      return  store.dispatch("auth/logout"), 
              console.log("#Sesion cerrada"),
              router.push({ path: '/login' })
              
    };

    return {
      loggedIn,
      CerrarSesion
    };
  },
};
</script>

<style lang="scss" scoped></style>
