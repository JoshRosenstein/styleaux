/**
 * Returns the string in a url()
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/url
 */
export function url(val: string): string {
  return `url(${val || ''})`;
}
