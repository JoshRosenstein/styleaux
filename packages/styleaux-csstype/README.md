# @styleaux/csstype

[![npm](https://img.shields.io/npm/v/@stylaux/csstype.svg)](https://www.npmjs.com/package/@stylaux/csstype)

Modified version of [csstype](https://github.com/frenic/csstype)

See [csstype](https://github.com/frenic/csstype) for more detailed docs.


## Key Differences
- All types use `StringHack` rather then string inorder to maintain have intellisense.
- Generic Defaults use `StringHack` & `number` vs `string` & `0`
- All types are exported (ei. `export type Color = NamedColor | DeprecatedSystemColor | "currentcolor" | StringHack;` `NamedColor` is also exported individually)
- DeclarationProperties all have default generics rather than just interfaces
- DeclarationProperties all have mdn comments
- Properties does not include ObsoleteProperties ** May revert this
