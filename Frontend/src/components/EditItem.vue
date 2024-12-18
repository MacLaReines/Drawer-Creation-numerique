<template>
    <div class="h-full w-full fixed top-0 left-0 bg-black/50 z-20 flex justify-around pt-16">
        <div class="w-1/2 bg-white rounded-xl h-3/4 p-6 relative">
            <svg v-on:click="this.$parent.editing = false" class="absolute top-2 right-2 h-8 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"></path> </g></svg>
            <h1 class="font-bold text-xl">Edit Item - {{ item.name }}</h1>
            <div class="mt-4">
                <label for="name" class="block text-sm text-gray-500 dark:text-gray-300">Item's Name</label>

                <input v-model="newname"  type="text" :placeholder="item.name" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            </div>
            <div class="mt-4">
                <label for="amount" class="block text-sm text-gray-500 dark:text-gray-300">Number of items</label>

                <input v-model="newamount" type="number" :placeholder="item.amount" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            </div>
            <div class="mt-4">
                <label for="desc" class="block text-sm text-gray-500 dark:text-gray-300">Item's Description</label>

                <input v-model="newdescription" type="text" :placeholder="item.description" class="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
            </div>
            <div class="flex justify-between mt-4">
                <div class="w-1/3 mr-4"> 
                    <label for="color" class="block text-sm text-gray-500 dark:text-gray-300">Color:</label>
                    <div :style="'background-color:' + item.color" class="rounded-xl py-1.5 px-3 mt-2">
                        <input v-model="newcolorpick" type="color" class="opacity-0 w-40 rounded-xl overflow-hidden p-0 m-0 block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                </div>
                <div class="w-2/3 ml-4">
                    <label for="img" class="block text-sm text-gray-500 dark:text-gray-300">Image</label>

                    <div class="flex items-center mt-2">
                        <p class="py-2.5 px-3 text-gray-500 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg">http://</p>
                        <input v-model="image" type="text" :placeholder="item.image" class="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                    </div>
                </div>
            </div>

            <button v-on:click="this.editItem()" class=" mt-8 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 w-full">
                Edit Item
            </button>  

                      
        </div>

    </div>


   </template>
   
   <script>
 
 const axios = require('axios');

   export default {
     name: "AddItem",
   
     props: {
        item: Object
     },
   
     data() {
       return {
        newcolopick: "#000000",
        newdescription: "",
        newname: '',
        newimage: ""

       };
     },
   
     
   
     updated() {
     },
   
     methods: {
        editItem(){
            if(!this.newname){this.newname = this.item.name}
            if(!this.newdescription){this.newdescription = this.item.description}
            if(!this.newamount){this.newamount = this.item.amount}
            if(!this.newcolorpick){this.newcolorpick = this.item.color}
            if(!this.newimage){this.newimage = this.item.image}
            const newitem = {name: this.newname, description: this.newdescription, amount: this.newamount, color: this.newcolorpick, image: this.newimage}

            axios.post('http://localhost:3000/api/item/' + this.item._id, newitem)
            .then(() => {
                this.$parent.editing = false
                this.$parent.upItem()
                this.$parent.$parent.$parent.notiftext = "Item mis à jour";
                setTimeout(() => {
                    this.$parent.$parent.$parent.notiftext = "";
                }, 3000);
            })
            .catch(error => {
                console.error('Error:', error);
            }); 
        }
       },
     }
   </script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   
   
   </style>
   