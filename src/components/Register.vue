<template>
  <div>
    <div class="max-w-sm rounded shadown-lg">
      <div class="md:w-3/3 block text-gray-500 font-bold text-center">
        <span>Registro de Usuario</span>

        <pre>
          eve.holt@reqres.in
          pistol
        </pre>
      </div>
      <form class="w-full max-w-sm rounded px-8 pt-6 pb-8 mb-4">
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
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Repeat Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
              v-model="DatosSinPeticion.passwordRepeat"
            />
            <ErrorMessage name="inline-password" class="error-feedback" />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3"></div>
          <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox" />
            <span class="text-sm"> Guardar los datos </span>
          </label>
        </div>
              <p v-if="DatosSinPeticion.error" class="error">Has introducido mal el email o la contraseña.</p>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              @click="register()"
            >
              Registrese
            </button>
          </div>
        </div>
      </form>

      {{ password }}
    </div>
  </div>
</template>

<script>
// import auth from "../services/auth";
import { reactive } from "vue";
import router  from '../router'
import { useStore } from 'vuex'
export default 
{
setup () {
    const form = reactive({
        email: 'example@example.com',
        password: '1234',
    });

    const DatosSinPeticion = reactive({
         passwordRepeat:'',
         error:false
    });

    const store = useStore();
   
    function register() {
      try {
      store.dispatch("auth/register", form)
      router.push({ path: '/' })
     } catch (error) {
             console.log("no ingreso dispatche"+ error);
         }
   
    }

     return {
         form,
         DatosSinPeticion,
         register
     }
 
},
}
</script>

<style lang="scss" scoped>
</style>