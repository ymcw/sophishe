import Vue from 'vue'
import VueRouter from 'vue-router'
import TopPage from '@/pages/Top/index'
import NewsPage from '@/pages/News/index'
import AboutPage from '@/pages/About/index'
import CollectionPage from '@/pages/Collection/index'
import Collection2018A from '@/pages/Collection/2018A/index'
import Collection2018S from '@/pages/Collection/2018S/index'
import ContactPage from '@/pages/Contact/index'
import NotFoundPage from '@/pages/Notfound/index'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/', name: 'top', component: TopPage, meta: {}
    },
    {
      path: '/news', name: 'news', component: NewsPage, meta: {title: 'NEWS'}
    },
    {
      path: '/about', name: 'about', component: AboutPage, meta: {title: 'ABOUT'}
    },
    {
      path: '/collection', name: 'collection', component: CollectionPage, meta: {title: 'COLLECTION'}
    },
    {
      path: '/collection/2018A', name: 'collection2018A', component: Collection2018A, meta: {title: 'COLLECTION'}
    },
    {
      path: '/collection/2018S', name: 'collection2018S', component: Collection2018S, meta: {title: 'COLLECTION'}
    },
    {
      path: '/contact', name: 'contact', component: ContactPage, meta: {title: 'CONTACT'}
    },
    {
      path: '*', name: 'notfound', component: NotFoundPage
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})
