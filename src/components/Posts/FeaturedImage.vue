<template>
  <div class="featured-image">
    <div>
      <img :src="this.imageURL ? this.imageURL : `${process.env.BASE_URL}img/logos/logo-grey.png`" alt="">
    </div>
    <span>{{ category }}</span>
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      required: false
    },
    category: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="sass" scoped>
  .featured-image
    background-color: #e7e7e7
    position: relative
    margin-bottom: 1.2rem

    div
      height: 260px
      display: flex
      overflow: hidden
      justify-content: center

      img
        margin: auto
        max-height: 100%

    span
      position: absolute
      bottom: -0.6rem
      right: 0
      padding: 0.2rem 1rem
      background-color: #db0303
      color: white
      border-radius: 4px
</style>
