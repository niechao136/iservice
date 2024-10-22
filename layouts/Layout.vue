<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import { AicsLayoutBody, AicsLayoutHeader, AicsLayoutNav, LayoutNavModel, UserControlNavModel } from '@/../components'
import { HeaderTitle } from '@/SRPFramework'
import { jumpToTitle, startLoading, stopLoading } from '@/SRPFramework/stores'
import { LoginStore } from '@/stores'

@Component({
  components: {
    AicsLayoutBody,
    AicsLayoutHeader,
    AicsLayoutNav,
  }
})
export default class Layout extends Mixins(HeaderTitle) {
  //#region Nav
  //#endregion
  //#region Init

  protected async created() {

  }
  //#endregion
}
</script>

<template>

</template>

<style scoped lang="scss">

</style>