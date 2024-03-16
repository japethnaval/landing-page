export const getImageUrl = (path: string) =>
  new URL(`../assets/${path}`, import.meta.url).href
