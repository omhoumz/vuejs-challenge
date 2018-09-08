<template>
  <div class="nav">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot active"></div>
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
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

  .dot
    background-color: #fff
    height: 11px
    width: 11px
    border-radius: 50%
    margin: 0 0.2rem
    opacity: .25

    &.active
      opacity: 1
</style>
