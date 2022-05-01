<template>
  <div  class="flex items-center h-screen justify-center cursor-pointer bg-gray-900 hover:text-white space-x-6 p-6">
     <header class="bg-gray-800 shadown-lg  rounded-lg align-center space-y-4 p-4 sm:px-4 sm:py-3 lg:p-4 xl:px-8 xl:py-6">
   
    <div class=" w-full rounded shadown-lg">
      <div class="w-full block text-white font-bold text-center">
        <h2 class="text-slate-900 font-semibold">Inicie Sesion</h2>
        <pre>
          eve.holt@reqres.in
          cityslicka
        </pre>
      </div>
      <form
        @submit="handleLogin"
        class="w-full max-w-sm rounded px-8 pt-6 pb-8 mb-4"
      >
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Nombre
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              placeholder="example@example.com"
              v-model="form.email"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              v-model="form.password"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm"> Guardar los datos </span>
          </label>
        </div>
        <p v-if="form.error" class="error">
          Has introducido mal el email o la contraseña.
        </p>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div     class="btn">
            <button
          
              type="button"
              @click="login()"
            >
              
              Inicia Sesion
            </button>
          </div>
        </div>
      </form>

      {{ password }}
    </div>
      </header>
  </div>
   
</template>

<script>
// import auth from "../services/auth";
import { useStore } from 'vuex'
import { reactive, computed, onMounted  } from "vue";
import router  from '../router'
export default {
  setup() {

    const store = useStore();

    const form = reactive({
      email: "example@example.com",
      password: "1234",
    });

    const error = reactive({
      error: false,
    });

     const loggedIn = computed(() => {
      return store.state.auth.status.loggedIn;
    });

     async function login() {
     try {
      const result = await store.dispatch("auth/login", form)
      console.log("login vues exitosoooo:: " + result)
      router.push({ path: '/' })
     
     } catch (error) {
             console.log(error);
         }
      //  try {
      //   await auth.register(form.email, form.password);
      //   router.push({ path: '/' })
      // } catch (error) {
      //   console.log(error);
      // }
    }

    return {
      form,
      login,
      loggedIn
    };
  },
};
</script>

<style lang="scss" scoped></style>
