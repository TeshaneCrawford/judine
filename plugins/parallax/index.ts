import Rellax from 'rellax';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("parallax", {
    mounted(el, binding) {
      const rellax = new Rellax(el, {
        speed: binding.value.speed || -2,
        center: binding.value.center || false,
        wrapper: binding.value.wrapper || null,
        round: binding.value.round || true,
        vertical: binding.value.vertical || true,
        horizontal: binding.value.horizontal || false
      });
      el.rellax = rellax;

      if (binding.value.destroy) {
        el.rellax.destroy();
      }

      if (binding.value.refresh) {
        el.rellax.refresh();
      }
    }
  });
})
