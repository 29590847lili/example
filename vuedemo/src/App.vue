<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <CssTransition/>
    <div>当前时间{{time}}</div>
    <div>格式化{{time | timeFormat('YYYY-DD-HH')}}</div>
    <SlotCom/>
    <button @click="showMsg">显示message</button>
  </div>
</template>

<script>
import { Message } from './plugin/message'
import Slot from './slot/Index'
import moment from 'moment'
import CssTransition from './components/CssTransition'
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
  components:{
    SlotCom:Slot,
    CssTransition
  },
  data(){
    return {
      a:1,
      time: Date.now()
     // b:3
    }
  },
  filters:{
    timeFormat(val,formatter = 'YYYY:DD:HH'){
     return moment(val).format(formatter)
    }
  },
  methods:{

    showMsg(){
      // Message.info({
      //   message:'hi xiaoli ',
      //   duration: 2000,
      // });
     this.$message.info({
        message:'hi xiaoli ',
        duration: 2000,
      });

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
