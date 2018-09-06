<template>
  <div id="ContactContent" class="content">
    <div class="inner-wrap">
      <h1 class="ttl-page" ref="ttlPage">CONTACT</h1>
      <div class="enter-view" ref="enterView">
        <p class="contact-text">If you have any questions to our products <br class="for-sp">
          please send an e-mail
        </p>
        <div class="mail-link">
          <a href="mailto:info@sophishe.com">info@sophishe.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  head: {
    title: {
      inner: 'CONTACT'
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
