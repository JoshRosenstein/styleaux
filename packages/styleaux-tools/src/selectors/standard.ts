/** No selector / default styles */
export const This = "&";

/** All */
export const All = "*";

/** Joins up CSS selectors, so that any of them has to match */
export function Or(first: string, ...rest: string[]) {
  return [first, ...rest].join(", ");
}

/** Joins up CSS selectors which all need to match */
export function And(first: string, ...rest: string[]) {
  return [first, ...rest].join("");
}

/** Specific HTML element */
export function Selector(sel: string) {
  return sel;
}

/** Element with ID */
export function Id(id: string) {
  return `#${id}`;
}

/** Element with class */
export function Class(cls: string) {
  return `.${cls}`;
}

const ArgHelper=(...args:[] | [string] | [string, string])=>{
  let parent: string;
  let children: string;
  if (args.length === 0) {
    parent = This;
    children = All;
  } else if (args.length === 1) {
    parent = This;
    children = args[0]!;
  } else {
    parent = args[0]!;
    children = args[1]!;
  }
  return [parent,children]

}
/** Children */
export function Children(): string;
export function Children(children: string): string;
export function Children(parent: string, children: string): string;
export function Children(...args: [] | [string] | [string, string]): string {
 const [parent,children]=ArgHelper(...args)
  return `${parent} ${children}`;
}

/** Direct Children */
export function DirectChildren(): string;
export function DirectChildren(children: string): string;
export function DirectChildren(parent: string, children: string): string;
export function DirectChildren(
  ...args: [] | [string] | [string, string]
): string {
  const [parent,children]=ArgHelper(...args)
  return `${parent} > ${children}`;
}

export function ImmediatelyFollowing(): string;
export function ImmediatelyFollowing(followingElement: string): string;
export function ImmediatelyFollowing(
  precedingElement: string,
  followingElement: string
): string;
export function ImmediatelyFollowing(
  ...args: [] | [string] | [string, string]
): string {
  const [precedingElement,followingElement]=ArgHelper(...args)
  return `${precedingElement} + ${followingElement}`;
}

export function Following(): string;
export function Following(followingElement: string): string;
export function Following(
  precedingElement: string,
  followingElement: string
): string;
export function Following(...args: [] | [string] | [string, string]): string {
  const [precedingElement,followingElement]=ArgHelper(...args)
  return `${precedingElement} ~ ${followingElement}`;
}

export function HasAttribute(name: string) {
  return `[${name}]`;
}

export function HasAttributeWithValue(name: string, value: string) {
  return `[${name}=${value}]`;
}

export function HasAttributeContainingWord(
  name: string,
  containedWord: string
) {
  return `[${name}~=${containedWord}]`;
}

export function HasAttributeContaining(name: string, containedValue: string) {
  return `[${name}*="${containedValue}"]`;
}

export function HasAttributeStartingWithWord(name: string, start: string) {
  return `[${name}|=${start}]`;
}

export function HasAttributeStartingWith(name: string, start: string) {
  return `[${name}^="${start}"]`;
}

export function HasAttributeEndingWith(name: string, end: string) {
  return `[${name}$="${end}"]`;
}
