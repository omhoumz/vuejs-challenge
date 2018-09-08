<template>
  <div class="post-list-item">
    <FeaturedImage />
    <h3>مجلس النواب يحسم في جدل تقاعد البرلمانيين الأسبوع المقبل</h3>
    <span class="posted-date">12 يونيو 2018 </span>
  </div>
</template>

<script>
import FeaturedImage from '@/components/Posts/FeaturedImage.vue'

export default {
  components: {
    FeaturedImage
  }
}
</script>

<style lang="sass" scoped>
.post-list-item
  margin-bottom: 2rem

  h3
    margin: 0
    font-size: 1.4rem
    line-height: 1.4

  .posted-date
    color: #545454
    font-size: 0.7rem
</style>
