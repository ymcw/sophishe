<template>
  <div id="NotContent" class="content">
    <div class="inner-wrap">
      <h1 class="n-ttl-page">PAGE NOT FOUND</h1>
      <p class="n-text">
        The Link you clicked may may be broken or<br>
        the page may have been removed.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotfoundPage',
  head: {
    title: {
      inner: 'PAGE NOT FOUND'
    },
    meta: [
      { name: 'description', content: '' }
    ]
  }
}
</script>

<style scoped>
  .n-ttl-page {
    font-size: 1.8em;
    margin-bottom: 30px;
    letter-spacing: .2em;
    text-indent: .2em;
    display: inline-block;
  }
  .n-text {
    font-family: "Yu Mincho", "游明朝体", YuMincho, serif;
    font-size: 1.4em;
    line-height: 1.4;
  }
  .n-text{
    margin-bottom: 30px;
  }
  @media screen and (min-width: 769px) {
    .n-ttl-page {
      font-size: 2.4em;
    }
    .n-text {
      font-size: 1.8em;
    }
  }
</style>
