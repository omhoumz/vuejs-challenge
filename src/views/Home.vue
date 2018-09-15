<template>
  <div>
    <Header />
    <div class="home-posts">
      <PostsList :posts="posts" />
      <button
        v-if="currentPageNumber <= pagesNumber"
        class="more"
        @click="loadMorePosts"
        >+</button>
      <div
        v-else
        v-show="pagesNumber"
        class="nomore">
        أنت على اطلاع على كل الأخبار
      </div>
    </div>
  </div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList.vue'
import Header from '@/components/Header'

export default {
  components: {
    PostsList,
    Header
  },
  data () {
    return {
      posts: [],
      currentPageNumber: 1,
      pagesNumber: 0
    }
  },
  methods: {
    loadPosts (currentPageNumber) {
      fetch('http://femme.nextmedia.ma/api/get_recent_posts/?page=' + currentPageNumber)
        .then(data => data.json())
        .then(response => {
          (this.currentPageNumber <= response.pages) && this.currentPageNumber++
          this.pagesNumber = response.pages

          const newPosts = response.posts.map(post => ({
            id: post.id,
            postLink: '/post/' + post.id,
            date: post.date,
            title: post.title,
            imageURL: post.thumbnail_images.medium_large.url,
            category: post.categories[0] ? post.categories[0].title : ''
          }))
          this.posts = [
            ...this.posts,
            ...newPosts
          ]
        })
        .catch(error => console.error(error))
    },
    loadMorePosts () {
      if ( this.currentPageNumber > this.pagesNumber ) {
        return
      }

      this.loadPosts(this.currentPageNumber)
    }
  },
  beforeMount: function () {
    this.loadPosts(this.currentPageNumber)
  }
}
</script>

<style lang="sass" scoped>
.home-posts
  padding: 1.2rem

  .nomore
    color: #bebebe
    text-align: center

  .more
    display: block
    margin: 0 auto 2rem
    height: 100px
    width: 100px
    border-radius: 50%
    border: 2px solid #bebebe
    background-color: transparent
    color: #bebebe
    font-weight: bold
    font-size: 2rem
    line-height: 1
    outline-color: transparent
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.13)
    transition: box-shadow .19s cubic-bezier(0.18, 0.89, 0.32, 1.28)

    &:focus
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.13)

</style>
