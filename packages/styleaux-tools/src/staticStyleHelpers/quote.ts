/**
 * Returns the value with '' around it.  Any 's will be escaped \' in the output
 */
export function quote(val: number | string): string {
  const val2 = (val || val === 0 ? val.toString() : '').replace(/\'/g, "\\'");
  return `'${val2}'`;
}
