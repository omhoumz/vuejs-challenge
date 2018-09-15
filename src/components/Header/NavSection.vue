<template>
  <div class="nav">
    <router-link to="/">
      <img class="home-icon"
        :src="`${baseUrl}img/home-icon.png`"
        alt="Home icon">
    </router-link>
    <router-link
      v-for="category in categories"
      :key="category.id"
      :id="category.id"
      :to="`/category/${category.id}`">
      <span>{{ category.label }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      baseUrl: process.env.BASE_URL,
      categories: []
    }
  },
  beforeMount: function () {
    fetch('http://femme.nextmedia.ma/api/menus/get_menu/?menu_id=7')
      .then(data => data.json())
      .then(response => {
        this.categories = response.menu.output.map(menu => ({
          id: menu.id,
          label: menu.label
        }))
      })
      .catch(error => console.error(error))
  }
}
</script>

<style lang="sass" scoped>
.nav
  display: flex
  flex-direction: row
  justify-content: end
  align-items: stretch
  overflow: hidden
  overflow-x: scroll

  &::-webkit-scrollbar
    width: 0
    height: 0

  a
    margin-left: 0.3rem
    color: white
    text-decoration: none
    padding: 0 .5rem
    display: flex
    align-items: center

    &:nth-of-type(1)
      margin-right: 0.3rem

      img
        height: 20px
        opacity: .4

    &.router-link-exact-active
      span
        opacity: 1
      img
        opacity: 1

    span
      font-size: 1rem
      opacity: .4
      transition: all .2s
      white-space: nowrap

    &:hover, &:active, &:focus
      span
        opacity: 1
</style>
