<template>
  <header>
    <NavSection :postsArray="postsArray" />
    <LogoSection />
  </header>
</template>

<script>
import LogoSection from '@/components/HeaderPost/LogoSection.vue'
import NavSection from '@/components/HeaderPost/NavSection.vue'

export default {
  components: {
    LogoSection,
    NavSection
  },
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  },
  props: {
    postsArray: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
header
  display: grid
  grid-template-rows: 35px 70px
</style>
