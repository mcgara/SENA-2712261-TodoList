/**
 * @template T, P
 * @param {(...args: P) => T} callback
 * @param {P} args
 * @return {() => T}
 */
function onceCallback(callback, ...args) {
  if (typeof callback !== 'function') throw TypeError('parameter callback must be type function');
  let value;
  let onceCall = false;
  return () => {
    if (!onceCall) {
      value = callback(...args);
      onceCall = true;
    }
    return value;
  }
}

module.exports = {
  onceCallback
}
