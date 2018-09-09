<template>
  <div>
    <HeaderPost />
    <div class="post"
      v-touch:swipe.left="swipeLeftHandler"
      v-touch:swipe.right="swipeRightHandler">
      <FeaturedImage />
      <h1>الحكومة: لم يتم إعفاء "سنترال دانون" من الضريبة.. وهذه الشركات الصناعية المعنية</h1>
      <span class="posted-date">12:45 - 12/03/2015</span>
      <SocialShares />
      <div class="post-content">
        <p>
          قال الأمين العام لجامعة الدول العربية أحمد أبو الغيط، إن الصاروخ الذي أطلقته ميليشيات الحوثيين على السعودية قبل أيام، يعد الحلقة الأخطر من التجاوزات الإيرانية.
        </p>
        <p>
          وخلال كلمته في جلسة طارئة لوزراء الخارجية العرب في القاهرة، الأحد، اعتبر أبو الغيط أن "الصاروخ رسالة عدوان إيرانية غير مقبولة شكلا ومضمونا". وأضاف أبو الغيط: "البرنامج الصاروخي الإيراني يشكل تهديدا خطيرا للمنطقة وأمنها. والتهديدات الإيرانية تجاوزت الحدود وتدفع المنطقة إلى الهاوية".
        </p>
        <p>
          وأردف المسؤول العربي: "إيران تتبع استراتيجية طائفية لتاجيج الصراعات في المنطقة وتسعى أن يكون اليمن شوكة في خاصرة السعودية والعالم العربي". ودعا أمين عام الجامعة العربية طهران لأن "تراجع سياستها تجاه المنطقة وتوقف تدخلاتها".
        </p>
        <p>
          قال وزير الخارجية السعودي عادل الجبير، إن الصاروخ الإيراني على المملكة يعكس العدوان المتكرر ضد السعودية، معتبرا أن "السكوت على الاعتداءات الإيرانية عبر عملائها في المنطقة لن يجعل أي عاصمة عربية بمنأى عن هذه الصواريخ".
        </p>
      </div>
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

    p:nth-of-type(1)
      font-weight: bold
</style>
