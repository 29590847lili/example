<template>
    <div>
        <div>这是弹框</div>
        <div class="dialog-body">
            <slot name='default' :file=file>默认内容</slot>
        </div>
        <div class="dialog-fooer">
            <slot name='footer' :file=file>footer</slot>
        </div>
       
    </div>
</template>

<script>
export default {
    data(){
        return {
            file:{
                name: '',
                url: '',
            }
        }
    },
    mounted() {
        setTimeout(()=>{
            this.file ={
                name:'文件。jpg',
                url:'www'
            }
        },2000)
       
    }
}
</script>