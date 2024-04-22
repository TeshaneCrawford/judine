declare module '@nuxt/image' {
    interface NuxtImage {
      $img: (src: string, options?: { width?: number }) => string;
    }

    export const $img: NuxtImage['$img'];
  }
