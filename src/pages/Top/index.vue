<template>
  <div id="TopContent" class="content">
    <full-page :options="options" id="fullpage">
      <section class="section section-2018a">
        <router-link tag="a" class="text-link" to="/collection/2018A">
          <img src="@/assets/img/top/top_text2018a.png" @mouseenter="zoomImage" @mouseleave="zoomOutImage">
        </router-link>
      </section>
      <section class="section section-2018s">
        <router-link tag="a" class="text-link" to="/collection/2018S">
          <img src="@/assets/img/top/top_text2018s.png" @mouseenter="zoomImage" @mouseleave="zoomOutImage">
        </router-link>
      </section>
    </full-page>
  </div>
</template>

<script>
export default {
  name: 'top',
  head: {
    meta: [
      { name: 'description', content: '' }
    ]
  },
  data () {
    return {
      options: {
        licenseKey: '4C4EFEC2-8A0D4D01-9CCD9682-B5B213D6',
        afterLoad: this.afterLoad,
        scrollingSpeed: 1000,
        easing: 'easeOutElastic'
      }
    }
  },
  methods: {
    zoomImage (e) {
      let target = $(e.fromElement)
      target.addClass('zoom')
    },
    zoomOutImage (e) {
      let target = $(e.relatedTarget)
      target.removeClass('zoom')
    }
  }
}
</script>

<style lang="scss">
  @import 'style.scss';
</style>
