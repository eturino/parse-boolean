const FALSE_STRINGS = ["FALSE", "NO", "0"];

/**
 * Converts to a boolean. Returns false if the value is falsy.
 * If it is truthy it checks it by converting to a string, trimming, upcasing, and checking if the value is not `FALSE` or `NO` or `0`.
 *
 * @param x
 */
export function parseBoolean(
  x: boolean | number | string | null | undefined
): boolean {
  if (x === true) return true;
  if (!x) return false;
  const str = `${x}`.toUpperCase().trim();
  return !FALSE_STRINGS.includes(str);
}

export default parseBoolean;
