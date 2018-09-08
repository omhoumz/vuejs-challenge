<template>
  <div class="featured-image">
    <img :src="`${baseURL}img/logos/logo-grey.png`" alt="">
    <span>سياسة</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseURL: process.env.BASE_URL
    }
  }
}
</script>

<style lang="sass" scoped>
  .featured-image
    background-color: #e7e7e7
    position: relative
    height: 260px
    display: flex
    margin-bottom: 1.2rem

    img
      margin: auto

    span
      position: absolute
      bottom: -0.6rem
      right: 0
      padding: 0.2rem 1rem
      background-color: #db0303
      color: white
      border-radius: 4px
</style>
