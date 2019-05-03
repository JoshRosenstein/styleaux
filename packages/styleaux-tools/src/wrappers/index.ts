/**
 * Returns the value with !important on the end.
 */
export function important(val: number): string;
export function important<T extends string | number>(
  val: T,
): Extract<T, string>;
export function important<T extends string>(val: T): T;
export function important(val: number | string): string {
  if (!val && val !== 0) {
    return '';
  }
  return `${val} !important`;
}

/**
 * Returns the string in a url()
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/url
 */
export function url(val: string): string {
  return `url(${val || ''})`;
}

/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
export function calc(exp: string): string {
  return `calc(${exp})`;
}

/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
export function quote(val: number | string): string {
  const val2 = (val || val === 0 ? val.toString() : '').replace(/\'/g, "\\'");
  return `'${val2}'`;
}
