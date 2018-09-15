<template>
  <div>
    <HeaderPost :postsArray="postsArray" />
    <div :class="[visible ? 'fade-in' : 'fade-out', 'post']"
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
      imageURL: '',
      visible: true,
      previousURL: '',
      nextURL: '',
      currentURL: '',
      postsArray: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.visible = false
    this.updatePostData(to.params.id)
    next()
  },
  beforeMount: function () {
    this.updatePostData(this.$route.params.id)
  },
  methods: {
    swipeLeftHandler () {
      if (
        this.previousURL &&
        this.currentURL !== this.postsArray[this.postsArray.length - 1].id
      ) {
        this.visible = false
        this.$router.push({ name: 'post', params: { id: this.previousURL } })
      }
    },
    swipeRightHandler () {
      if (
        this.nextURL &&
        this.currentURL !== this.postsArray[0].id
      ) {
        this.visible = false
        this.$router.push({ name: 'post', params: { id: this.nextURL } })
      }
    },
    updatePostData (id) {
      this.currentURL = id
      fetch('http://femme.nextmedia.ma/api/get_post/?id=' + id)
        .then(data => data.json())
        .then(response => {
          const post = response.post
          this.content = post.content
          this.title = post.title
          this.date = post.date
          this.category = post.categories[0] ? post.categories[0].title : ''
          this.imageURL = post.thumbnail_images.medium_large.url

          this.nextURL = response.next_url && parseInt(response.next_url.split('/').pop())
          this.previousURL = response.previous_url && parseInt(response.previous_url.split('/').pop())
          this.visible = true

          !this.postsArray.length && this.updatePostsArray()
        })
        .catch(error => console.error(error))
    },
    updatePostsArray () {
      fetch('http://femme.nextmedia.ma/api/get_recent_posts/')
        .then(data => data.json())
        .then(response => {
          this.postsArray = response.posts.map(post => ({
            id: post.id
          }))
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style lang="sass" scoped>
.post
  padding: 1.2rem
  opacity: 0

  &.fade-in
    animation: .3s ease-in-out forwards fade-in

  &.fade-out
    animation: .3s ease-in-out forwards fade-out

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

@keyframes fade-in
  0%
    opacity: 0
  100%
    opacity: 1

@keyframes fade-out
  0%
    opacity: 1
  100%
    opacity: 0
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
