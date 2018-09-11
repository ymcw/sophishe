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
            <a href="" target="_blank">
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
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p01/2.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p01/3.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p01/4.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
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
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p02/2.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p02/3.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
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
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p03/2.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p03/3.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p03/4.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
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
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p04/2.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p04/3.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
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
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p05/2.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p05/3.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
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
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p06/2.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
            },
            {
              img: require('@/assets/img/collection/2018a/p06/3.jpg'),
              name: 'SampleSample Earrings',
              price: '¥10,000+tax'
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
