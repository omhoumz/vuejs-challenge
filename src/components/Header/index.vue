<template>
  <header>
    <LogoSection />
    <NavSection />
  </header>
</template>

<script>
import LogoSection from '@/components/Header/LogoSection.vue'
import NavSection from '@/components/Header/NavSection.vue'

export default {
  components: {
    LogoSection,
    NavSection
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>

<style lang="sass" scoped>
header
  background-color: #8a348e
  background: linear-gradient(47deg, #662d91, #ae388f);
  display: grid
  grid-template-rows: 75px 50px
</style>
