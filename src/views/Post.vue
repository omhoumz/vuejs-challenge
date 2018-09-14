<template>
  <div>
    <HeaderPost />
    <div class="post"
      v-touch:swipe.left="swipeLeftHandler"
      v-touch:swipe.right="swipeRightHandler">

      <FeaturedImage :imageURL="imageURL" :category="category" />

      <h1 v-html="title"></h1>
      <span class="posted-date"> {{ date }} </span>

      <SocialShares />
      <div class="post-content" v-html="content"></div>
      <SocialShares />

    </div>
  </div>
</template>

<script>
import FeaturedImage from '@/components/Posts/FeaturedImage.vue'
import SocialShares from '@/components/Posts/SocialShares.vue'
import HeaderPost from '@/components/HeaderPost'

export default {
  components: {
    FeaturedImage,
    SocialShares,
    HeaderPost
  },
  data () {
    return {
      content: '',
      title: '',
      date: '',
      category: '',
      imageURL: ''
    }
  },
  beforeMount: function () {
    fetch('http://femme.nextmedia.ma/api/get_post/?id=' + this.$route.params.id)
      .then(data => data.json())
      .then(response => {
        this.content = response.post.content
        this.title = response.post.title
        this.date = response.post.date
        this.category = response.post.categories[0] ? response.post.categories[0].title : ''
        this.imageURL = response.post.thumbnail_images.medium_large.url
      })
      .catch(error => console.error(error))
  },
  methods: {
    swipeLeftHandler () {
      console.log('Left')
    },
    swipeRightHandler () {
      console.log('Right')
    }
  }
}
</script>

<style lang="sass" scoped>
.post
  padding: 1.2rem

  h1
    margin: 0
    line-height: 1.5
    font-size: 1.4rem

  .posted-date
    color: #545454
    font-size: 0.8rem

  .post-content
    margin: 2.2rem 0

    p
      width: 100vw
      background-color: #000

      iframe
        width: 100vw
</style>

<style lang="sass">

  .post-content
    p
      width: 100%

      iframe
        max-width: 100%

    p:nth-of-type(1)
      font-weight: bold

</style>
