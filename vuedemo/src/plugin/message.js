
import Vue from 'vue'
import MessageComponent from './message.vue'
let vm;
const getInstance =() =>{
    if(!vm){
       vm = new Vue({
            render:h =>h(MessageComponent)
        }).$mount()
    }
    

    document.body.appendChild(vm.$el)
    return vm.$children[0]
}
    
const Message ={
    info(option){
        getInstance().add(option)
    }
}

export {
    Message
}

export default {
    install(Vue,options){
        Vue.prototype.$message={
            info:Message.info
        }
    }
}