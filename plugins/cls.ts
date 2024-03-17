export default defineNuxtPlugin(() => {
  {
    (...args: any[]) => {
      return args.filter((x) => x !== undefined).join(' ');
    }
  }
})
