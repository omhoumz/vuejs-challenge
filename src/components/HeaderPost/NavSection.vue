<template>
  <div class="nav">
    <router-link
      v-for="postLink in postsArray.slice().reverse()"
      :key="postLink.id"
      :to="`/post/${postLink.id}`" >
      <div class="dot"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    postsArray: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.nav
  background-color: #8a348e
  background: linear-gradient(47deg, #662d91, #ae388f)
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center

  height: 35px
  position: fixed
  top: 0
  right: 0
  left: 0
  z-index: 999999

  a
    text-decoration: none

    .dot
      background-color: #fff
      height: 11px
      width: 11px
      border-radius: 50%
      margin: 0 0.2rem
      opacity: .25
      transition: opacity .2s ease

    &.router-link-exact-active
      .dot
        opacity: 1
</style>
