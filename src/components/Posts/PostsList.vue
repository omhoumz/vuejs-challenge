<template>
  <div class="posts-list">
    <PostItem />
    <PostItem />
    <PostItem />
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
</style>
