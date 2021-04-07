<template>
  <div id="app">
    {{test}}
   <router-view></router-view>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['test'])
  }
}
</script>

<style scoped>

</style>
