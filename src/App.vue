<template>
  <div class="p-0 bg-gray-900 ">
      <body class="h-screen  bg-gray-900 dark:bg-black">
    <header-app></header-app>
  
        
      <router-view />
  
      <!-- <header-app></header-app> -->
          </body>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style lang="css">
@import "./assets/components/buttons.css";
@import "./assets/components/center.css";
.contenedor::-webkit-scrollbar {
    -webkit-appearance: none;
}

.contenedor::-webkit-scrollbar:vertical {
    width:10px;
}
.contenedor::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
    display: none;
} 

.contenedor::-webkit-scrollbar:horizontal {
    height: 10px;
}

.contenedor::-webkit-scrollbar-thumb {
    background-color:#334155;
    border-radius: 20px;
    border: 2px solid #111827;
  
}
.contenedor::-webkit-scrollbar-track {
    border-radius: 10px;  
    background:none;
}

::-webkit-scrollbar {
    -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
    width:10px;
}
::-webkit-scrollbar-button:increment,.contenedor::-webkit-scrollbar-button {
    display: none;
    
} 

::-webkit-scrollbar:horizontal {
    height: 10px;
}

::-webkit-scrollbar-thumb {
    background-color: #79797998;
    border-radius: 20px;
    background:#4338ca;
  
}

::-webkit-scrollbar-track {
    border-radius: 10px; 
    background:#111827;
}
/* .btn {
    @apply bg-cyan-500 shadow-lg shadow-cyan-500/50  hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded;
  } */
</style>
