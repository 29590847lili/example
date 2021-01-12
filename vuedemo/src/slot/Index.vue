<template>
  <div>
      <ELDialog>
          <!-- <div>这是一段信息</div> -->
          <template v-slot:default="defaultdata">
              <div>默认段信息{{defaultdata}}</div>
          </template>
          <template v-slot:footer="footerdata">
              {{footerdata}}
              <div><button>sure</button></div>
          </template>
      </ELDialog>
  </div>
</template>

<script>
import Dialog from './Dialog'
export default {
    components:{
      ELDialog:Dialog,
    }
}
</script>

<style>

</style>