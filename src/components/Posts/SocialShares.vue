<template>
  <div class="socials-share">
    <div class="twitter social">
      <div class="action-label">
        غرد
        <span class="number">(23)</span>
      </div>
      <img :src="`${baseURL}img/twitter.png`" alt="Twitter Icon" class="icon icon-fb">
    </div>
    <div class="facebook social">
      <div class="action-label">
        شارك
        <span class="number">(23)</span>
      </div>
      <img :src="`${baseURL}img/facebook.png`" alt="Facebook Icon" class="icon icon-fb">
    </div>
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
  .socials-share
    margin: 1rem 0
    width: 100%
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 0.6rem
    color: white

    .social
      margin: auto
      padding: 0.6rem
      background-color: #a7a7a9
      height: 45px
      width: 100%
      border-radius: 4px
      display: flex
      justify-content: space-between
      align-items: center

      .action-label
        font-size: 1.1rem
        font-weight: bold

        .number
          font-size: 0.9rem
          opacity: .6
          font-weight: normal

      img
        height: 85%

    .facebook
      background-color: #496399

    .twitter
      background-color: #2fb1e3
</style>
