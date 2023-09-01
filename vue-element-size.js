// vue-element-size
/*
  v-size="onResize"
  v-size:width="onGetSize"
*/

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    // global var: window.VueElementSize
    root.VueElementSize = factory();
  }
}(this, function () {
  var VueElementSize = {
    inserted: function (el, binding, vnode, oldVnode) {
      var userFn = binding.value;
      // console.log(binding);

      function callback(entries, observer) {
        // ResizeObserverEntry https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry

        // v-size:width="fn"
        // quick return size
        if (binding.arg) {
          var contentRect = entries[0].contentRect;
          userFn(contentRect);
          return;
        }

        // v-size="fn"
        // return ResizeObserverEntry
        userFn(entries)
      }

      // ResizeObserver https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/ResizeObserver
      var observer = new ResizeObserver(callback).observe(el);
      el.observer = observer;
    },
    unbind: function (el, binding, vnode, oldVnode) {
      // destroy
      if (el.observer) {
        el.observer.disconnect();
        delete el.observer;
      }
    }
  }

  return VueElementSize;
}));
