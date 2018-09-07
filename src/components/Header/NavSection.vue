<template>
  <div class="nav">
    <router-link to="/">
      <img class="home-icon" :src="`${baseUrl}img/home-icon.png`" alt="Home icon">
    </router-link>
    <router-link to="/">
      <span>سياسة</span>
    </router-link>
    <router-link to="/">
      <span>مجتمع</span>
    </router-link>
    <router-link to="/">
      <span>اقتصاد</span>
    </router-link>
    <router-link to="/">
      <span>رياضة</span>
    </router-link>
    <router-link to="/">
      <span>ثقافة</span>
    </router-link>
    <router-link to="/">
      <span>مجتمع</span>
    </router-link>
    <router-link to="/">
      <span>اقتصاد</span>
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
.nav
  display: flex
  flex-direction: row
  justify-content: end
  align-items: stretch
  width: 100vw
  overflow: hidden
  overflow-x: scroll

  a
    margin-left: 0.3rem
    color: white
    text-decoration: none
    padding: 0 1rem
    display: flex
    align-items: center

    &:nth-of-type(1)
      margin-right: 0.3rem

      img
        height: 20px

    span
      font-size: 1rem
      font-family: 'Cairo', sans-serif
      opacity: .4

    &:hover, &:active, &:focus
      span
        opacity: 1
</style>
