<template>
  <div id="CollectionContent" class="content">
    <div class="inner-wrap">
      <h1 class="ttl-page" ref="ttlPage">COLLECTION</h1>
      <section class="enter-view" ref="enterView">
        <article>
          <router-link tag="div" class="collection-link c-section__image-in js-smooth-item" to="/collection/2018A">
            <a class="hover-img"><img src="@/assets/img/collection/collection_2018a.jpg" class="js-parallax-item" alt=""></a>
          </router-link>
          <h2 class="collection-title">2018 Autumn Collection “Oriental”</h2>
        </article>
        <article>
          <router-link tag="div" class="collection-link c-section__image-in js-smooth-item" to="/collection/2018S">
            <a class="hover-img"><img src="@/assets/img/collection/collection_2018s.jpg" class="js-parallax-item" alt=""></a>
          </router-link>
          <h2 class="collection-title">2018 Summer Collection “Gold&Pearl”</h2>
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
</style>
