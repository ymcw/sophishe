<template>
  <div id="CollectionContent" class="content child detail">
    <div class="inner-wrap enter-view" ref="enterView">
      <div class="tag">COLLECTION</div>
      <h1 class="ttl-page">2018 Autumn Collection “Vintage like”</h1>
      <section v-for="(list, index) in lists" :key="list.img">
        <div class="collection-main-img c-section__image-in js-smooth-item">
          <img :src="list.img" class="js-parallax-item">
        </div>
        <a class="show-details"
           @click="changeFlag(list)"
           v-if="!list.active">Show details</a>
        <transition-group
          tag="ul" class="product-list" name="slide"
          :id="`product${ index }`"
          @enter="enter"
          @before-enter="beforeEnter"
          @after-enter="afterEnter">
          <li v-for="(product, index) in list.products"
              v-if="list.active"
              :key="index"
              :class="'product-' + index"
              :data-index="index">
            <a :href="product.link" target="_blank">
              <div class="product-img hover-img">
                <img :src="product.img">
              </div>
            </a>
            <div class="product-name">{{product.name}}</div>
            <div class="product-price">{{product.price}}</div>
          </li>
        </transition-group>
      </section>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Collection2018A',
  head: {
    title: {
      inner: 'COLLECTION'
    },
    meta: [
      { name: 'description', content: '' }
    ]
  },
  data () {
    return {
      lists: [
        {
          hash: '#product0',
          img: require('@/assets/img/collection/2018a/01_main.jpg'),
          active: false,
          products: [
            {
              img: require('@/assets/img/collection/2018a/p01/1.jpg'),
              name: 'BASIC / B-001',
              price: '¥5,845(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae68ca6e6ee3612000bed'
            },
            {
              img: require('@/assets/img/collection/2018a/p01/2.jpg'),
              name: 'STONE / B-002',
              price: '¥5,240(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae6525f7866752f00052b'
            },
            {
              img: require('@/assets/img/collection/2018a/p01/3.jpg'),
              name: 'STONE / B-003',
              price: '¥5,310(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae70f5496ff43e4001113'
            },
            {
              img: require('@/assets/img/collection/2018a/p01/4.jpg'),
              name: 'BASIC / B-004',
              price: '¥4,700(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae6b7a6e6ee6bc80011e0'
            }
          ]
        },
        {
          hash: '#product1',
          img: require('@/assets/img/collection/2018a/02_main.jpg'),
          active: false,
          products: [
            {
              img: require('@/assets/img/collection/2018a/p02/1.jpg'),
              name: 'VINTAGE / C-005(10/1〜)',
              price: '¥4,920(税込)-'
              // link: 'https://sophishehm.stores.jp/items/5b8ab3a15f7866423d00059d'
            },
            {
              img: require('@/assets/img/collection/2018a/p02/2.jpg'),
              name: 'STONE / C-006(10/1〜)',
              price: '¥5,040(税込)'
              // link: 'https://sophishehm.stores.jp/items/5b8ae5f550bbc32cd1000ae3'
            },
            {
              img: require('@/assets/img/collection/2018a/p02/3.jpg'),
              name: 'VINTAGE / C-007(10/1〜)',
              price: '¥5,210(税込)'
              // link: 'https://sophishehm.stores.jp/items/5b8ae95bef843f656e000f52'
            }
          ]
        },
        {
          hash: '#product2',
          img: require('@/assets/img/collection/2018a/03_main.jpg'),
          active: false,
          products: [
            {
              img: require('@/assets/img/collection/2018a/p03/1.jpg'),
              name: 'BASIC / B-008',
              price: '¥7,520(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae9b65496ff5dbe001427'
            },
            {
              img: require('@/assets/img/collection/2018a/p03/2.jpg'),
              name: 'VINTAGE / B-009',
              price: '¥5,240(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ab35aa6e6ee077b001bf6'
            },
            {
              img: require('@/assets/img/collection/2018a/p03/3.jpg'),
              name: 'STONE / B-010',
              price: '¥4,900(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae9f0ef843f598c002e53'
            },
            {
              img: require('@/assets/img/collection/2018a/p03/4.jpg'),
              name: 'VINTAGE / B-011',
              price: '¥5,390(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae58ea6e6ee6321000b21'
            }
          ]
        },
        {
          hash: '#product3',
          img: require('@/assets/img/collection/2018a/04_main.jpg'),
          active: false,
          products: [
            {
              img: require('@/assets/img/collection/2018a/p04/1.jpg'),
              name: 'VINTAGE / C-012(10/1〜)',
              price: '¥7,240(税込)'
              // link: 'https://sophishehm.stores.jp/items/5b8ae5335496ff5dbe0013b7'
            },
            {
              img: require('@/assets/img/collection/2018a/p04/2.jpg'),
              name: 'VINTAGE / C-013(10/1〜)',
              price: '¥7,540(税込)'
              // link: 'https://sophishehm.stores.jp/items/5b8ae5025496ff5ad7000fd7'
            },
            {
              img: require('@/assets/img/collection/2018a/p04/3.jpg'),
              name: 'STONE / C-014(10/1〜)',
              price: '¥12,100(税込)'
              // link: 'https://sophishehm.stores.jp/items/5b8ae466ef843f6009001b25'
            }
          ]
        },
        {
          hash: '#product4',
          img: require('@/assets/img/collection/2018a/05_main.jpg'),
          active: false,
          products: [
            {
              img: require('@/assets/img/collection/2018a/p05/1.jpg'),
              name: 'BASIC / B-015',
              price: '¥4,575(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae3ce50bbc33ce70009f7'
            },
            {
              img: require('@/assets/img/collection/2018a/p05/2.jpg'),
              name: 'BASIC / B-016',
              price: '¥4,575(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae3fc5496ff5dd900180d'
            },
            {
              img: require('@/assets/img/collection/2018a/p05/3.jpg'),
              name: 'BASIC / B-017',
              price: '¥7,200(税込)',
              link: 'https://sophishehm.stores.jp/items/5b8ae5bc50bbc35b0d0015a2'
            }
          ]
        },
        {
          hash: '#product5',
          img: require('@/assets/img/collection/2018a/06_main.jpg'),
          active: false,
          products: [
            {
              img: require('@/assets/img/collection/2018a/p06/1.jpg'),
              name: 'VINTAGE / C-018(10/1〜)',
              price: '¥6,030(税込)'
              // link: 'https://sophishehm.stores.jp/items/5b8ae39b50bbc32cd1000aa4'
            },
            {
              img: require('@/assets/img/collection/2018a/p06/2.jpg'),
              name: 'STONE / C-019(10/1〜)',
              price: '¥5,200(税込)'
              // link: 'https://sophishehm.stores.jp/items/5b8ae9085f78667735000d54'
            },
            {
              img: require('@/assets/img/collection/2018a/p06/3.jpg'),
              name: 'VINTAGE / C-020(10/1〜)',
              price: '¥6,310(税込)'
              // link: 'https://sophishehm.stores.jp/items/5b8ab33050bbc32fed0001bb'
            }
          ]
        }
      ]
    }
  },
  methods: {
    changeFlag (list) {
      list.active = !list.active
      let move
      if (this.$parent.state.isPC) {
        move = 200
      } else {
        move = 100
      }
      setTimeout(() => {
        let targetY = $(list.hash).offset().top
        $('html,body').animate({scrollTop: targetY - move}, 500)
      }, 100)
    },
    beforeEnter (el) {
      el.style.transitionDelay = 100 * el.dataset.index + 'ms'
    },
    enter () {
    },
    afterEnter (el) {
      el.style.transitionDelay = ''
      if (this.$parent.state.isPC) {
        let contentHeight = $('.js-contents').innerHeight()
        $('.js-dummy-scroll').css('height', contentHeight + 'px')
      }
    }
  }
}
</script>

<style lang="scss">
  @import '../style.scss';
</style>
