<template>
  <div id="AboutContent" class="content">

    <div class="inner-wrap">
      <h1 class="ttl-page" ref="ttlPage">ABOUT</h1>
      <div class="enter-view" ref="enterView">
        <div class="hello">
          <img src="@/assets/img/about/about_visual.jpg" alt="ABOUT">
        </div>
        <h2 class="about-title">
          A stylish and sophisticated woman<br>
          robe minimal and edgy styles.
        </h2>
        <p class="txt-read">
          大人カジュアルスタイルに合う洗練されたモノを生み出していきたいと思い、フランス語の“ソフィスティケ”に“女性らしさ”を組み合わせて Sophishe〈ソフィシー〉と名付けました。<br>
          シンプルでベーシックな形に、女性らしさやほんの少しのトレンドや個性をプラスしたデザインをコンセプトに。<br>
          日常の fashion style に加える事で、一段と素敵に魅せるモノをご提案出来たらと思っております。
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  head: {
    title: {
      inner: 'ABOUT'
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
