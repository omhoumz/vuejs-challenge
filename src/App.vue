<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="sass">
body
  margin: 0

*
  box-sizing: border-box

</style>
