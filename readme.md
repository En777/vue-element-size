# vue-element-size

v-size="onResize" get element size/width/height for Vue.js development.
```
// usage for vue.js
directives: {
  size: require('vue-element-size')
}

<div v-size:width="(size) => $refs.fixedBox.style.width = size.width + 'px'">
  // ...
</div>

<div v-size="onResize">
  // ...
</div>
onResize arguments: ![ResizeObserverEntry](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)

```

当一个 fixed 定位的元素A在页面中，如果你希望A不要超过页面中某个容器的宽度、高度，那么这个组件就能解决你的问题。

特点：

使用方法非常简单  
元素不改变尺寸的时候，也能得到宽高尺寸的回调数据  
resize改变尺寸的时候，可获取到dom节点的宽高等信息  
基于 ResizeObserver 实现的dom尺寸变更检测，兼容性：chrome >= v64  
不仅仅获取元素宽高，还有详细信息  
```
contentRect:
  bottom: 250
  height: 250
  left: 0
  right: 878
  top: 0
  width: 878
  x: 0
  y: 0

ResizeObserverEntry
  borderBoxSize: [ResizeObserverSize]
  contentBoxSize: [ResizeObserverSize]
  contentRect: {x: 0, y: 0, width: 0, height: 0, top: 0, …}
  devicePixelContentBoxSize: [ResizeObserverSize]
  target: element
```

![npm](https://img.shields.io/npm/v/vue-element-size)
[![gzip size](http://img.badgesize.io/https://unpkg.com/vue-element-size/vvue-element-size.js?compression=gzip&label=gzip%20size&style=flat-square)](https://unpkg.com/vue-element-size/vvue-element-size.js)
[![downloads](https://img.shields.io/npm/dm/vue-element-size.svg?style=flat-square)](https://www.npmtrends.com/vue-element-size)
[![MIT License](https://img.shields.io/npm/l/vue-element-size.svg?style=flat-square)](https://github.com/fisker/vue-element-size/blob/master/license)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vue-element-size/badge)](https://www.jsdelivr.com/package/npm/vue-element-size)
