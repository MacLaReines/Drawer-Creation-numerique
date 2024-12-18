<template>
  <div class="flex flex-col lg:flex-row justify-around lg:mx-16 lg:my-8 mt-8 h-5/6">
    <div class="mx-4 lg:w-5/6 bg-white shadow-md rounded-xl ">
      <h1 class="text-xl font-bold text-gray-600 p-6 border-b-2 border-gray-200">Quick Update</h1>
      <form class="p-6">
        <label for=""></label>
        <div>
      <label id="listbox-label" class="block text-sm font-medium leading-6 text-gray-900">Select an Item</label>
      <div class="relative mt-2">
        <div v-on:click="itemSelection = !itemSelection" type="button" class="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
          <span class="flex items-center">
            <img v-if="selected" :src="selected.image" alt="" class="h-5 w-5 flex-shrink-0 rounded-full">
            <img v-else src="../assets/notimg.jpg" alt="" class="h-5 w-5 flex-shrink-0 rounded-full">

            <span v-if="!selected" class="ml-3 block truncate">Click to select !</span>
            <span v-else class="ml-3 block truncate">{{ selected.name }}</span>
          </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
        <div v-if="itemSelection" class="max-h-80 z-12 absolute cursor-pointer transition-all border-b-2 border-l-2 border-r-2 border-gray-200 rounded-b-xl w-full overflow-hidden overflow-y-scroll">
          <div v-for="i in this.$parent.$parent.items" :key="i">
            <div v-on:click="this.selected = i; this.itemSelection = false; this.defaultVal = i.amount;" class="flex justify-between h-16 w-full bg-gray-100 hover:bg-indigo-100 px-4 transition-all">
              <div class="flex">
                <img class="h-12 mr-2 my-2 w-12 rounded-xl" :src="i.image" alt="">
                <h3 class="text-gray-600 h-4 my-4">{{ i.name }}</h3>
              </div>
              <h3 class="text-gray-400 h-4 my-4 w-[70px]">Qt: {{ i.amount }}</h3>
            </div>
          </div>
        </div>
    
      </div>
      <label id="" class="block text-sm font-medium leading-6 text-gray-900 mt-3">Edit:</label>
      <div class="h-80 p-4 pt-2 border-2 rounded-xl">
        <h2 v-if="!selected" class="text-gray-400 text-center mt-24">Waiting for the selection</h2>
        <div class="w-full" v-else>
          <div class="w-full flex">
            <label id="" class="block text-sm font-medium leading-6 text-gray-900 mt-3 mr-4">Name: </label>
            <h2 class="block text-sm font-medium leading-6 text-gray-600 mt-3">{{ selected.name }}</h2>
          </div>
          <h2 class="text-gray-400 text-3xl text-center mt-4">Quantity</h2>
          <div class="w-full mx-1/4 flex">
            <div class="flex w-1/3 mt-12">
              <div v-on:click="this.selected.amount = this.selected.amount - 50; if(this.selected.amount < 0){this.selected.amount = 0}"  class="cursor-pointer h-12 bg-red-400 hover:font-bold w-16 rounded-l text-center center pt-3">-50</div>
              <div v-on:click="this.selected.amount = this.selected.amount - 10; if(this.selected.amount < 0){this.selected.amount = 0}"  class="cursor-pointer h-12 bg-red-300 hover:font-bold w-16 pt-3 text-center center">-10</div>
              <div v-on:click="this.selected.amount = this.selected.amount - 1; if(this.selected.amount < 0){this.selected.amount = 0}"  class="cursor-pointer h-12 bg-red-200 hover:font-bold w-16 rounded-r pt-3 text-center center">-1</div>
            </div>
            <div class="text-center w-1/3">
              <h2 class="font-bold text-4xl mt-12">{{ selected.amount }}</h2>
            </div>
            <div class="flex w-1/3 mt-12">
              <div v-on:click="this.selected.amount = this.selected.amount + 1" class=" cursor-pointer h-12 bg-green-200 hover:font-bold w-16 rounded-l pt-3 text-center center">+1</div>
              <div v-on:click="this.selected.amount = this.selected.amount + 10" class="cursor-pointer h-12 bg-green-300 hover:font-bold w-16 pt-3 text-center center">+10</div>
              <div v-on:click="this.selected.amount = this.selected.amount + 50" class="cursor-pointer h-12 bg-green-400 hover:font-bold w-16 rounded-r pt-3 text-center center">+50</div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-around">
          <div v-if="selected" v-on:click="this.selected.amount = defaultVal" class="cursor-pointer h-6 bg-gray-300 rounded hover:font-bold w-1/2 mt-6 text-xs align-center text-center pt-1">RESET</div>
        </div>
      </div>
      <div class="flex ">
        <div v-on:click="this.selected = ''" v-if="selected" class="cursor-pointer mt-2 w-full px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600 rounded-l-lg hover:bg-gray-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-center w-1/3  lg:w-1/6 " :class="{'bg-orange-600 hover:bg-orange-700' : selected}">
          Cancel
        </div>
        <div v-on:click="updatedSelected()" class="cursor-pointer mt-2 w-full px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-600  hover:bg-gray-500 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 text-center" :class="{'bg-blue-500 rounded-l-none  hover:bg-blue-600' : selected}">
          <p v-if="selected">Update Item</p>
          <p v-else>Waiting</p>
        </div>
      </div>
      

    </div>


      </form>
    </div>
    <div class="mx-4 lg:w-5/6 bg-white shadow-md rounded-t-xl lg:rounded-xl overflow-hidden">
      <h1 class="text-lg lg:text-xl font-bold text-gray-600 p-6 border-b-2 border-gray-200 overflow-hidden lg:mb-8">Overview</h1>
      <ChartComp :reload="forceReload" :points="this.$parent.$parent.points" class="w-full"/>

    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  import ChartComp from '../components/ChartComp.vue'





  export default {

    components:{
      ChartComp
    },

    data() {
      return {
        chartVisible: true,
        default: 0,
        itemSelection: false,
        selected: '',
        datasets: [
            {
              backgroundColor: ['#FF5733', '#33FF5B', '#3387FF'],
              data: [30, 50, 20],
            },
          ],
      };
    },
    
    methods: {
     
      

      updatedSelected(){
        axios.post('http://localhost:3000/api/item/' + this.selected._id, {"amount" : this.selected.amount})
          .then(() => {
            this.selected = ''
            this.$parent.$parent.points = []
            window.location.reload();


          })
          .catch(error => {
            console.error('Error:', error);
          });      }
    },
  };
</script>

<style scoped>




</style>

