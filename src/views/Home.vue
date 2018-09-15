<template>
  <div>
    <Header />
    <div class="home-posts">
      <PostsList :posts="posts" />
      <button class="more">+</button>
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
      posts: []
    }
  },
  beforeMount: function () {
    fetch('http://femme.nextmedia.ma/api/get_recent_posts/')
      .then(data => data.json())
      .then(response => {
        // console.log(response)
        this.posts = response.posts.map(post => ({
          id: post.id,
          postLink: '/post/' + post.id,
          date: post.date,
          title: post.title,
          imageURL: post.thumbnail_images.medium_large.url,
          category: post.categories[0] ? post.categories[0].title : ''
        }))
      })
      .catch(error => console.error(error))
  }
}
</script>

<style lang="sass" scoped>
.home-posts
  padding: 1.2rem

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
    outline-color: transparent
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.13)
    transition: box-shadow .19s cubic-bezier(0.18, 0.89, 0.32, 1.28)

    &:focus
      box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.13)

</style>
