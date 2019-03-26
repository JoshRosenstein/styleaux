/**
 * CSS helper functions for lists of values
 */
//https://github.com/servicejs/serviceui/blob/6e73c4b5a71e690a18cbeb7d33e8f1ac7592fd56/packages/mixins/src/util/css-value-helpers.ts
/** Imports */

import arrayWrapper from "./arrayWrapper";

/** Declarations */

/** Creates a comma-separated list */
export const commaSeparatedList = arrayWrapper((...values: string[]) =>
  values.join(", ")
);
/** Creates a space-separated list */
export const spaceSeparatedList = arrayWrapper((...values: string[]) =>
  values.join(" ")
);
/** Wraps a string in quotes if it contains a space */
export const wrapWithQuotesIfStringContainsSpace = (s: string) =>
  s.includes(" ") ? `"${s}"` : s;

/** Creates a CSS font list */
export const fontList = arrayWrapper((...fonts: string[]) =>
commaSeparatedList(fonts.map(wrapWithQuotesIfStringContainsSpace))
);

export const url = (urlString: string) => `url(${urlString})`;
