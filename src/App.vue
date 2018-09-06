<template>
  <div>
    <HeaderComponent/>
    <div class="l-contents js-contents">
      <div id="app" class="l-contents__in">
        <transition
          name="router-transition" mode="out-in"
          v-on:enter="enter" appear>
          <router-view/>
        </transition>
      </div>
    </div>
    <div class="l-dummy-scroll js-dummy-scroll"></div>
    <div id="footer" :class="{fixed: isFixed}">
      <div class="inner-wrap">
        <p>© Sophishe.</p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent'
const scrollManager = require('../common/js/main.js')

const store = {
  state: {
    device: null,
    isPC: null,
    isSP: null
  }
}

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
  data () {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      isFixed: false,
      state: store.state,
      description: null
    }
  },
  watch: {
    '$route': 'upd'
  },
  created () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },
  mounted () {
    this.upd()
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      let body = $('body')
      this.width = window.innerWidth
      this.height = window.innerHeight
      if (this.width > 769) {
        store.state.device = 'pc'
        store.state.isPC = true
        store.state.isSP = false
        body.addClass('is-pc')
        body.removeClass('is-sp')
      } else {
        store.state.device = 'sp'
        store.state.isSP = true
        store.state.isPC = false
        body.addClass('is-sp')
        body.removeClass('is-pc')
      }
    },
    upd (to, from) {
      setTimeout(() => {
        scrollManager.default()
        if (this.$router.currentRoute.name === 'top') {
          this.isFixed = true
        } else {
          this.isFixed = false
        }
      }, 500)
    },
    enter () {
      let current = this.$router.currentRoute.name
      if (current === 'top' || current === 'collection2018A' || current === 'collection2018S' || current === 'notfound') {
      } else {
        this.typeSplit()
      }
    },
    typeSplit () {
      let $allMsg = $(this.$children[1].$refs.ttlPage)
      let $wordList = $allMsg.html().split('')
      $allMsg.html('')
      $.each($wordList, function (idx, elem) {
        let newEL = $('<span/>').text(elem).css({opacity: 0, transform: 'translateY(0)'})
        newEL.appendTo($allMsg)
        newEL.delay(idx * 30)
        newEL.animate({opacity: 1}, 1000)
      })
    }
  }
}
</script>

<style lang="scss">
  @import 'scss/style.scss';
  .l-contents {
    width: 100%;
    overflow: hidden;
    position: relative;
    z-index: 10;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .l-contents.is-fixed {
    position: fixed;
    top: 0; right: 0; left: 0;
  }
  .l-contents__in {
    overflow: hidden;
    background-color: #fff;
  }
  .l-dummy-scroll {
    position: relative;
    z-index: 1;
  }
</style>
