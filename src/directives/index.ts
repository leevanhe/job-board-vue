import type { Plugin } from 'vue';
import clickOutside from './clickOutside';

const plugin: Plugin = {
  install(Vue) {
    Vue.directive('click-outside', clickOutside);
  },
};

export default plugin;