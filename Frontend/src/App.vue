<template>
  <div class="body relative" style="height: 100vh; overflow-y : scroll;" id="app">
    <NavBar/>
    <NotifComp :text="notiftext"/>
    <router-view></router-view>

  </div>
  
</template>

<script>
const axios = require('axios');
import NotifComp from '../src/components/NotifComp.vue'
import NavBar from '../src/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    NotifComp

  },
  data () {
    return {
      points: [],
      notiftext: ""

    }
  },

  created(){
    this.getItems();

  },




  methods: {
     getItems(){
      axios.get('http://localhost:3000/api/items')
          .then(response => {
            this.items = response.data;
            for(let item of response.data){
                this.points.push({ label: item.name, y: item.amount, color: item.color})
            }
            
            console.log(this.items)
            return response.data
          })
          .catch(error => {
            console.error('Error:', error);
          });
     }
  },


}
  

    





</script>

<style>
* {
  margin: 0;
  padding: 0;
  -webkit-user-select: none; /* pour les navigateurs basés sur WebKit */
  -moz-user-select: none; /* pour les navigateurs basés sur Gecko */
  -ms-user-select: none; /* pour les navigateurs basés sur Trident */
  user-select: none;
}

body{
  min-height : 100vh;
  background-color: aliceblue;
}

</style>