<template>
  <div class="logo-container">
    <img class="menu-icon" :src="`${baseUrl}img/menu-icon.png`" alt="Menu icon">
    <router-link to="/">
      <img class="logo" src="../../assets/logo.png" alt="next media">
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL
    }
  }
}
</script>

<style lang="sass" scoped>
.logo-container
  display: grid
  grid-template-columns: 75px auto 75px
  align-items: center
  border-bottom: 1px solid rgba(255, 255, 255, 0.33)

  img
    margin: auto

  a
    display: flex
    height: 100%

    .logo
      margin: auto
      height: 55%

  .menu-icon
    height: 21px

</style>
