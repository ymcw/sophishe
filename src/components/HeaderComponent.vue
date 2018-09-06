<template>
  <div id="header" :class='{isFixed:isFixed}'>
    <div class="inner-wrap">
      <div class="logo">
        <router-link tag="a" to="/" exact><img src="@/assets/img/logo.svg" alt="sophishe"></router-link>
      </div>
      <ul class="navigation">
        <span>
          <router-link tag="li" class="nav-link" to="/" exact><a>TOP</a></router-link>
          <router-link tag="li" class="nav-link" to="/news"><a>NEWS</a></router-link>
          <router-link tag="li" class="nav-link" to="/about"><a>ABOUT</a></router-link>
          <router-link tag="li" class="nav-link" to="/collection"><a>COLLECTION</a></router-link>
          <router-link tag="li" class="nav-link" to="/contact"><a>CONTACT</a></router-link>
          <li><a href="https://sophishehm.stores.jp/" target="_blank">ONLINE STORE</a></li>
        </span>
        <li class="nav-ig">
          <a href="https://www.instagram.com/sophishe_official/" target="_blank">
            <img src="@/assets/img/icon_instagram.png" alt="instagram">
          </a>
        </li>
      </ul>
    </div>

    <div class="toggle for-sp" @click="toggleMenu">
      <div class="panel-btn-icon" v-if="!showMenu"></div>
      <div v-else class="panel-btn-icon close"></div>
    </div>
    <div class="list" :class='{show: showMenu}'>
      <ul id="sp-navigation">
        <router-link tag="li" class="nav-link" @click.native="toggleMenu()" to="/" exact><a>TOP</a></router-link>
        <router-link tag="li" class="nav-link" @click.native="toggleMenu()" to="/news"><a>NEWS</a></router-link>
        <router-link tag="li" class="nav-link" @click.native="toggleMenu()" to="/about"><a>ABOUT</a></router-link>
        <router-link tag="li" class="nav-link" @click.native="toggleMenu()" to="/collection"><a>COLLECTION</a></router-link>
        <router-link tag="li" class="nav-link" @click.native="toggleMenu()" to="/contact"><a>CONTACT</a></router-link>
        <li><a href="https://sophishehm.stores.jp/" target="_blank">ONLINE STORE</a></li>
        <li class="nav-ig">
          <a href="https://www.instagram.com/sophishe_official/" target="_blank">
            <img src="../assets/img/icon_instagram.png" alt="instagram">
            INSTAGRAM
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
    return {
      scrollY: 0,
      isFixed: false,
      showMenu: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.scrollY = window.pageYOffset
      if (scrollY >= 100) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    })
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    enter () {
      let nav = $('#sp-navigation')
      nav.addClass('show')
    }
  }
}
</script>
<style scoped>
  .toggle{
    width: 20px;
    height: calc(32px / 2);
    position: absolute;
    right: 20px;
    top: 30px;
    font-size: 2em;
    z-index: 101;
  }
  .list{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    opacity: 0;
    transition: .1s ease-out;
    display: none;
  }
  .list.show{
    display: block;
    opacity: 1;
    transition: .2s ease-in;
  }
  .list.show li{
    margin-left: -10px;
    /*-webkit-animation: MenuOptionFadeIn 1s ease;*/
    /*-moz-animation: MenuOptionFadeIn 1s ease;*/
    /*-o-animation: MenuOptionFadeIn 1s ease;*/
    animation: MenuOptionFadeIn 1s ease;
    /*-moz-animation-fill-mode: forwards;*/
    /*-o-animation-fill-mode: forwards;*/
    /*-ms-animation-fill-mode: forwards;*/
    animation-fill-mode: forwards;
    /*-webkit-animation-name: MenuOptionFadeIn;*/
    /*-webkit-animation-duration: 1s;*/
    /*-webkit-animation-timing-function: ease;*/
    /*-webkit-animation-fill-mode: forwards;*/
  }

  .list.show li:nth-child(1){
    -webkit-animation-delay: .05s;
    -moz-animation-delay: .05s;
    -o-animation-delay: .05s;
    animation-delay: .05s;
  }

  .list.show li:nth-child(2){
    -webkit-animation-delay: .1s;
    -moz-animation-delay: .1s;
    -o-animation-delay: .1s;
    animation-delay: .1s;
  }

  .list.show li:nth-child(3){
    -webkit-animation-delay: .15s;
    -moz-animation-delay: .15s;
    -o-animation-delay: .15s;
    animation-delay: .15s;
  }

  .list.show li:nth-child(4){
    -webkit-animation-delay: .2s;
    -moz-animation-delay: .2s;
    -o-animation-delay: .2s;
    animation-delay: .2s;
  }

  .list.show li:nth-child(5){
    -webkit-animation-delay: .25s;
    -moz-animation-delay: .25s;
    -o-animation-delay: .25s;
    animation-delay: .25s;
  }
  .list.show li:nth-child(6){
    -webkit-animation-delay: .3s;
    -moz-animation-delay: .3s;
    -o-animation-delay: .3s;
    animation-delay: .3s;
  }
  .list.show li:nth-child(7){
    -webkit-animation-delay: .35s;
    -moz-animation-delay: .35s;
    -o-animation-delay: .35s;
    animation-delay: .35s;
  }

  @keyframes MenuOptionFadeIn{
    0%{
      opacity:0;
      margin-left:-5px
    }
    100%{
      opacity:1;
      margin-left:0
    }
  }
  #sp-navigation{
    margin: 80px 5.3333333% 0;
    font-size: 1.4em;
  }
  #sp-navigation li{
    margin-bottom: 40px;
    opacity: 0;
  }
  #sp-navigation .nav-ig img{
    width: 12px;
    height: 12px;
  }

  .panel-btn-icon {
    display: block;
    position: absolute;
    width: 20px;
    height: 1px;
    background: #000;
    top: 50%;
    margin-top: -1px;
  }
  .panel-btn-icon:before, .panel-btn-icon:after {
    display: block;
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    background: #000;
  }
  .panel-btn-icon:before {
    margin-top: -6px;
  }
  .panel-btn-icon:after {
    margin-top: 6px;
  }

  .panel-btn-icon.close{
    background: transparent;
  }

  .panel-btn-icon.close:before, .panel-btn-icon.close:after {
    margin-top: 0;
  }
  .panel-btn-icon.close:before {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
  .panel-btn-icon.close:after {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }
</style>
