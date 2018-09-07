<template>
  <div class="posts-list">
    <PostItem />
    <PostItem />
    <PostItem />
    <button class="more">+</button>
  </div>
</template>

<script>
import PostItem from '@/components/Posts/PostItem.vue'

export default {
  components: {
    PostItem
  }
}
</script>

<style lang="sass" scoped>
.posts-list

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
