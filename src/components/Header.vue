<template>
    <div>
<nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6  dark:shadow-zinc-500">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Iniciar Sesion
      </a>

       <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Cerrar Sesion
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Registrarse
      </a>
    </div>
   
    <figure class="ripple">
  <img class="w-9 h-9 cursor-pointer border-2 border-white  rounded-full mx-auto" src="@/assets/logo.png" alt="" width="384" height="512">
    <!-- <figcaption class="text-white ">Perfil</figcaption> -->
    </figure>

    <div class="mx-2">
      <a 
      @click="Registrarse()"
      href="#" class="inline-block text-sm px-4 py-2 leading-none  rounded text-white  hover:border-transparent hover:text-teal-500 bg-indigo-700 mt-4 lg:mt-0">Registrarse</a>
    </div>
       <div v-if="!loggedIn">
      <a href="#" 
      @click="InicioSesion()"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-dashed border-white border-white border-1 hover:border-1 hover:border-gray-500  hover:text-teal-500 bg-indigo-700 mt-4 lg:mt-0">Iniciar Sesion</a>
    </div>

      <div class="mx-2" v-if="loggedIn">
      <a href="#" 
      @click="CerrarSesion()"
      class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-dashed border-white border-white border-1 hover:border-1 hover:border-gray-500  hover:text-gray-900 bg-red-600 mt-4 lg:mt-0">Cerrar Sesion</a>
    </div>
        
       <figure class="mx-2" @click="ChangeThemeDark()">   
         <button type="button" class="  border-2 border-gray-800  hover:border-gray-500 hover:bg-gray-900 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-toggle="default-modal"> 
            <svg v-if="state.themeDark" class="w-6 h-6 text-white fill-white hover:fill-gray-500 mx-auto cursor-pointer"  stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

              
         <svg v-if="!state.themeDark" class="w-6 h-6 fill-white text-white hover:fill-gray-500 cursor-pointer"  stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12L23 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 2V1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 23V22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 20L19 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 4L19 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20L5 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 4L5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12L2 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


         </button>
       </figure>
   
  
    </div>
 
</nav>
    </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { reactive, toRefs } from 'vue'
import router  from '../router'
import { useStore } from "vuex";
export default {
    setup () {
        const store = useStore();
       
       
            
        
        const state = reactive({
             count: 0,
             themeDark:false
        })
    

       const loggedIn = computed(() => {
      return store.state.auth.status.loggedIn;
    });

    
    function InicioSesion(){
        return  router.push({ path: '/login' });
    }

    function CerrarSesion() {
      return store.dispatch("auth/logout")
    }

    function Registrarse(){
      return  router.push({ path: '/register' });
    }

    function ChangeThemeDark(){
           if(state.themeDark){
               state.themeDark = false
            } else {
              state.themeDark = true
            }

            return state.themeDark;
    }

    
        return {
            state,
            InicioSesion,
            CerrarSesion,
            Registrarse,
            ChangeThemeDark,
            loggedIn,
            
        }
    }
}
</script>

<style lang="scss" scoped>

</style>