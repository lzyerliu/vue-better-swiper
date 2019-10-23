# vue-better-swiper

> Vue component for mobile swiper.

## demo
[https://lzyerliu.github.io/vue-better-swiper](https://lzyerliu.github.io/vue-better-swiper/dist/demo/index.html)

## Usage

``` bash
# install
npm install vue-better-swiper
```

```js
// import
import VueBetterSwiper from 'vue-better-swiper'
Vue.use(VueBetterSwiper)
```

```html
// component name : zy-swiper, zy-swiper-item
<template>
  <zy-swiper @change="swiperChange" height="160px" autoplay="5000">
    <zy-swiper-item v-for="(img, index) in images" :key="index">
      <img :src="img.src" alt="" class="swiper-img">
    </zy-swiper-item>
  </zy-swiper>
</template>
```

```html
export default {
  data() {
    return {
      images: [
        { src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320' },
        { src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320' },
        { src: 'http://chzflive.caihome.cn/web/o_1c7390v9q1al1rak17g2v3uhc438?x-oss-process=image/resize,m_fill,h_240,w_320' }
      ]
    }
  }
}
```

## API

#### vue-better-swiper component attributes:

| Attr.Name | Description | Required | Default Value |
|-----|-----|-----|-----|
| height | container/img height | Y | 'auto' |
| autoplay | autoplay next | N | '' |
| change | swiper change event | N | - |
