<template>
    <div>
        <button @click="visible = !visible">切换</button>
        <!-- <transition 
            @before-enter="beforeEnter"
            @enter="enter"
        >
            <div class="box" v-show="visible"></div>
        </transition> -->
        <transition
            enter-active-class='animate__animated animate__bounce'
            leave-active-class='animate__animated animate__backOutUp'
        >
            <div class="box" v-show="visible"></div>
        </transition>
        <!-- <transition name='fade'>
            <div class="box" v-show="visible"></div>
        </transition> -->
    </div>
</template>
<script>
import 'animate.css'
import Velocity from 'velocity-animate' 
export default {
    data(){
        return {
            visible:false
        }
    },
    methods:{
        beforeEnter(el){
            el.style.opacity = 0;
        },
        enter(el,done){
            Velocity(el,{opacity:1}, {duration:2000, complete:done})
        }
    }

}
</script>
<style scoped>
.box{
    width:100px;
    height:100px;
    background:red;
}
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition:opacity 1s ease-out;
}
</style>