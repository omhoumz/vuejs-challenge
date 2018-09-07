<template>
  <div class="home-posts">
    <PostsList />
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
  padding: 1rem
</style>
