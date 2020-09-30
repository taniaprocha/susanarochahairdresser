// eslint-disable-next-line import/prefer-default-export
export const onClientEntry = async () => {
  if (typeof Map === "undefined") {
    await import("core-js/es6/map")
  }

  if (typeof Set === "undefined") {
    await import("core-js/es6/set")
  }

  if (typeof window.requestAnimationFrame === "undefined") {
    await import("raf/polyfill")
  }

  await import("babel-polyfill")
}
