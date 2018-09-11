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
          フランス語の“sophistiqué”洗練された<br>英語の“she”女性らしさを組み合わせ<br><br>
          洗練された女性へという意味を込めて<br class="sp">Sophishe〈ソフィシー〉と名付けました。<br><br>
          「日常のファッションに合わせるだけでミニマルでエッジィな雰囲気を纏えるもの」<br>
          「個性的なニュアンスを取り入れつつも洗練された大人カジュアルスタイルをつくれるもの」<br><br>
          このようなコンセプトを大切に<br>
          国内外から取り寄せた数少ないvintage parts、<br class="sp">高品質な天然素材 / 樹脂 /<br class="pc">
          加工金属 etc.. 多様な素材をMIX。<br><br>
          長くご愛用頂けるように製作後ナノコーティングをしております。<br>
          また、接続パーツの細部まで素敵と感じて頂けるよう、<br class="pc">数ミリ単位での調整や製作 / 販売 を心がけています。<br><br>
          大人スタイリングのアクセントへ、<br class="sp">今までにないカタチを提案します。
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
  @media print, screen and (min-width: 768px) {
    br.sp { display: none; }
    br.pc { display: inline; }
  }
  @media screen and (max-width: 767px) {
    br.sp { display: inline; }
    br.pc { display: none; }
  }
</style>
