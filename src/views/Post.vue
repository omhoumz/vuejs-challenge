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
  beforeRouteUpdate (to, from, next) {
    this.updatePostData(to.params.id)
    next()
  },
  beforeMount: function () {
    this.updatePostData(this.$route.params.id)
  },
  methods: {
    swipeLeftHandler () {
      // console.log(this.previousURL)
      this.previousURL && this.$router.push({ name: 'post', params: { id: this.previousURL } })
    },
    swipeRightHandler () {
      // console.log(this.nextURL)
      this.nextURL && this.$router.push({ name: 'post', params: { id: this.nextURL } })
    },
    updatePostData (id) {
      fetch('http://femme.nextmedia.ma/api/get_post/?id=' + id)
        .then(data => data.json())
        .then(response => {
          const post = response.post
          this.content = post.content
          this.title = post.title
          this.date = post.date
          this.category = post.categories[0] ? post.categories[0].title : ''
          this.imageURL = post.thumbnail_images.medium_large.url
          this.nextURL = response.next_url && response.next_url.split('/').pop()
          this.previousURL = response.previous_url && response.previous_url.split('/').pop()
        })
        .catch(error => console.error(error))
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
    h2
      font-size: 1.125rem
    h3
      font-size: 1rem
    h4
      font-size: 0.889rem
    p
      width: 100%

      img
        max-width: 100%
        height: auto

      iframe
        max-width: 100%

</style>
