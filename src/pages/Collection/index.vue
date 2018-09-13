<template>
  <div id="CollectionContent" class="content">
    <div class="inner-wrap">
      <h1 class="ttl-page" ref="ttlPage">COLLECTION</h1>
      <section class="enter-view" ref="enterView">
        <article>
          <router-link tag="div" class="collection-link c-section__image-in js-smooth-item" to="/collection/2018A">
            <a class="hover-img"><img src="@/assets/img/collection/collection_2018a.jpg" class="js-parallax-item" alt=""></a>
          </router-link>
          <h2 class="collection-title">2018 Autumn Collection “Vintage like”</h2>
        </article>
        <article>
          <router-link tag="div" class="collection-link c-section__image-in js-smooth-item" to="/collection/2018S">
            <a class="hover-img"><img src="@/assets/img/collection/collection_2018s.jpg" class="js-parallax-item" alt=""></a>
          </router-link>
          <h2 class="collection-title">2018 Autumn Collection “Jewelry like”</h2>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollectionPage',
  head: {
    title: {
      inner: 'COLLECTION'
    },
    meta: [
      { name: 'description', content: '' }
    ]
  }
}
</script>

<style lang="scss">
  @import 'style.scss';

  .hover-img{
    img{
      display: block;
      transition-duration: 0.1s;
    }
    img:hover{
      transform: scale(1.05) !important;
      transition-duration: 0.6s;
      opacity: .8;
    }
  }
</style>
