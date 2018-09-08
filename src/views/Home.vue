<template>
  <div class="home-posts">
    <PostsList />
    <button class="more">+</button>
  </div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList.vue'

export default {
  components: {
    PostsList
  }
}
</script>

<style lang="sass" scoped>
.home-posts
  padding: 1.2rem

  .more
    display: block
    margin: 0 auto 2rem
    height: 100px
    width: 100px
    line-height: 1
    border-radius: 50%
    border: 2px solid #bebebe
    background-color: transparent
    color: #bebebe
    font-weight: bold
    font-size: 2rem
</style>
