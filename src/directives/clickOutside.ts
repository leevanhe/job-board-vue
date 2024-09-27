import type { Directive } from 'vue';

const actionMap = new Map<Node, () => void>();

function clickHandler(event: MouseEvent): void {
  if (event.target instanceof Node) {
    for (const [el, action] of actionMap) {
      if (!el.contains(event.target)) action();
    }
  }
}

document.addEventListener('mousedown', clickHandler, true);

const directive: Directive = {
  mounted(el, binding) {
    actionMap.set(el, binding.value);
  },

  updated(el, binding) {
    actionMap.set(el, binding.value);
  },

  beforeUnmount(el) {
    actionMap.delete(el);
  },
};

export default directive;
