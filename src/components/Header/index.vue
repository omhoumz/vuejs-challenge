<template>
  <header>
    <div class="logo-container">
      <img class="menu-icon" :src="`${baseUrl}img/menu-icon.png`" alt="Menu icon">
      <img class="logo" src="../../assets/logo.png" alt="">
    </div>
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
  </header>
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
header
  background-color: #8a348e
  background: linear-gradient(47deg, #662d91, #ae388f);
  display: grid
  grid-template-rows: 75px 50px

  .logo-container
    display: grid
    grid-template-columns: 75px auto 75px
    align-items: center
    border-bottom: 1px solid rgba(255, 255, 255, 0.33)

    img
      justify-self: center

    .logo
      height: 55%

    .menu-icon
      height: 21px

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
