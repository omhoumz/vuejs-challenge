<template>
  <div class="posts-list">
    <PostItem
      v-for="post in posts"
      :date="post.date"
      :title="post.title"
      :postLink="post.postLink"
      :imageURL="post.imageURL"
      :category="post.category"
      :key="post.id"
      :id="post.id" />
  </div>
</template>

<script>
import PostItem from '@/components/Posts/PostItem.vue'

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
