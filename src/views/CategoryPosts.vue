<template>
  <div>
    <Header />
    <h1> {{ this.$route.params.id }} </h1>
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

<style lang="sass" scoped>
h1
  text-align: center
</style>
