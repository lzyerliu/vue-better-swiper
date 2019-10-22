import ZySwiper from './Swiper.vue'
import ZySwiperItem from './SwiperItem.vue'

const swiper ={
  install: function (Vue) {
    Vue.component(ZySwiper.name, ZySwiper)
    Vue.component(ZySwiperItem.name, ZySwiperItem)
  }
}

// global 情况下自动安装
if (typeof window != undefined && window.Vue) {
  window.Vue.use(swiper)
}

export default swiper
