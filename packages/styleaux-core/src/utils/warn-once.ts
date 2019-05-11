export function createWarnOnce(title) {
  if (process.env.NODE_ENV !== 'production') {
    let printed = {};

    return function warnOnce(firstarg: any, ...args: any[]) {
      const M = JSON.stringify(args);
      if (printed[M]) {
        return;
      }
      printed[M] = true;

      if (typeof console !== 'undefined' && console.warn) {
        console.warn(`[${title}]: ${firstarg}`, ...args);
      }
    };
  }

  return (..._args: any[]) => {};
}
