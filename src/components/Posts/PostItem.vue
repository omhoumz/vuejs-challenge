<template>
  <div class="post-list-item">
    <a :href="postLink">
      <FeaturedImage :imageURL="imageURL" :category="category" />
      <h3 v-html="title" ></h3>
      <span class="posted-date">{{ date }}</span>
    </a>
  </div>
</template>

<script>
import FeaturedImage from '@/components/Posts/FeaturedImage.vue'

export default {
  components: {
    FeaturedImage
  },
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    postLink: {
      type: String,
      required: true
    },
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
.post-list-item
  margin-bottom: 2rem

  a
    text-decoration: none
    color: #010101

  h3
    margin: 0
    font-size: 1.4rem
    line-height: 1.4

  .posted-date
    color: #545454
    font-size: 0.7rem
</style>
