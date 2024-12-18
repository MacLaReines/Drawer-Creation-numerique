<template>
   <header class="mt-20">
    

    <div class="lg:flex">
        <div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div class="max-w-xl">
                <h2 class="text-3xl font-semibold text-gray-800 lg:text-4xl">Inventory Management <span class="text-blue-600 ">Solution</span></h2>

                <p class="mt-4 text-sm text-gray-500 lg:text-base">Inventory management has never been easier with <span class="text-blue-600 ">Drawer</span>. <br/>Project by Bastien PINA</p>

                <div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <router-link to="/home" class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-blue-900 rounded-md hover:bg-blue-700">Overview</router-link>
                    <router-link to="/manage" class="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Manage items</router-link>
                </div>
            </div>
        </div>

        <div class="w-full lg:w-1/3 lg:h-auto">
            <img src="../assets/inventory.jpg" class="" style="border-radius: 50px;" alt="">
        </div>
    </div>
</header>
</template>
  <script>
  
  
  
  
  
    export default {
      data() {
        return {
          
        };
      },
      
      methods: {
        
      },
    };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  
  
  
  </style>
  
  