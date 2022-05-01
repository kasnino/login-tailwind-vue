<template>

  <div>
    
      <div class="h-screen md:grid md:grid-cols-3 ">
      
      <div class="divide-y divide-gray-900 bg-gray-900">
       <h1 class="font-semibold text-3xl  p-2 border-slate-600 border-b-2 text-slate-400 text-center hover:text-white truncate ">Relatos </h1>
    <Nav>
      <NavItem href="/new" isActive><span class="truncate pr">New Releases</span></NavItem>
      <NavItem href="/top"><span class="truncate pr">Top Rated</span></NavItem>
      <NavItem href="/picks"> <span class="truncate pr">Vincent’s Picks</span></NavItem>
    </Nav>
    <div class="bg-gray-900 overflow-y-scroll h-screen min-h-full contenedor">
     <relatos-app></relatos-app>
     </div>
             </div>
 <div class="bg-gray-900 shadow-white">
    <h1 class="mb-6 text-3xl border-indigo-500 border-2 border-b-0 text-center py-2 shadow-white border-dashed text-white font-extrabold">Homeu</h1>

   <div class="max-w-7xl mx-auto   sm:px-6 md:px-8">
          <div class="md:w-3/3"></div>
          <div class="efecti md:w-3/3">
    <img class="backdrop-filter shadow-[#50d71e] rounded-lg" style="top: 42.8148%; left: 0%;opacity: 1; transform: none;" src="@/assets/pruebaEffets.jpg" alt=""> 
          </div>
   
  </div>
    
    <div class="text-center p-4 w-full">
    <button class="btn" @click="CerrarSesion()">Esta Logiado? :: {{loggedIn}} 🙀</button>
    </div>
  <div class="p-4">
<div class=" shadow-zinc-700 p-8  cursor-pointer w-full border-2 border-indigo-500 text-white rounded-xl border-dashed" 
> 
<ul v-for="(item, index) in array" :key="index" class="block centrado p-2">
 <li class="hover:text-indigo-500 text-left ">
🙀 :: [{{index}}] :: {{item}} 
</li>
</ul>
</div>
</div>
  </div>
       <div class="divide-y divide-gray-900 bg-gray-900">
       <h1 class="font-semibold text-3xl p-2 
        p-2 border-slate-600 border-b-2 text-slate-400 text-center hover:text-white truncate ">Relatos </h1>
    <Nav>
          <NavItem href="/new" isActive><span class="truncate pr">New Releases</span></NavItem>
      <NavItem href="/top"><span class="truncate pr">Top Rated</span></NavItem>
      <NavItem href="/picks"> <span class="truncate pr">Vincent’s Picks</span></NavItem>
    </Nav>
    <div class="bg-gray-900 overflow-y-scroll h-screen min-h-full contenedor">
     <relatos-app></relatos-app>
     </div>
             </div>
       
  </div>
  </div>
</template>

<script>


import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import router from "../router";
import { reactive, ref } from "vue";
 import Nav from './Lista/Nav.vue';
  import NavItem from './Lista/NavItem.vue';
    import List from './Lista/List.vue';

export default {
    components: {
      Nav,
      NavItem,
      List
    },
  setup() {
    const store = useStore();
    const array = reactive([
      'hola',
      'como',
      'vas',
      'amor',
      'gato'
    ]);
              const images = ref([
                { id: 1, url: 'src/assets/pruebaEffets.jpg', name:'image 1' 
                },  
                { id: 2, url: 'src/assets/pruebaEffets.jpg', name:'image 2' 
                },
                { id: 3, url: 'src/assets/pruebaEffets.jpg', name:'image 3' 
                },
                { id: 4, url: 'src/assets/pruebaEffets.jpg', name:'image 1' 
                },  
                { id: 5, url: 'src/assets/pruebaEffets.jpg', name:'image 2' 
                },
                { id: 6, url: 'src/assets/pruebaEffets.jpg', name:'image 3' 
                },
              ]) 
    onMounted(() => {});

    const loggedIn = computed(() => {
      return store.state.auth.status.loggedIn;
    });

    function CerrarSesion() {
      return (
        store.dispatch("auth/logout"),
        console.log("#Sesion cerrada"),
        router.push({ path: "/login" })
      );
    }

    return {
      images,
      array,
      loggedIn,
      CerrarSesion,
    };
  },
};
</script>

<style lang="css" scoped>

.efecti {
  mask-image: linear-gradient(to bottom, purple, purple, transparent);
  -webkit-mask-image: linear-gradient(to bottom, purple, purple, transparent);
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color:  var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}


.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
