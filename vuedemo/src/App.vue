<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <Slot/>
  </div>
</template>

<script>
import Slot from './slot/Index'
const mixin ={
  data(){
    return {
      b:2
    }
  },
  methods(){

  },
  created(){

  }
}

export default {
  name: 'App',
  mixin:[mixin],
  component:{
    Slot
  },
  data(){
    return {
      a:1,
     // b:3
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
