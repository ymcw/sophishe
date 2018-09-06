<template>
  <div id="NewsContent" class="content">
    <h1 class="ttl-page" ref="ttlPage">NEWS</h1>
    <div class="enter-view" ref="enterView">
      <section class="inner-child">
        <article class="news-post">
          <div class="article-head">
            <div class="news-date">2018.08.01</div>
            <div class="news-category">COLLECTION</div>
          </div>
          <h2 class="news-title">2018 Summer Collection “Brilliant Peral”</h2>
          <div class="news-image">
            <img src="@/assets/img/news/news_image_sample.jpg"/>
          </div>
          <p class="txt-read">
            大人カジュアルスタイルに合う洗練されたモノを生み出していきたいと思い、フランス語の“ソフィスティケ”に“女性らしさ”を組み合わせて Sophishe〈ソフィシー〉と名付けました。<br>シンプルでベーシックな形に、女性らしさやほんの少しのトレンドや個性をプラスしたデザインをコンセプトに。<br>日常の fashion style に加える事で、一段と素敵に魅せるモノをご提案出来たらと思っております。
          </p>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsPage',
  head: {
    title: {
      inner: 'NEWS'
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
