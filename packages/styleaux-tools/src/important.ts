/**
 * Returns the value with !important on the end.
 */
export function important(val: number): string;
export function important<T extends string>(val: T): T;
export function important<T extends string>(val: number | T): string {
  if (!val && val !== 0) {
    return '';
  }
  return `${val} !important`;
}
