<template>
  <div id="NewsContent" class="content">
    <h1 class="ttl-page" ref="ttlPage">NEWS</h1>
    <div class="enter-view" ref="enterView">
      <section class="inner-child">
        <article class="news-post">
          <div class="article-head">
            <div class="news-date">2018.09.12 | SOPHISHE</div>
            <!--<div class="news-category">SOPHISHE</div>-->
          </div>
          <h2 class="news-title">9/12(wed)リニューアルオープン</h2>
          <div class="news-image">
            <img src="@/assets/img/news/20180912/1.jpg"/>
          </div>
          <p class="txt-read">
            この度、Sophishe（ソフィシー）は<br>
            2018 Autumn Collectionを機にリニューアルオープン致しました。<br><br>
            以前の商品に比べて、各国のvintage partsをはじめ<br class="pc">こだわりのインポートパーツや天然素材を多く取り扱う商品となっております。<br><br>
            ひとつひとつのパーツはシンプルながらもデザイン性の高い、人と被ることのないヴィンテージライク/ジュエリーライクなデザインを提案します。
          </p>
          <div class="news-image">
            <img src="@/assets/img/news/20180912/2.jpg"/>
          </div>
          <p class="txt-read">
            【New Shop Card & Wrapping】<br><br>
            リニューアルオープンと同時に、届いた瞬間からお楽しみ頂けるようショップカードとラッピングもデザイン変更しました。<br><br>
            ラッピングは、大人カジュアルなBOXにマットな質感のロゴシールを貼り、ショップカードはピアス/イヤリング同様に、1mm単位でのサイズ感や質感にこだわり、洗練された風合いに仕上がるよう活版印刷にてお届け致します。
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
