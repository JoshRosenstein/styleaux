/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
export function calc(exp: string): string {
  return `calc(${exp})`;
}
