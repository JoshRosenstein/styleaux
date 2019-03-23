[@styleaux/styles-base](../README.md) > ["rules/border"](../modules/_rules_border_.md)

# External module: "rules/border"

## Index

### Type aliases

* [BorderKeys](_rules_border_.md#borderkeys)
* [BorderProp](_rules_border_.md#borderprop)

### Variables

* [border](_rules_border_.md#border)
* [borderBottom](_rules_border_.md#borderbottom)
* [borderColor](_rules_border_.md#bordercolor)
* [borderLeft](_rules_border_.md#borderleft)
* [borderRight](_rules_border_.md#borderright)
* [borderTop](_rules_border_.md#bordertop)
* [borderX](_rules_border_.md#borderx)
* [borderY](_rules_border_.md#bordery)

### Functions

* [borderRule](_rules_border_.md#borderrule)

---

## Type aliases

<a id="borderkeys"></a>

###  BorderKeys

**Ƭ BorderKeys**: *"border" \| "borderLeft" \| "borderRight" \| "borderTop" \| "borderBottom" \| "borderColor"*

*Defined in [rules/border.ts:5](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L5)*

___
<a id="borderprop"></a>

###  BorderProp

**Ƭ BorderProp**: *`BorderProperty`<`string` \| `0`>*

*Defined in [rules/border.ts:4](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L4)*

___

## Variables

<a id="border"></a>

### `<Const>` border

**● border**: *`function`* = borderRule<BorderProp>("border")

*Defined in [rules/border.ts:18](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L18)*

#### Type declaration
▸<`Media`,`M`>(input: *`ResponsiveProp<T, Media>`*, props: *`__type`*, mediaKey?: *`M` \| `undefined`*): `IStyles`

**Type parameters:**

#### Media :  `__type`
#### M :  `string`
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `ResponsiveProp<T, Media>` |
| props | `__type` |
| `Optional` mediaKey | `M` \| `undefined` |

**Returns:** `IStyles`

___
<a id="borderbottom"></a>

### `<Const>` borderBottom

**● borderBottom**: *`function`* =  borderRule<BorderProp>("borderBottom")

*Defined in [rules/border.ts:22](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L22)*

#### Type declaration
▸<`Media`,`M`>(input: *`ResponsiveProp<T, Media>`*, props: *`__type`*, mediaKey?: *`M` \| `undefined`*): `IStyles`

**Type parameters:**

#### Media :  `__type`
#### M :  `string`
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `ResponsiveProp<T, Media>` |
| props | `__type` |
| `Optional` mediaKey | `M` \| `undefined` |

**Returns:** `IStyles`

___
<a id="bordercolor"></a>

### `<Const>` borderColor

**● borderColor**: *`function`* =  borderRule<BorderColorProperty>("borderColor")

*Defined in [rules/border.ts:25](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L25)*

#### Type declaration
▸<`Media`,`M`>(input: *`ResponsiveProp<T, Media>`*, props: *`__type`*, mediaKey?: *`M` \| `undefined`*): `IStyles`

**Type parameters:**

#### Media :  `__type`
#### M :  `string`
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `ResponsiveProp<T, Media>` |
| props | `__type` |
| `Optional` mediaKey | `M` \| `undefined` |

**Returns:** `IStyles`

___
<a id="borderleft"></a>

### `<Const>` borderLeft

**● borderLeft**: *`function`* = borderRule<BorderProp>("borderLeft")

*Defined in [rules/border.ts:19](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L19)*

#### Type declaration
▸<`Media`,`M`>(input: *`ResponsiveProp<T, Media>`*, props: *`__type`*, mediaKey?: *`M` \| `undefined`*): `IStyles`

**Type parameters:**

#### Media :  `__type`
#### M :  `string`
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `ResponsiveProp<T, Media>` |
| props | `__type` |
| `Optional` mediaKey | `M` \| `undefined` |

**Returns:** `IStyles`

___
<a id="borderright"></a>

### `<Const>` borderRight

**● borderRight**: *`function`* = borderRule<BorderProp>("borderRight")

*Defined in [rules/border.ts:20](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L20)*

#### Type declaration
▸<`Media`,`M`>(input: *`ResponsiveProp<T, Media>`*, props: *`__type`*, mediaKey?: *`M` \| `undefined`*): `IStyles`

**Type parameters:**

#### Media :  `__type`
#### M :  `string`
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `ResponsiveProp<T, Media>` |
| props | `__type` |
| `Optional` mediaKey | `M` \| `undefined` |

**Returns:** `IStyles`

___
<a id="bordertop"></a>

### `<Const>` borderTop

**● borderTop**: *`function`* = borderRule<BorderProp>("borderTop")

*Defined in [rules/border.ts:21](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L21)*

#### Type declaration
▸<`Media`,`M`>(input: *`ResponsiveProp<T, Media>`*, props: *`__type`*, mediaKey?: *`M` \| `undefined`*): `IStyles`

**Type parameters:**

#### Media :  `__type`
#### M :  `string`
**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `ResponsiveProp<T, Media>` |
| props | `__type` |
| `Optional` mediaKey | `M` \| `undefined` |

**Returns:** `IStyles`

___
<a id="borderx"></a>

### `<Const>` borderX

**● borderX**: *`function`[]* =  [borderLeft,borderRight]

*Defined in [rules/border.ts:23](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L23)*

___
<a id="bordery"></a>

### `<Const>` borderY

**● borderY**: *`function`[]* =  [borderTop, borderBottom]

*Defined in [rules/border.ts:24](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L24)*

___

## Functions

<a id="borderrule"></a>

### `<Const>` borderRule

▸ **borderRule**<`T`>(name: *[BorderKeys](_rules_border_.md#borderkeys)*): `function`

*Defined in [rules/border.ts:13](https://github.com/JoshRosenstein/styleaux/blob/d996b95/packages/styleaux-styles-base/src/rules/border.ts#L13)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| name | [BorderKeys](_rules_border_.md#borderkeys) |

**Returns:** `function`

___

